import React, { Component } from 'react'
import ProductDetailCard from '../../../components/ProductDetailCard/ProductDetailCard'
import { getProductDetail } from '../../../axios/Axios'
import { connect } from 'react-redux';

class ProductDetailSection extends Component {
    state = {
        group: '',
        id: '',
        detailState: ''
    }
     componentDidMount() { 
         getProductDetail(this.props.group, this.props.id).then(res => {
             this.setState({ detailState: res.data });
             localStorage.setItem('detail', JSON.stringify(this.state.detailState))
         });
        // if ((typeof detail) == 'string') {
        //     let cachedData =  JSON.parse(localStorage.getItem('detail'));
        //      getProductDetail(cachedData.group, cachedData.id).then(res => this.setState({ detailState: res.data }));
        // }
        //  else {
        //      localStorage.setItem('detail',JSON.stringify(this.state.detailState))
        // }
        
    }
    render() {
        console.log()
        return (
            <div>
                <ProductDetailCard productDetail={this.state.detailState} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        group: state.getProductDetailReducer.group,
        id: state.getProductDetailReducer.id
    }
}

export default connect(mapStateToProps)(ProductDetailSection)
