import React, { Component } from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';
import { getDairy, getHealthWashing } from '../../../axios/Axios';
import { withRouter } from "react-router-dom"

import { getProductDetailAction } from '../../../redux/Actions/getProductDetailAction';
import { sideBarFlagAction } from '../../../redux/Actions/SideBarFlagAction';

import { connect } from 'react-redux';

 class FirstPageSection extends Component {
    state = {
        dairyState: [],
        healthWashingState: [],

    }
    
    async componentDidMount() {


        let dairy = await getDairy(0, 20).then(res => res.data);
        await this.setState({ dairyState: dairy })

        let healthWashing = await getHealthWashing(0, 20).then(res => res.data);
        await this.setState({ healthWashingState: healthWashing })


    }
    goToDetail = () => {
        let history = this.props.history;
        console.log(history)
        history.push('/ProductDetail');
    }
    render() {
       
        return (

            // <div style={{ backgroundColor: 'green', width: '100%', height:'50px'}}>

            // </div>
            <div>
                <Grid container alignItems="center" spacing={12} style={{ background: "pink" }}>
                    <Grid 
                        item xs={12}
                    onClick={()=>console.log(this.props.sideBarFlagAction())}
                    >کالاهای گروه لبنیات</Grid>
                    {this.state.dairyState.map(product =>
                        <Grid product={product} onClick={(e) => { console.log(this.props); this.props.getProductDetailAction(product.id, product.group);this.goToDetail() }} item xs={6} sm={4} md={3} ><ProductCard product={product} /></Grid>
                    )}
                </Grid>
                <Grid container alignItems="center" spacing={12} style={{ background: "pink" }}>
                    <Grid item xs={12}>کالاهای گروه مواد شوینده و بهداشتی</Grid>
                    {this.state.healthWashingState.map(product =>
                        <Grid item xs={6} sm={4} md={3} onClick={(e) => { console.log(this.props ); this.props.getProductDetailAction(product.id,product.group) }}><ProductCard product={product} /></Grid>
                    )}
                    {/* <Grid item xs={6} sm={4} md={3}><ProductCard /></Grid>
                    <Grid itme xs={6} sm={4} md={3}><ProductCard /></Grid>
                    <Grid item xs={6} sm={4} md={3}><ProductCard /></Grid>
                    <Grid item xs={6} sm={4} md={3}><ProductCard /></Grid>
                    <Grid item xs={6} sm={4} md={3}><ProductCard /></Grid>
                    <Grid item xs={6} sm={4} md={3}><ProductCard /></Grid> */}
                </Grid>
            </div>



        )
    }
}

const mapStateToProps = state => {
    console.log(state.getProductDetailReducer)
    return {
        group: state.group,
        id:state.id
    }
  }

  
const mapDispatchToProps = dispatch => {
    // console.log(dispatch(getProductDetailAction))
    return {
        getProductDetailAction: (id, group) => { dispatch(getProductDetailAction(id, group)) },
        sideBarFlagAction: () => { dispatch(sideBarFlagAction()) }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(FirstPageSection));