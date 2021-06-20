import React, { Component } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/terminal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../assets/styles/style.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <Grid container direction="row" justify="space-between">
          <LogoArea />
          <ManagerNavItem />
        </Grid>
      </header>
    );
  }
}

export default Header;
