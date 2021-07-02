import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
export function ManagerNavItem() {
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
    <div style={{  display: "flex",backgroundColor: 'rgb(255,200,3)'}}>
      <div>
        <Button type="button" onClick={productPage}> مدیریت کالاها</Button>
        <Button type="button" onClick={StockPricePage}> مدیریت موجودی ها </Button>
        <Button type="button" onClick={customPage}> مدیریت سفارش ها</Button>
      </div>
     
    </div>
  );

}






