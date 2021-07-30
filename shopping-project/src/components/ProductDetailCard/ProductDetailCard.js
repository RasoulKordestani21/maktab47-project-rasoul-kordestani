import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/Actions/choosenProductAction';
// import Button from '@material-ui/core'
import styles from '../../assets/style/style.module.css'
class ProductDetailCard extends Component {
    state = {
        numOfOrd: '',
        initialNum :1
    }
    componentDidUpdate() {
        console.log(this.state.numOfOrd)
    }
    render() {
        { console.log(this.props.productDetail && this.props.productDetail[0].image) }
        return (
            < Grid container alignItems="center" className={styles['main-section-product-detail-card']} >

                < Grid item xs={6} sm={4} md={3} className={styles['main-section-product-detail-card-image']}>
                    <img style={{ width: '90%' }} src={this.props.productDetail && this.props.productDetail[0].image} />
                </Grid >

                <Grid item className={styles['main-section-product-detail-card-text']} xs={6} sm={4} >

                    <Grid item  className={styles['main-section-product-detail-card-text-name']}>
                        {this.props.productDetail && this.props.productDetail[0].name}
                    </Grid>

                    <Grid item container  >
                        <Grid item  >
                            {this.props.productDetail && this.props.productDetail[0].groupToPersian}
                        </Grid>
                        <ArrowLeftIcon />
                        زیر گروه{Number(this.props.productDetail && this.props.productDetail[0].baseGroup) + 1}
                    </Grid>

                    <Grid item className={styles['main-section-product-detail-card-text-price']} >
                        قیمت :
                        {this.props.productDetail && this.props.productDetail[0].price} تومان
                    </Grid>

                    <Grid item container className={styles['main-section-product-detail-card-text-inputs']}>
                        <TextField id="standard-number" type="number"
                        className={styles['main-section-product-detail-card-text-inputs-number']}
                            value={this.state.initialNum} InputLabelProps={{ shrink: true }} onChange={(e) => { this.setState({ numOfOrd: Number(e.target.value) }); this.setState({ initialNum: Number(e.target.value) }) }} />
                        <Button onClick={() => { console.log(this.state.numOfOrd);this.props.addProduct(this.props.productDetail, this.state.initialNum) } }
                            className={styles['main-section-product-detail-card-text-button']}
                
                        >
                            افزودن کالا به سبد خرید
                            <AddCircleIcon />
                        </Button>
                    </Grid>
                </Grid>

                <Grid justify="center" container style={{  width: '80%', margin: '20px auto' }}>
                    {this.props.productDetail && this.props.productDetail[0].description}
                </Grid>

            </Grid >

        )
    }
}

const mapStateToProps = state => {
    console.log(state.choosenProductReducer)
    return {
        choosenProduct: state.choosenProduct
    }
}
const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        addProduct: (choosenProduct,numOfOrd) => { dispatch(addProduct(choosenProduct,numOfOrd)) },
        deleteProduct: (choosenProduct) => { dispatch(deleteProduct(choosenProduct)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailCard);
