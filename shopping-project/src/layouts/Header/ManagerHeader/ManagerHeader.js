import React, { Component } from "react";
import { ManagerNavItem } from "../../../components/ManagersNavItem/ManagerNavItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../../assets/styles/style.css"
import { useHistory } from 'react-router-dom';


export function Header() {
  let history = useHistory();
  function firstPage() {
    history.push('/')
  }

  return (
    <header>
      <Grid  style={{padding:'0px 20px'}} container color="white" alignItems="center" direction="row" justify="space-between">
        <h1>پنل مدیریت فروشگاه</h1>
        <ManagerNavItem />
        <div>
          <Button type="button" onClick={firstPage}>بازگشت به صفحه اصلی</Button>
        </div>
      </Grid>
    </header>
  );

}

export default Header;