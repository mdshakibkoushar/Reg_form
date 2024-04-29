import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";

function Alertbox({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        <AlertTitle>Error</AlertTitle>
        Field is blank or contains invalid data.
      </Alert>
    </Snackbar>
  );
}

export default Alertbox;
