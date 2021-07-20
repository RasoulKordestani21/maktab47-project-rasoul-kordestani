import React, { Component } from 'react'
import cancel from '../../../assets/images/cancelImage.png'
export default class CanceledPaySection extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'yellow', alignItems: 'center',height:'400px' }} >
                <img src={cancel} width='100px' height='100px'/>
                <p>پرداخت شما ناموفق بود</p>
            </div>
        )
    }
}
