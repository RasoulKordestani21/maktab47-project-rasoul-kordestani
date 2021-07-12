import React, { Component } from "react";
import ProductTable from "../../layouts/Section/ManagerSection/ProductTable";
import {ManagerHeader} from '../../layouts/Header/ManagerHeader'
import { Button } from "@material-ui/core";
export class ProductPage extends Component {
    render() {
        return (
            <div>
                <ManagerHeader />
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
