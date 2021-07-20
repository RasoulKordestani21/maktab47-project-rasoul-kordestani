import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { postUserData } from '../../../axios/Axios';
import { withRouter } from "react-router-dom"

class FinalizePurchaseSection extends Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        dateOfSend: '',
    }
    goToPayPage = () => {
        let history = this.props.history;
        console.log(history);
        window.location.replace('http://127.0.0.1:8080/bankPage.html');
    }
    finalizePuchaseClicked(formData) {
        postUserData(formData);
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            dateOfSend: '',
        })
    }
    render() {
        console.log(this.props.history);
        console.log(this.state);
        return (
            <div>
                <h1>نهایی کردن خرید</h1>
                <div>
                    <lable>نام</lable>
                    <input value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} type="text" placeholder="نام" />
                    <lable>نام خانوادگی</lable>
                    <input value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} type="text" placeholder="نام خانوادگی" />
                </div>
                <div>
                    <lable>آدرس</lable>
                    <input value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} type="text" placeholder="آدرس" />
                    <lable>تلفن همراه</lable>
                    <input value={this.state.phoneNumber} onChange={(event) => this.setState({ phoneNumber: event.target.value })} type="text" placeholder="تلفن همراه" />
                </div>
                <lable>تاریخ تحویل</lable>
                <input value={this.state.dateOfSend} onChange={(event) => this.setState({ dateOfSend: event.target.value })} type="text" placeholder="تاریخ تحویل" />
                <div>
                    <Button onClick={() => { this.finalizePuchaseClicked(this.state); this.goToPayPage() }}>نهایی کردن خرید</Button>
                </div>
            </div>

        )
    }
}
export default withRouter(FinalizePurchaseSection);