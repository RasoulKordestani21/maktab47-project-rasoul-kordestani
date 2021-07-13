import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { addProduct,deleteProduct } from '../../redux/Actions/choosenProductAction';
// import Button from '@material-ui/core'
class ProductDetailCard extends Component {
    async componentDidMount() {
        
    }
    render() {
        console.log('*$$$$',this.props)
        return (
            <Grid container alignItems="center" style={{ background: "pink" }}>

                {/* <Grid item xs={12}>کالاهای گروه لبنیات</Grid> */}
                <Grid item xs={6} sm={4} md={3} style={{ padding: "10px", backgroundColor: 'maroon' }}>
                    <img style={{ width: '100%' }} src={this.props.productDetail.image} />
                </Grid>

                <Grid item style={{ backgroundColor: "yellow", margin: '10px', padding: '10px 30px' }} xs={6} sm={4} >
                    <Grid item style={{ margin: '10px' }}>
                        {this.props.productDetail.name}
                    </Grid>
                    <Grid item container >
                        <Grid item >
                            {this.props.productDetail.baseGroup}
                        </Grid>
                        <ArrowLeftIcon />
                        زیر گروه{this.props.productDetail.groupID}
                    </Grid>
                    <Grid  item style={{ margin: '40px 30px 0px' }}>
                        {this.props.productDetail.price} تومان
                    </Grid>
                    <Grid item container>
                        <TextField id="standard-number" type="number" style={{ width: '70px' }} InputLabelProps={{ shrink: true }} />
                        <Button  onClick={()=>this.props.addProduct(this.props.productDetail)} style={{ marginRight: "30px", backgroundColor: "green" }}>افزودن کالا به سبد خرید
                            <AddCircleIcon />
                        </Button>
                        <Button onClick={()=>this.props.deleteProduct(this.props.productDetail)}>حذف کالا</Button>
                    </Grid>
                </Grid>
                <Grid justify="center" container style={{ backgroundColor: 'aqua', width: '80%', margin: '20px auto' }}>
                    {this.props.productDetail.description}
                </Grid>
       
            </Grid>
        
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
        addProduct: (choosenProduct) => { dispatch(addProduct(choosenProduct)) },
        deleteProduct: (choosenProduct) => { dispatch(deleteProduct(choosenProduct)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailCard);
