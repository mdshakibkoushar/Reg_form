import React from "react";

import Box from "@mui/material/Box";

function NotFound() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Error 404!</h1>
        </div>
      </Box>
    </>
  );
}

export default NotFound;
