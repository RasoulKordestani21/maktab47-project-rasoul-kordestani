import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



import  CustomPage  from '../pages/Manager/CustomPage';
import { ProductPage } from '../pages/Manager/ProductPage';
import { StockPricePage } from "../pages/Manager/StockPricePage";
import { LoginManagerPage } from '../pages/Manager/LoginManagerPage';
export default function Router() {
    return (
        < BrowserRouter>
            <div>
                <Switch>
                <Route exact path="/">
                        <CustomPage />
                    </Route>
                    <Route exact path="/CustomTable">
                        <CustomPage />
                    </Route>
                    <Route path="/ProductTable">
                        <ProductPage />
                    </Route>
                    <Route path="/StockPriceTable">
                        <StockPricePage />
                    </Route>
                    <Route exact path="/LoginManagerPage">
                       <LoginManagerPage />
                    </Route>
                </Switch>
            </div>
        </ BrowserRouter>
    )
}
