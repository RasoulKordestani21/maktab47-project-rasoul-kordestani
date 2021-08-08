import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { postUserData } from "../../../axios/Axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FormControl, TextField, FormLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "jalali-react-datepicker";
import styles from "../../../assets/style/style.module.css";
// import FormLabel from "@material-ui/core/FormLabel";

class FinalizePurchaseSection extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    dateOfSend: "",
  };
  goToPayPage = () => {
    let products, user;
    products = this.props.choosenProduct.choosenProducts;
    user = this.state;
    user.dateOfOrder = new Date().getTime();
    console.log(products, user);

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("user", JSON.stringify(user));

    let history = this.props.history;
    console.log(history);
    window.location.replace("http://127.0.0.1:8080/bankPage.html");
  };
  finalizePuchaseClicked(customerDetail) {
    // postUserData(formData);
    // this.setState({
    //     firstName: '',
    //     lastName: '',
    //     address: '',
    //     phoneNumber: '',
    //     dateOfSend: '',
    //     customerDetail:''
    // })
  }
  render() {
    console.log(this.props.history);
    console.log(this.state);
    return (
      <div className={styles["main-section-finalize-purchase"]}>
        <div className={styles["main-section-purchase-basket-header"]}>
          نهایی کردن خرید
        </div>
        <Grid
          container
          justifyContent="center"
          className={styles["main-section-finalize-purchase-form"]}
        >
          <Grid
            className={
              styles["main-section-finalize-purchase-form-line-element"]
            }
            container
            item
            xs={12}
            md={12}
            justifyContent="center"
          >
            <Grid
              className={
                styles["main-section-finalize-purchase-form-line-element-items"]
              }
              xs={7}
              md={4}
            >
              <Grid>
                <FormLabel>نام : </FormLabel>
              </Grid>
              <Grid style={{ margin: "10px" }}>
                <TextField
                  style={{ width: "300px", color: "withe !important" }}
                  variant="outlined"
                  value={this.state.firstName}
                  onChange={(event) =>
                    this.setState({ firstName: event.target.value })
                  }
                  type="text"
                  placeholder="نام"
                />
              </Grid>
            </Grid>
            <Grid style={{ margin: "0px auto" }} xs={7} md={4}>
              <Grid>
                <FormLabel>نام خانوادگی : </FormLabel>
              </Grid>
              <Grid style={{ margin: "10px" }}>
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  value={this.state.lastName}
                  onChange={(event) =>
                    this.setState({ lastName: event.target.value })
                  }
                  type="text"
                  placeholder="نام خانوادگی"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            className={
              styles["main-section-finalize-purchase-form-line-element"]
            }
            container
            item
            xs={12}
            md={12}
            justifyContent="center"
          >
            <Grid
              className={
                styles["main-section-finalize-purchase-form-line-element-items"]
              }
              xs={7}
              md={4}
            >
              <Grid>
                <FormLabel>آدرس : </FormLabel>
              </Grid>
              <Grid style={{ margin: "10px" }}>
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  value={this.state.address}
                  onChange={(event) =>
                    this.setState({ address: event.target.value })
                  }
                  type="text"
                  placeholder="آدرس"
                />
              </Grid>
            </Grid>
            <Grid
              className={
                styles["main-section-finalize-purchase-form-line-element-items"]
              }
              xs={7}
              md={4}
            >
              <Grid>
                <FormLabel>شماره تلفن : </FormLabel>
              </Grid>
              <Grid style={{ margin: "10px" }}>
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  value={this.state.phoneNumber}
                  onChange={(event) =>
                    this.setState({ phoneNumber: event.target.value })
                  }
                  type="text"
                  placeholder="شماره تلفن"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            className={
              styles["main-section-finalize-purchase-form-line-element"]
            }
            container
            item
            xs={12}
            md={12}
            justifyContent="center"
          >
            <Grid
              className={
                styles["main-section-finalize-purchase-form-line-element-items"]
              }
              xs={7}
              md={4}
            >
              <Grid>
                <FormLabel>تاریخ تحویل : </FormLabel>
              </Grid>
              <Grid style={{ margin: "10px" }}>
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  value={this.state.dateOfSend}
                  onChange={(event) => {
                    this.setState({
                      dateOfSend: new Date(event.target.value).getTime(),
                    });
                    console.log(event.target.value);
                  }}
                  type="date"
                />
                {/* <DatePicker style={{backgroundColor:'red'}}/> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={
              styles["main-section-finalize-purchase-form-line-element"]
            }
            container
            item
            xs={12}
            md={12}
            justifyContent="center"
          >
            <Grid
              className={
                styles["main-section-finalize-purchase-form-line-element-items"]
              }
              xs={7}
              md={4}
            >
              <Grid
                className={
                  styles["main-section-finalize-purchase-form-button-parent"]
                }
              >
                <Button
                  className={
                    styles[
                      "main-section-finalize-purchase-form-button-parent-child"
                    ]
                  }
                  onClick={() => {
                    this.finalizePuchaseClicked(this.state);
                    this.goToPayPage();
                  }}
                >
                  نهایی کردن خرید
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.choosenProductReducer);
  return {
    choosenProduct: state.choosenProductReducer,
  };
};
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteProduct: (choosenProduct) => { dispatch(deleteProduct(choosenProduct)) }
//     }
// }
export default connect(mapStateToProps)(withRouter(FinalizePurchaseSection));
