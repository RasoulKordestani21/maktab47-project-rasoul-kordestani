import React, { Component } from 'react';
import  {MainHeader}  from '../../layouts/terminal';
import  CanceledPaySection  from '../../layouts/Section/MainSection/CanceledPaySection'
export default class CanceledPay extends Component {
    render() {
        return (
            <div >
                <MainHeader />
                <CanceledPaySection />
            </div>
        )
    }
}