import React, { Component } from 'react'
import  {MainHeader}  from '../../layouts/terminal'
import FinalizePurchaseSection from '../../layouts/Section/MainSection/FinalizePurchaseSection'
export default class  extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <FinalizePurchaseSection />
            </div>
        )
    }
}
