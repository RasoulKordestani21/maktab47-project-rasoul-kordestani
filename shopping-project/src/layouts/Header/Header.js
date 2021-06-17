import React, { Component } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/terminal";
import Button from "@material-ui/core/Button";
export class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          direction: "rtl",
          justifyContent: "space-between",
          // backgroundColor: "rgb(52 7 220)",
          alignItems: "center",
          // color: "white",
        }}
      >
        <LogoArea />
        <ManagerNavItem />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Header;
