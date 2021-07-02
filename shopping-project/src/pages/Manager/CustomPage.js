import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CustomTable from "../../layouts/Section/ManagerPage/CustomTable";
import Header from '../../layouts/Header/Header'



export class CustomPage extends Component {

    render() {
        return (
            <div >
                <Header />
                <div>
                    <h1>مدیریت سفارش ها</h1>
                    <span>سفارش های تحویل داده شده</span>
                    <input type="radio" name="state" />
                    <span>سفارش های در انتظار ارسال</span>
                    <input type="radio" name="state" />
                    {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                    <CustomTable />

                </div>
            </div>
        );
    }
}
