import React, { Fragment, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

const PasswordField = (props) => {
  return (
    <Fragment>
      <FormControl
        fullWidth
        variant="outlined"
        className={props.className}
        size="small"
      >
        <InputLabel>{props.label}</InputLabel>
        <OutlinedInput
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={props.onClick}
                onMouseDown={props.onMouseDown}
                edge="end"
              >
                {props.value ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={props.labelWidth}
        />
      </FormControl>
    </Fragment>
  );
};

export default PasswordField;
