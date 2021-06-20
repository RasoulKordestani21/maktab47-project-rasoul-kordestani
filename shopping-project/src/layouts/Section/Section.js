import React, { Component } from "react";
import { Button } from "@material-ui/core";

export class Section extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>مدیریت کالاها</h1>
          <Button>افزودن کالا</Button>
        </div>
      </div>
    );
  }
}

export default Section;
