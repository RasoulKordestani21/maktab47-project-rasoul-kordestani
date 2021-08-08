import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import CustomPage from "../pages/Manager/CustomPage";
import ProductPage from "../pages/Manager/ProductPage";
import StockPricePage from "../pages/Manager/StockPricePage";
import { LoginManagerPage } from "../pages/Manager/LoginManagerPage";

import FirstPage from "../pages/Main/FirstPage";
import ProductDetail from "../pages/Main/ProductDetail";
import PurchaseBasket from "../pages/Main/PurchaseBasket";
import FinalizePurchase from "../pages/Main/FinalizePurchase";
import CanceledPay from "../pages/Main/CanceledPay";
import SuccessPay from "../pages/Main/SuccessPay";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route exact path="/ProductDetail">
            <ProductDetail />
          </Route>
          <Route exact path="/PurchaseBasket">
            <PurchaseBasket />
          </Route>
          <Route exact path="/FinalizePurchase">
            <FinalizePurchase />
          </Route>
          <Route exact path="/CanceledPay">
            <CanceledPay />
          </Route>
          <Route exact path="/SuccessPay">
            <SuccessPay />
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
    </BrowserRouter>
  );
}
