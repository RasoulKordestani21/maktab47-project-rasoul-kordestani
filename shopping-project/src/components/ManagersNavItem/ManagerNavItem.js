import React, { Component } from "react";

export class ManagerNavItem extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ul>
          <li>
            <a href="#">کالاها</a>
          </li>
          <li>
            <a href="#">موجودی و قیمت ها</a>
          </li>
          <li>
            <a href="#">سفارش ها</a>
          </li>
        </ul>
        <div>
          <a href="#">بازگشت به سایت</a>
        </div>
      </div>
    );
  }
}

export default ManagerNavItem;
