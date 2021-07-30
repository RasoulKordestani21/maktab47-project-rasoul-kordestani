import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { managerNav } from './ManagersNavItemStyle';

export function ManagerNavItem(props) {
  let history = useHistory();
  function productPage() {
    history.push('/ProductTable')
  }
  function StockPricePage() {
    history.push('/StockPriceTable')
  }
  function customPage() {
    history.push('/CustomTable')
  }

  return (
    <div style={{ display: "flex", justifyContent: 'space-between' }}>
      <div>
        <Button style={managerNav} type="button" onClick={productPage}> مدیریت کالاها</Button>
        <Button  style={managerNav} type="button" onClick={StockPricePage}> مدیریت موجودی ها </Button>
        <Button  style={managerNav} type="button" onClick={customPage}> مدیریت سفارش ها</Button>
      </div>
     
      </div>
  );

}






