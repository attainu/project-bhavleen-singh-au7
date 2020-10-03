import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import cx from "classnames";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  inputStyle: {},
  absolute: {
    border: "2px solid #efb6b2",
    backgroundColor: "#efb6b2",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#efb6b2",
      border: "none",
    },
  },
}));

function FormDialog({ isAuth }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [previewFile, setPreviewFile] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let file = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (file && types.includes(file.type)) {
      setPreviewFile(URL.createObjectURL(file));
      setFile(file);
      setError("");
      setOpen(true);
      console.log(file);
    } else {
      setError("Please select an image file (png/jpeg)");
      setFile(null);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <Tooltip
          className={classes.root}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="Upload a photo"
          aria-label="add"
        >
          <Fab className={cx(classes.absolute)}>
            {/* <label htmlFor="icon-button-file"> */}
            <AddIcon />
            {/* </label> */}
          </Fab>
        </Tooltip>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              placeholder="what's new with you ?"
              // style={{
              //     display: block
              // }}
              fullwidth={true}
            />
          </DialogContentText>

          {previewFile && (
            <img
              src={previewFile}
              alt="uploaded"
              width={550}
              height="50%"
            ></img>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
