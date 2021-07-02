import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ProductTable from "../../layouts/Section/ManagerPage/ProductTable";

export class ProductPage extends Component {
    render() {
        return (
            <div>
                <h1>مدیریت کالاها</h1>
                <button >افزودن کالا</button>
                {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                <ProductTable />

            </div>
        );
    }
}
