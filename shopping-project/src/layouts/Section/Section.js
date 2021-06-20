import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Table from "./ManagerPage/ProductTable";
export class Section extends Component {
  render() {
    return (
      <div>
        <h1>مدیریت کالاها</h1>
        <Button variant="contained" color="primary">
          افزودن کالا
        </Button>
        <Table />
      </div>
    );
  }
}

export default Section;
