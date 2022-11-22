// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import api from "../../../common/api";
import { Grid, LinearProgress } from "@mui/material";
import { User, UsersList } from "./types";
import { usersSort } from "../../../utils/sortFunctions";
import { AddIcon, DeleteIcon, GroupsIcon, UsersIcon } from "../../../icons";
import {
  actionsTray,
  containerForHeader,
  searchField,
  tableStyles,
} from "../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../common/types";

import TableWrapper from "../Common/TableWrapper/TableWrapper";
import PageHeader from "../Common/PageHeader/PageHeader";
import { encodeURLString } from "../../../common/utils";
import HelpBox from "../../../common/HelpBox";
import AButton from "../Common/AButton/AButton";
import PageLayout from "../Common/Layout/PageLayout";
import SearchBox from "../Common/SearchBox";
import withSuspense from "../Common/Components/withSuspense";
import {
  CONSOLE_UI_RESOURCE,
  IAM_PAGES,
  IAM_SCOPES,
  S3_ALL_RESOURCES,
} from "../../../common/SecureComponent/permissions";

import RBIconButton from "../Buckets/BucketDetails/SummaryItems/RBIconButton";
import {
  hasPermission,
  SecureComponent,
} from "../../../common/SecureComponent";
import { setErrorSnackMessage } from "../../../systemSlice";

const DeleteUser = withSuspense(React.lazy(() => import("./DeleteUser")));
const AddToGroup = withSuspense(React.lazy(() => import("./BulkAddToGroup")));

const styles = (theme: Theme) =>
  createStyles({
    ...actionsTray,
    ...searchField,
    searchField: {
      ...searchField.searchField,
      marginRight: "auto",
      maxWidth: 380,
    },
    ...tableStyles,
    ...containerForHeader(theme.spacing(4)),
  });

interface IUsersProps {
  classes: any;
  history: any;
}

const ListUsers = ({ classes, history }: IUsersProps) => {
  const dispatch = useDispatch();
  const [records, setRecords] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [addGroupOpen, setAddGroupOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);

  const displayListUsers = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_LIST_USERS,
  ]);

  const viewUser = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_GET_USER,
  ]);

  const addUserToGroup = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_ADD_USER_TO_GROUP,
  ]);

  const deleteUser = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.ADMIN_DELETE_USER,
  ]);

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);
    if (refresh) {
      setLoading(true);
    }
    setCheckedUsers([]);
  };

  const closeAddGroupBulk = (unCheckAll: boolean = false) => {
    setAddGroupOpen(false);
    if (unCheckAll) {
      setCheckedUsers([]);
    }
  };

  useEffect(() => {
    if (loading) {
      if (displayListUsers) {
        api
          .invoke("GET", `/api/v1/users`)
          .then((res: UsersList) => {
            const users = res.users === null ? [] : res.users;

            setLoading(false);
            setRecords(users.sort(usersSort));
          })
          .catch((err: ErrorResponseHandler) => {
            setLoading(false);
            dispatch(setErrorSnackMessage(err));
          });
      } else {
        setLoading(false);
      }
    }
  }, [loading, dispatch, displayListUsers]);

  const filteredRecords = records.filter((elementItem) =>
    elementItem.accessKey.includes(filter)
  );

  const selectionChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value = "", checked = false } = {} } = e;

    let elements: string[] = [...checkedUsers]; // We clone the checkedUsers array

    if (checked) {
      // If the user has checked this field we need to push this to checkedUsersList
      elements.push(value);
    } else {
      // User has unchecked this field, we need to remove it from the list
      elements = elements.filter((element) => element !== value);
    }

    setCheckedUsers(elements);

    return elements;
  };

  const viewAction = (selectionElement: any): void => {
    history.push(
      `${IAM_PAGES.USERS}/${encodeURLString(selectionElement.accessKey)}`
    );
  };

  const tableActions = [
    {
      type: "view",
      onClick: viewAction,
      disableButtonFunction: () => !viewUser,
    },
    {
      type: "edit",
      onClick: viewAction,
      disableButtonFunction: () => !viewUser,
    },
  ];

  return (
    <Fragment>
      {deleteOpen && (
        <DeleteUser
          deleteOpen={deleteOpen}
          selectedUsers={checkedUsers}
          closeDeleteModalAndRefresh={(refresh: boolean) => {
            closeDeleteModalAndRefresh(refresh);
          }}
          history={history}
        />
      )}
      {addGroupOpen && (
        <AddToGroup
          open={addGroupOpen}
          checkedUsers={checkedUsers}
          closeModalAndRefresh={(close: boolean) => {
            closeAddGroupBulk(close);
          }}
        />
      )}
      <PageHeader label={"Users"} />
      <PageLayout>
        <Grid item xs={12} className={classes.actionsTray}>
          <SearchBox
            placeholder={"Search Users"}
            onChange={setFilter}
            overrideClass={classes.searchField}
            value={filter}
          />
        </Grid>

        {loading && <LinearProgress />}
        {!loading && (
          <Fragment>
            {records.length > 0 && (
              <Fragment>
                <Grid
                  item
                  xs={12}
                  className={classes.tableBlock}
                  marginBottom={"15px"}
                >
                  <SecureComponent
                    scopes={[IAM_SCOPES.ADMIN_LIST_USERS]}
                    resource={CONSOLE_UI_RESOURCE}
                    errorProps={{ disabled: true }}
                  >
                    <TableWrapper
                      itemActions={tableActions}
                      columns={[
                        { label: "Access Key", elementKey: "accessKey" },
                      ]}
                      onSelect={
                        addUserToGroup || deleteUser
                          ? selectionChanged
                          : undefined
                      }
                     //selectedItems={checkedUsers}
                      isLoading={loading}
                      records={filteredRecords}
                      entityName="Users"
                      idField="accessKey"
                    />
                  </SecureComponent>
                </Grid>
              </Fragment>
            )}
            {records.length === 0 && (
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"start"}
              >
                <Grid item xs={8}>
                </Grid>
              </Grid>
            )}
          </Fragment>
        )}
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(ListUsers);
