import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function LinkPage() {
  return (
    <>
      <Link to="/data">
        <Button variant="contained" color="success">
          View Data
        </Button>
      </Link>
      <Link to="/">
        <Button variant="contained" color="success" sx={{ ml: 2 }}>
          Add List
        </Button>
      </Link>
    </>
  );
}

export default LinkPage;
