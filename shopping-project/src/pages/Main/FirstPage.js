import React, { Component } from "react";
import { MainHeader } from "../../layouts/terminal";
import FirstPageSection from "../../layouts/Section/MainSection/FirstPageSection";
import { SideBar } from "../../layouts/terminal";
export default class FirstPage extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <MainHeader />
        <FirstPageSection />
      </div>
    );
  }
}
