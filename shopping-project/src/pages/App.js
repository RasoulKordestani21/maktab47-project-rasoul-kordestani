import React, { Component } from "react";
import { Header, Section } from "../layouts/terminal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CustomPage } from '../pages/Manager/CustomPage';
import { ProductPage } from '../pages/Manager/ProductPage';
import { StockPricePage } from '../pages/Manager/StockPricePage';
import '../assets/style/style.css'






export class App extends Component {
  render() {
    return (
     

        <BrowserRouter >


          <Header />
          <Section />
          <Switch>
            <Route exact path="/salam">
              <h1>homePage</h1>
            </Route>
            <Route exact path="/CustomTable">
              <CustomPage />
            </Route>
            <Route exact path="/ProductTable">
              <ProductPage />
            </Route>
            <Route exact path="/StockPriceTable">
              <StockPricePage />
            </Route>
          </Switch>
        </BrowserRouter>
    
    );
  }
}

export default App;
