import React, { Component } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/terminal";
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
      </div>
    );
  }
}

export default Header;
