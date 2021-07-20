import React, { Component } from 'react'
export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:''
        }
    }
    componentDidUpdate(){
    }
   
    render() {
       return (
           
            <div style={{ display: "flex", backgroundColor: 'yellow', padding: "10px" }}>
                <img
              src={this.props.product && this.props.product.image}
                    width="100px" height="100px"
                />
                <div style={{ backgroundColor: 'teal', width: '50%' }}>
                    <div>{this.props.product && this.props.product.name}</div>
                    <div>{this.props.product && this.props.product.price}تومان</div>
                </div>
            </div>
        )
    }
}
