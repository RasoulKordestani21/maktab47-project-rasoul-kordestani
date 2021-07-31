import React, { Component } from 'react'
import { MainHeader } from '../../layouts/terminal';
import PurchaseBasketSection from '../../layouts/Section/MainSection/PurchaseBasketSection';
export default class PurchaseBasket extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <PurchaseBasketSection />
            </div>
        )
    }
}
