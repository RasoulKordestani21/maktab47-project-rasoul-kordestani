import React, { Component } from 'react'
import { MainHeader } from '../../layouts/terminal'
import ProductDetailSection from '../../layouts/Section/MainSection/ProductDetailSection'
export default class ProductDetail extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ProductDetailSection />
            </div>
        )
    }
}
