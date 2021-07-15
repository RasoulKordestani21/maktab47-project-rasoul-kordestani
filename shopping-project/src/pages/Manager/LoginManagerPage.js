import React, { Component } from 'react'
import LoginManagerSection from '../../layouts/Section/ManagerPage/LoginManagersSection'
import ManagerHeader from '../../layouts/Header/ManagerHeader/ManagerHeader'
export class LoginManagerPage extends Component {
    render() {
        return (
            <div>
                <ManagerHeader />
                <LoginManagerSection />
            </div>
        )
    }
}
