import { useEffect, useState } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function UseAlert({ showAlert, setShowAlert }) {
  const [type, setType] = useState(showAlert.type);
  const [msg, setMsg] = useState(showAlert.msg);

  useEffect(() => {
    const clearTimer = setTimeout(() => {
      setType("");
      setMsg("");
      setShowAlert({
        msg: "",
        type: "",
        show: false,
      });
    }, 2000);
    return () => clearTimeout(clearTimer);
  }, []);

  return (
    <Stack
      sx={{ width: "30%", position: "absolute", top: 0, right: 0 }}
      spacing={2}
    >
      {type == "success" && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {msg}
        </Alert>
      )}
      {type === "info" && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          {msg}
        </Alert>
      )}
      {type == "warning" && <Alert severity="warning">{msg}</Alert>}
      {type == "error" && <Alert severity="error">{msg}</Alert>}
    </Stack>
  );
}
