import React, { Component } from 'react'
import { MainHeader } from '../../layouts/terminal'
import FirstPageSection from '../../layouts/Section/MainSection/FirstPageSection'
export default class FirstPage extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <FirstPageSection />
            </div>
        )
    }
}
