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
  function firstPage() {
    history.push('/')
  }
  return (
    <div>
      <div>
        <Button color="purpule" type="button" onClick={productPage}> مدیریت کالاها</Button>
        <Button type="button" onClick={StockPricePage}> مدیریت موجودی ها </Button>
        <Button type="button" onClick={customPage}> مدیریت سفارش ها</Button>
      <Button type="button" onClick={firstPage}>بازگشت به صفحه اصلی</Button>
      </div>
    </div>
  );

}






