import React, { Component } from "react";
import { Header, Section } from "../layouts/terminal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CustomPage } from '../pages/Manager/CustomPage';
import { ProductPage } from '../pages/Manager/ProductPage';
import { StockPricePage } from '../pages/Manager/StockPricePage';
import '../assets/style/style.css'
// import { typography } from "@material-ui/system";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export class App extends Component {
  render() {
    return (
     
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          {/* <Section /> */}
          <Switch>
            <Route exact path="/">
              <Header />
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
        </ThemeProvider>
    
    );
  }
}

export default App;
