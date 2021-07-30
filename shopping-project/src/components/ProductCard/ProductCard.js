import React, { Component } from 'react'
import styles from '../../assets/style/style.module.css';
export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ''
        }
    }
    componentDidUpdate() {
    }

    render() {
        return (

            <div

                onClick={(e) => this.props.click(this.props.id, this.props.group)}
                className={styles['main-section-product-card']}

            >
                <img
                    src={this.props.product && this.props.product.image}
                    width="150px" height="150px"
                />
                <div
                    className={styles['main-section-product-card-text']}
                    // style={{ margin: '4px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
                >
                    <div >{this.props.product && this.props.product.name}</div>
                    <div >{this.props.product && this.props.product.price}تومان</div>
                </div>
            </div>
        )
    }
}
