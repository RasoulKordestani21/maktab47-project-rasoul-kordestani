import React, { Component } from 'react'
import cancel from '../../../assets/images/cancelImage.png';
import styles from '../../../assets/style/style.module.css';    
export default class CanceledPaySection extends Component {
    render() {
        return (
            <div className={styles['main-section-cancel-pay']} >
                <img src={cancel} width='100px' height='100px'/>
                <p>پرداخت شما ناموفق بود</p>
            </div>
        )
    }
}
