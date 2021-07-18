import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



import  CustomPage  from '../pages/Manager/CustomPage';
import  ProductPage  from '../pages/Manager/ProductPage';
import { StockPricePage } from "../pages/Manager/StockPricePage";
import { LoginManagerPage } from '../pages/Manager/LoginManagerPage';
export default function Router() {
    return (
        < BrowserRouter>
            <div>
               

                <hr />

                {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
                <Switch>
                    <Route exact path="/CustomTable">
                        <CustomPage />
                    </Route>
                    <Route path="/ProductTable">
                        <ProductPage />
                    </Route>
                    <Route path="/StockPriceTable">
                        <StockPricePage />
                    </Route>
                </Switch>
            </div>
        </ BrowserRouter>
    )
}
