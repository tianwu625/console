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

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalWrapper from "../Common/ModalWrapper/ModalWrapper";
import Grid from "@mui/material/Grid";
import api from "../../../common/api";
import { UsersIcon } from "../../../icons";
import { setModalErrorSnackMessage } from "../../../systemSlice";
import { encodeURLString } from "../../../common/utils";
import TableWrapper from "../Common/TableWrapper/TableWrapper";
import withStyles from "@mui/styles/withStyles";
import createStyles from "@mui/styles/createStyles";
import { Theme } from "@mui/material/styles";

import {
  containerForHeader,
  formFieldStyles,
  modalStyleUtils,
  spacingUtils,
} from "../Common/FormComponents/common/styleLibrary";

interface GetUserDetailProps {
  classes: any;
  open: boolean;
  userName: string;
  closeModal: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    ...modalStyleUtils,
    ...formFieldStyles,
    ...spacingUtils,
    ...containerForHeader(theme.spacing(4)),
  });

const GetUserDetailInfoModal = ({
  classes,
  open,
  userName,
  closeModal,
}: GetUserDetailProps) => {
  const dispatch = useDispatch();
  const [cid, setCid] = useState<string>("");
  const [pgid, setPgid] = useState<number>(-1);
  const [uid, setUid] = useState<number>(-1);
  const [sgids, setSgids] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function fetchUserDetail() {
    setLoading(true);
    api
      .invoke("GET", `/api/v1/user/${encodeURLString(userName)}/Detail`)
      .then((res) => {
        setSgids(res.sgids);
        setCid(res.canonicalID);
        setPgid(res.pgid);
        setUid(res.uid);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        dispatch(setModalErrorSnackMessage(err));
      });
  }

  useEffect(() => {
    fetchUserDetail();
  }, [userName, dispatch, setSgids, setCid, setPgid, setUid, setLoading]);

  return open ? (
    <ModalWrapper
      title={userName}
      modalOpen={open}
      onClose={() => {
        closeModal();
      }}
      titleIcon={<UsersIcon />}
    >
      <form noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={12} className={classes.modalFormScrollable}>
            <div className={classes.spacerBottom}>CanonicalId: {cid}</div>
            <div className={classes.spacerBottom}>PGID: {pgid}</div>
            <div className={classes.spacerBottom}>UID: {uid}</div>
            <div className={classes.tableBlock}>
              <TableWrapper
                columns={[{ label: "Name", elementKey: "gid" }]}
                records={sgids}
                entityName="SGroups"
                idField="sgroup"
                isLoading={loading}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </ModalWrapper>
  ) : null;
};

export default withStyles(styles)(GetUserDetailInfoModal);
