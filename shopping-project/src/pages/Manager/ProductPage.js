import React, { Component } from "react";
import ProductTable from "../../layouts/Section/ManagerPage/ProductTable";
import Header from '../../layouts/Header/Header'
import { Button } from "@material-ui/core";
export class ProductPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div >
                    <div style={{ display: "flex", justifyContent:"space-between"}}>
                        <h1>مدیریت کالاها</h1>
                        <Button >افزودن کالا</Button>
                    </div>
                    {/* <Button variant="contained" color="primary">
          ذخیره
        </Button> */}
                    <ProductTable />

                </div>
            </div>
        );
    }
}
