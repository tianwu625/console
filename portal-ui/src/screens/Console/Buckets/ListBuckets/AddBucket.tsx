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
import Grid from "@mui/material/Grid";
import { Button, LinearProgress } from "@mui/material";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { containerForHeader } from "../../Common/FormComponents/common/styleLibrary";
import api from "../../../../common/api";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import RadioGroupSelector from "../../Common/FormComponents/RadioGroupSelector/RadioGroupSelector";
import { getBytes, k8sScalarUnitsExcluding } from "../../../../common/utils";
import { AppState } from "../../../../store";
import history from "../../../../history";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { MakeBucketRequest } from "../types";
import FormSwitchWrapper from "../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import { ErrorResponseHandler } from "../../../../common/types";
import PageHeader from "../../Common/PageHeader/PageHeader";
import BackLink from "../../../../common/BackLink";
import { BucketsIcon, InfoIcon } from "../../../../icons";

import PageLayout from "../../Common/Layout/PageLayout";
import InputUnitMenu from "../../Common/FormComponents/InputUnitMenu/InputUnitMenu";
import FormLayout from "../../Common/FormLayout";
import HelpBox from "../../../../common/HelpBox";
import SectionTitle from "../../Common/SectionTitle";
import { setErrorSnackMessage } from "../../../../systemSlice";
import {
  addBucketEnableObjectLocking,
  addBucketName,
  addBucketQuota,
  addBucketQuotaSize,
  addBucketQuotaType,
  addBucketQuotaUnit,
  addBucketRetention,
  addBucketRetentionMode,
  addBucketRetentionUnit,
  addBucketRetentionValidity,
  addBucketVersioning,
} from "../bucketsSlice";

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      marginTop: 24,
      textAlign: "right",
      "& .MuiButton-root": {
        marginLeft: 8,
      },
    },
    error: {
      color: "#b53b4b",
      border: "1px solid #b53b4b",
      padding: 8,
      borderRadius: 3,
    },
    alertVersioning: {
      border: "#E2E2E2 1px solid",
      backgroundColor: "#FBFAFA",
      borderRadius: 3,
      display: "flex",
      alignItems: "center",
      padding: "10px",
      color: "#767676",
      "& > .min-icon ": {
        width: 20,
        height: 20,
        marginRight: 10,
      },
    },
    title: {
      marginBottom: 8,
    },
    headTitle: {
      fontWeight: "bold",
      fontSize: 16,
      paddingLeft: 8,
    },
    h6title: {
      fontWeight: "bold",
      color: "#000000",
      fontSize: 20,
    },
    ...containerForHeader(theme.spacing(4)),
  });

interface IAddBucketProps {
  classes: any;
}

