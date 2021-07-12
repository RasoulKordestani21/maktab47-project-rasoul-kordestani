import React, { Component } from 'react'
import Button from "@material-ui/core/Button";

export default class FinalizePurchaseSection extends Component {
    render() {
        return (
            <div>

                <h1>نهایی کردن خرید</h1>
                <div>
                    <lable>نام</lable>
                    <input type="text" placeholder="نام" />
                    <lable>نام خانوادگی</lable>
                    <input type="text" placeholder="نام خانوادگی" />
                </div>
                <div>
                    <lable>آدرس</lable>
                    <input type="text" placeholder="آدرس" />
                <lable>تلفن همراه</lable>
                <input type="text" placeholder="تلفن همراه" />
                </div>
                <lable>تاریخ تحویل</lable>
                <input type="text" placeholder="تاریخ تحویل" />
                <div>
                <Button>نهایی کردن خرید</Button>
                </div>
                </div>

        )
    }
}
