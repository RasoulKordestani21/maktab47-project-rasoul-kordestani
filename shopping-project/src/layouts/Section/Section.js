import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Table from "./ManagerPage/StockPriceTable";
export class Section extends Component {
  render() {
    return (
      <div>
        <h1>مدیریت موجودی ها و قیمت ها</h1>
        <Button variant="contained" color="primary">
          ذخیره
        </Button>
        <Table />
      </div>
    );
  }
}

export default Section;
