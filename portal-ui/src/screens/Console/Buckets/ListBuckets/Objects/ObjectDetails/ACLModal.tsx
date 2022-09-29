// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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
import { Button, LinearProgress } from "@mui/material";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import Grid from "@mui/material/Grid";
import {
  containerForHeader,
  modalBasic,
} from "../../../../Common/FormComponents/common/styleLibrary";

import api from "../../../../../../common/api";
import CodeMirrorWrapper from "../../../../Common/FormComponents/CodeMirrorWrapper/CodeMirrorWrapper";
import {
  setErrorSnackMessage,
  setSnackBarMessage,
} from "../../../../../../systemSlice";
import { ErrorResponseHandler } from "../../../../../../common/types";
import Paper from "@mui/material/Paper";
import { encodeURLString } from "../../../../../../common/utils";
import ModalWrapper from "../../../../Common/ModalWrapper/ModalWrapper";

import {
  hasPermission,
  SecureComponent,
} from "../../../../../../common/SecureComponent";

import {
  CONSOLE_UI_RESOURCE,
  IAM_SCOPES,
} from "../../../../../../common/SecureComponent/permissions";

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    pageContainer: {
      border: "1px solid #EAEAEA",
      height: "100%",
    },
    paperContainer: {
      padding: "15px 15px 15px 50px",
      minHeight: "450px",
    },
    statement: {
      border: "1px solid #DADADA",
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    labelCol: {
      fontWeight: "bold",
    },
    ...modalBasic,
    ...containerForHeader(theme.spacing(4)),
  });

interface IAclModalProps {
  classes: any;
  open: boolean;
  closeModalAndRefresh: (reload: boolean) => void;
  objectName: string;
  bucketName: string;
}

const AclModal = ({
  classes,
  open,
  closeModalAndRefresh,
  objectName,
  bucketName,
}: IAclModalProps) => {
  const dispatch = useDispatch();
  const [AclDefinition, setAclDefinition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [addLoading, setAddLoading] = useState<boolean>(false);

  const editAcl = hasPermission(CONSOLE_UI_RESOURCE, [
    IAM_SCOPES.S3_PUT_BUCKET_ACL,
  ]);

  const saveRecord = (event: React.FormEvent) => {
    event.preventDefault();
    if (addLoading) {
      return;
    }
    setAddLoading(true);
    if (editAcl) {
      api
        .invoke("PUT", `/api/v1/buckets/${bucketName}/objects/acl?prefix=${encodeURLString(objectName)}`, {
          aclstr: AclDefinition,
        })
        .then((_) => {
          setAddLoading(false);
          dispatch(setSnackBarMessage("ACL successfully updated"));
        })
        .catch((err: ErrorResponseHandler) => {
          setAddLoading(false);
          dispatch(setErrorSnackMessage(err));
        });
    } else {
      setAddLoading(false);
    }
  };

  const resetForm = () => {
    setAclDefinition("{}");
  };

  useEffect(() => {
    if (loading) {
      api
        .invoke("GET", `/api/v1/buckets/${bucketName}/objects/acl?prefix=${encodeURLString(objectName)}`)
        .then((res) => {
          setLoading(false);
          setAclDefinition(JSON.stringify(JSON.parse(res), null, 4));
        })
        .catch((err: ErrorResponseHandler) => {
          setLoading(false);
          dispatch(setErrorSnackMessage(err));
        });
    }
  }, [loading, setLoading, dispatch, bucketName, objectName]);

  return (
    <ModalWrapper
      title="ACL Object"
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh(false);
      }}
    >
    <Fragment>
      <div className={classes.sectionTitle}>ACL Content</div>
      <Paper className={classes.paperContainer}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            saveRecord(e);
          }}
        >
          <Grid container>
            <Grid item xs={12} className={classes.formScrollable}>
              <CodeMirrorWrapper
                readOnly={!editAcl}
                value={AclDefinition}
                onBeforeChange={(editor, data, value) => {
                  setAclDefinition(value);
                }}
                editorHeight={"350px"}
              />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              {
                <button
                  type="button"
                  color="primary"
                  className={classes.clearButton}
                  onClick={() => {
                    resetForm();
                  }}
                >
                  Clear
                </button>
              }
              <SecureComponent
                scopes={[IAM_SCOPES.S3_PUT_BUCKET_ACL]}
                resource={CONSOLE_UI_RESOURCE}
                errorProps={{ disabled: true }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={addLoading}
                >
                  Save
                </Button>
              </SecureComponent>
            </Grid>
            {(addLoading || loading) && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Fragment>
    </ModalWrapper>
  );
};

export default withStyles(styles)(AclModal);
