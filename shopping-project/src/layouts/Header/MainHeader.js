import React, { Component, useState, useEffect } from "react";
import { LogoArea } from "../../components/terminal";
import { ManagerNavItem } from "../../components/ManagersNavItem/ManagerNavItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../assets/style/style.module.css";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import styles from "../../assets/style/style.module.css";

function MainHeader(props) {
  let history = useHistory();
  function firstPage() {
    history.push("/LoginManagerPage");
  }
  function PurchaseBasket() {
    history.push("/PurchaseBasket");
  }

  const [badges, setBadges] = useState(0);
  useEffect(() => {
    setBadges(props.numOfChoosenProducts);
  }, [props.numOfChoosenProducts]);

  return (
    <header>
      <Grid
        container
        color="white"
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <LogoArea />
        <div>
          <Button
            className={styles["main-header-button"]}
            type="button"
            onClick={firstPage}
          >
            مدیریت
          </Button>
          <Button
            className={styles["main-header-button"]}
            type="button"
            onClick={PurchaseBasket}
          >
            <Badge badgeContent={badges} color="secondary">
              <ShoppingCartIcon />
            </Badge>
            سبد خرید
          </Button>
        </div>
      </Grid>
    </header>
  );
}

const mapStateToProps = (state) => {
  console.log(state.choosenProductReducer.choosenProducts.length);
  return {
    //  YOU SHOULD GET .length OF PRODUCT TO TRACKING !!!!
    numOfChoosenProducts: state.choosenProductReducer.choosenProducts.length,
  };
};

export default connect(mapStateToProps)(MainHeader);
