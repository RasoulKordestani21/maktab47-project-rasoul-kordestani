import React, { Component } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/ManagersNavItem/ManagerNavItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import "../../assets/styles/style.css"
import { useHistory } from "react-router-dom";
// import { buttonStyle } from './HeaderStyle/HeaderStyle';

export function ManagerHeader() {
  let history = useHistory();
  function firstPage() {
    history.push("/");
  }

  return (
    <header>
      <Grid
        container
        color="white"
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <LogoArea />
        <ManagerNavItem />
        <div>
          <Button type="button" onClick={firstPage}>
            بازگشت به صفحه اصلی
          </Button>
        </div>
      </Grid>
    </header>
  );
}
