import React, { Component } from 'react'
import success from '../../../assets/images/success.jpg'

export default class SuccessPaySection extends Component {
    render() {
        return (
            <div>
               
                <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'yellow', alignItems: 'center',height:'400px' }} >
                <img src={success} width='100px' height='100px'/>
                <p>پرداخت شما موفق بود</p>
            </div>
            </div>
        )
    }
}
