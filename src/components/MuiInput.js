import React, { Fragment } from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const MuiInput = (props) => {
  const classes = useStyles();

  const {
    name,
    label,
    type,
    value,
    error = null,
    onChange,
    ...other
  } = props;

  return (
    <Fragment>
      <TextField
        variant="outlined"
        fullWidth={true}
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        {...other}
        size="small"
        // If error is not null then we'll do rest of the operations
        {...(error && {
          error: true,
          helperText: error,
        })}
      />
    </Fragment>
  );
};

export default MuiInput;
