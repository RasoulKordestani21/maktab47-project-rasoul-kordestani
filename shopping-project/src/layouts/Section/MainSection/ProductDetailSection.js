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
    async componentDidMount() { 
        console.log(this.props.id,this.props.group)
        let detail = await getProductDetail(this.props.group, this.props.id).then(res => res.data);
        console.log(detail)
        if ((typeof detail) == 'string') {
            let cachedData =await  JSON.parse(localStorage.getItem('detail'));
            detail = await getProductDetail(cachedData.group, cachedData.id).then(res => res.data);
        }
         else {
            await localStorage.setItem('detail',JSON.stringify(detail[0]))
        }
        this.setState({ detailState: detail[0] })
    }
    render() {
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
