import React, { Component } from "react";
import { MainHeader } from "../../layouts/terminal";
import SuccessPaySection from "../../layouts/Section/MainSection/SuccessPaySection";
export default class SuccessPay extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <SuccessPaySection />
      </div>
    );
  }
}
