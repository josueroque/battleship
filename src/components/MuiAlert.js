import React from "react";
import Alert from "@mui/material/Alert";
const MuiAlert = ({ severity, message }) => {
  return (
    <Alert severity={severity} color={severity}>
      {message}
    </Alert>
  );
};

export default MuiAlert;
