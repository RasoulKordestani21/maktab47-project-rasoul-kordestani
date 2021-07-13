import React, { Component } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/ManagersNavItem/ManagerNavItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/style.css"
import { useHistory } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export function MainHeader() {
  let history = useHistory();
  function firstPage() {
    history.push('/')
  }
  function PurchaseBasket() {
    history.push('/PurchaseBasket')
  }

  return (
    <header >
      <Grid  container color="white" alignItems="center" direction="row" justify="space-between">
        <LogoArea />
        
        <div>
          <Button type="button" onClick={firstPage}>مدیریت</Button>
          <Button type="button" onClick={PurchaseBasket}> <ShoppingCartIcon />سبد خرید</Button>
        </div>
      </Grid>
    </header>
  );

}
