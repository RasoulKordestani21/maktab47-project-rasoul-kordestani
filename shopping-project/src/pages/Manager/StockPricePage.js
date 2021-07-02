import React, { Component } from "react";
import { Button } from "@material-ui/core";
import StockPriceTable from "../../layouts/Section/ManagerPage/StockPriceTable";

export class StockPricePage extends Component {
    render() {
        return (
            <div>
                <h1>مدیریت موجودی ها و قیمت ها</h1>
                <button >ذخیره</button>
                {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                <StockPriceTable />

            </div>
        );
    }
}
