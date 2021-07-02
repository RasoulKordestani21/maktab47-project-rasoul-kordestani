import React, { Component } from "react";
import { Button } from "@material-ui/core";
import StockPriceTable from "../../layouts/Section/ManagerPage/StockPriceTable";
import { Header } from "../../layouts/Header/Header";
export class StockPricePage extends Component {
    render() {
        return (
            <div>
                <Header />
            <div>
            <div style={{ display: "flex", justifyContent:"space-between"}}>
                        <h1>مدیریت موجودی ها وقیمت ها</h1>
                        <Button >ذخیره</Button>
                    </div>
                {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                <StockPriceTable />

                </div>
                </div>
        );
    }
}
