import React, { Component } from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { withRouter } from "react-router";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { getAdminData } from '../../../axios/Axios'

import styles from '../../../assets/style/style.module.css';



class LoginManagersPage extends Component {
    state = {
        username: '',
        password: '',
        adminData: '',
        errorFlag: false
    }

    async componentDidMount() {
        let detail = await getAdminData().then(res => res.data);
        await this.setState({ adminData: detail[0] })
        await console.log(this.state);
    }

    login = () => {
        let history = this.props.history;
        if (this.state.username == this.state.adminData.username && this.state.password == this.state.adminData.password) {
            history.push('/ProductTable')
        }
        else {
            this.setState({ errorFlag: true })
        }
    }
    goToFirstPage = () => {
        let history = this.props.history;
        history.push('/')
    }

    render() {

      
        const paperStyle = { padding:20 , height: '70vh', width: 400, margin: '0px auto' }
        const logMrShopStyle = {  };
        const avatarStyle = {marginTop:20,marginBottom:40, backgroundColor: 'rgb(101, 72, 182)' }
        const textFieldStyle = { display: 'block', marginTop: '5px' }
        const blockOfInputs = { margin: '20px' }
        const buttonStyle = { color:'white',backgroundColor: 'rgb(101, 72, 182)', margin: '10px', width: '50%' }
        const errorMessage = { fontSize:14,color: 'red',visibility:(this.state.errorFlag?'visible':'hidden') }
        const backButton = {color:'white',backgroundColor:'rgb(255, 200, 3)'}
        return (
            <div className={styles['manager-section-login']}>
                <Grid >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><SupervisorAccountIcon /></Avatar>
                        </Grid>
                        <Grid align='center' style={logMrShopStyle} >
                            ورود به پنل مدیریت فروشگاه مستر شاپ
                        </Grid>
                        <ThemeProvider >
                            <div style={blockOfInputs}>
                                <FormLabel >نام کاربری</FormLabel>
                                <TextField onFocus={() => { this.setState({ errorFlag: false }) }} onChange={(val) => { this.setState({ username: val.target.value }) }} style={textFieldStyle} fullWidth />
                            </div>
                            <div style={blockOfInputs}>
                                <FormLabel component="legend">رمز عبور</FormLabel>
                                <TextField onFocus={() => { this.setState({ errorFlag: false }) }} onChange={(val) => { this.setState({ password: val.target.value }) }} style={textFieldStyle} type="password" fullWidth />
                            </div>
                        </ThemeProvider>
                        <Grid align='center' >
                            <div style={errorMessage} >نام کاربری یا رمز عبور اشتباه است</div>
                            <Button onClick={() => { this.login() }} style={buttonStyle}  >ورود</Button>
                        </Grid>
                        <Grid align='left' style={{ marginTop: "100px" }}>
                            <Button style={backButton} onClick={() => { this.goToFirstPage()}}   >بازگشت به سایت</Button>
                        </Grid>
                    </Paper>

                </Grid>
            </div>
        )
    }
}

export default withRouter(LoginManagersPage);