const AddBucket = ({ classes }: IAddBucketProps) => {
  const dispatch = useDispatch();

  const bucketName = useSelector(
    (state: AppState) => state.buckets.addBucketName
  );
  const versioningEnabled = useSelector(
    (state: AppState) => state.buckets.addBucketVersioningEnabled
  );
  const lockingEnabled = useSelector(
    (state: AppState) => state.buckets.addBucketLockingEnabled
  );
  const quotaEnabled = useSelector(
    (state: AppState) => state.buckets.addBucketQuotaEnabled
  );
  const quotaType = useSelector(
    (state: AppState) => state.buckets.addBucketQuotaType
  );
  const quotaSize = useSelector(
    (state: AppState) => state.buckets.addBucketQuotaSize
  );
  const quotaUnit = useSelector(
    (state: AppState) => state.buckets.addBucketQuotaUnit
  );
  const retentionEnabled = useSelector(
    (state: AppState) => state.buckets.addBucketRetentionEnabled
  );
  const retentionMode = useSelector(
    (state: AppState) => state.buckets.addBucketRetentionMode
  );
  const retentionUnit = useSelector(
    (state: AppState) => state.buckets.addBucketRetentionUnit
  );
  const retentionValidity = useSelector(
    (state: AppState) => state.buckets.addBucketRetentionValidity
  );
  const distributedSetup = useSelector(
    (state: AppState) => state.system.distributedSetup
  );
  const siteReplicationInfo = useSelector(
    (state: AppState) => state.system.siteReplicationInfo
  );

  const [addLoading, setAddLoading] = useState<boolean>(false);
  const [sendEnabled, setSendEnabled] = useState<boolean>(false);
  const [lockingFieldDisabled, setLockingFieldDisabled] =
    useState<boolean>(false);

  const addRecord = (event: React.FormEvent) => {
    event.preventDefault();
    if (addLoading) {
      return;
    }
    setAddLoading(true);

    let request: MakeBucketRequest = {
      name: bucketName,
      versioning:
        distributedSetup && !siteReplicationInfo.enabled
          ? versioningEnabled
          : false,
      locking: distributedSetup ? lockingEnabled : false,
    };

    if (distributedSetup) {
      if (quotaEnabled) {
        const amount = getBytes(quotaSize, quotaUnit, true);
        request.quota = {
          enabled: true,
          quota_type: quotaType,
          amount: parseInt(amount),
        };
      }

      if (retentionEnabled) {
        request.retention = {
          mode: retentionMode,
          unit: retentionUnit,
          validity: retentionValidity,
        };
      }
    }

    api
      .invoke("POST", "/api/v1/buckets", request)
      .then((res) => {
        setAddLoading(false);
        const newBucketName = `${bucketName}`;
        resetForm();
        history.push(`/buckets/${newBucketName}/browse`);
      })
      .catch((err: ErrorResponseHandler) => {
        setAddLoading(false);
        dispatch(setErrorSnackMessage(err));
      });
  };

  const [value] = useDebounce(bucketName, 1000);

  useEffect(() => {
    dispatch(addBucketName(value));
  }, [value, dispatch]);

  const resetForm = () => {
    dispatch(addBucketName(""));
    dispatch(addBucketVersioning(false));
    dispatch(addBucketEnableObjectLocking(false));
    dispatch(addBucketQuota(false));
    dispatch(addBucketQuotaType("hard"));
    dispatch(addBucketQuotaSize("1"));
    dispatch(addBucketQuotaUnit("Ti"));
    dispatch(addBucketRetention(false));
    dispatch(addBucketRetentionMode("compliance"));
    dispatch(addBucketRetentionUnit("days"));
    dispatch(addBucketRetentionValidity(180));
  };

  useEffect(() => {
    let valid = false;

    if (bucketName.trim() !== "") {
      valid = true;
    }

    if (quotaEnabled && valid) {
      if (quotaSize.trim() === "" || parseInt(quotaSize) === 0) {
        valid = false;
      }
    }

    if (!versioningEnabled || !retentionEnabled) {
      dispatch(addBucketRetention(false));
      dispatch(addBucketRetentionMode("compliance"));
      dispatch(addBucketRetentionUnit("days"));
      dispatch(addBucketRetentionValidity(180));
    }

    if (retentionEnabled) {
      // if retention is enabled, then objec locking should be enabled as well
      dispatch(addBucketEnableObjectLocking(true));
      setLockingFieldDisabled(true);
    } else {
      setLockingFieldDisabled(false);
    }

    if (
      retentionEnabled &&
      (Number.isNaN(retentionValidity) || retentionValidity < 1)
    ) {
      valid = false;
    }

    setSendEnabled(valid);
  }, [
    bucketName,
    retentionEnabled,
    lockingEnabled,
    quotaType,
    quotaSize,
    quotaUnit,
    quotaEnabled,
    dispatch,
    retentionValidity,
    versioningEnabled,
  ]);

  return (
    <Fragment>
      <PageHeader label={<BackLink to={"/buckets"} label={"Buckets"} />} />
      <PageLayout>
        <FormLayout
          title={"Create Bucket"}
          icon={<BucketsIcon />}
          helpbox={
            <HelpBox
              iconComponent={<BucketsIcon />}
              title={"Buckets"}
              help={
                <Fragment>
                  OpenFS uses buckets to organize objects. A bucket is similar to
                  a folder or directory in a filesystem, where each bucket can
                  hold an arbitrary number of objects.
                </Fragment>
              }
            />
          }
        >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              addRecord(e);
            }}
          >
            <Grid container marginTop={1} spacing={2}>
              <Grid item xs={12}>
                <InputBoxWrapper
                  id="bucket-name"
                  name="bucket-name"
                  autoFocus={true}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(addBucketName(event.target.value));
                  }}
                  label="Bucket Name"
                  value={bucketName}
                />
              </Grid>

              {quotaEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="number"
                      id="quota_size"
                      name="quota_size"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.validity.valid) {
                          dispatch(addBucketQuotaSize(e.target.value));
                        }
                      }}
                      label="Capacity"
                      value={quotaSize}
                      required
                      min="1"
                      pattern={"[0-9]*"}
                      overlayObject={
                        <InputUnitMenu
                          id={"quota_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(addBucketQuotaUnit(newValue));
                          }}
                          unitSelected={quotaUnit}
                          unitsList={k8sScalarUnitsExcluding(["Ki"])}
                          disabled={false}
                        />
                      }
                    />
                  </Grid>
                </React.Fragment>
              )}
              {versioningEnabled && distributedSetup && (
                <Grid item xs={12}>
                  <FormSwitchWrapper
                    value="bucket_retention"
                    id="bucket_retention"
                    name="bucket_retention"
                    checked={retentionEnabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(addBucketRetention(event.target.checked));
                    }}
                    label={"Retention"}
                  />
                </Grid>
              )}
              {retentionEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <RadioGroupSelector
                      currentSelection={retentionMode}
                      id="retention_mode"
                      name="retention_mode"
                      label="Mode"
                      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                        dispatch(
                          addBucketRetentionMode(e.target.value as string)
                        );
                      }}
                      selectorOptions={[
                        { value: "compliance", label: "Compliance" },
                        { value: "governance", label: "Governance" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="number"
                      id="retention_validity"
                      name="retention_validity"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(
                          addBucketRetentionValidity(e.target.valueAsNumber)
                        );
                      }}
                      label="Validity"
                      value={String(retentionValidity)}
                      required
                      overlayObject={
                        <InputUnitMenu
                          id={"retention_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(addBucketRetentionUnit(newValue));
                          }}
                          unitSelected={retentionUnit}
                          unitsList={[
                            { value: "days", label: "Days" },
                            { value: "years", label: "Years" },
                          ]}
                          disabled={false}
                        />
                      }
                    />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="button"
                variant={"outlined"}
                className={classes.clearButton}
                onClick={resetForm}
              >
                Clear
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={addLoading || !sendEnabled}
              >
                Create Bucket
              </Button>
            </Grid>
            {addLoading && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </form>
        </FormLayout>
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(AddBucket);
