import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class EstatesList extends Component {
  render() {
    return (
      <>
        <Button variant="contained" color="primary">
          Color primario
        </Button>
        <Button variant="contained" color="secondary">
          Color secundario
        </Button>
      </>
    );
  }
}
