import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Table from "./ManagerPage/CustomTable";
export class Section extends Component {
  render() {
    return (
      <div>
        <span>سفارش های تحویل داده شده</span>
        <input type="radio" name="state"/>
        <span>سفارش های در انتظار ارسال</span>
        <input type="radio" name="state"/>
        {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
        <Table />
      </div>
    );
  }
}

export default Section;
