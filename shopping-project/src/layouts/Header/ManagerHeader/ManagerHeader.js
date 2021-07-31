import React, { Component } from "react";
import { ManagerNavItem } from "../../../components/ManagersNavItem/ManagerNavItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import "../../../assets/styles/style.css"
import { useHistory } from 'react-router-dom';
// import { buttonStyle } from '../HeaderStyle/HeaderStyle';
import styles from '../../../assets/style/style.module.css'


export function Header() {
  let history = useHistory();
  function firstPage() {
    history.push('/')
  }

  return (
    <header>
      <Grid  style={{padding:'0px 20px'}} container color="white" alignItems="center" direction="row" justify="space-between">
        <h2>پنل مدیریت فروشگاه</h2>
        <ManagerNavItem className={styles['main-header-button']}/>
        <div>
          <Button className={styles['main-header-button']} type="button" onClick={firstPage}>بازگشت به صفحه اصلی</Button>
        </div>
      </Grid>
    </header>
  );

}

export default Header;