import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { connect } from "react-redux";
import { modalFlagAction } from "../../../redux/Actions/modalFlagAction";
import { useEffect, useState } from "react";
import DummyTable from "../../Modals/DummyTable/DummyTable";
import { getCustomersItem, ReceivedProduct } from "../../../axios/Axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "500px",
  },
}));

function SendCustom(props) {
  const classes = useStyles();
  const [choosenCustomer, setChoosenCustomer] = useState("");
  const [open, setOpen] = React.useState(true);
  const [updateFlag, setUpdateFlag] = useState(false);
  useEffect(() => {
    setOpen(props.state.modalFlagReducer.customModalFlag);
  }, [props]);

  useEffect(() => {
    getCustomersItem(props.indexOfCustomer).then((res) =>
      setChoosenCustomer(res.data)
    );
  }, [props, updateFlag]);

  const body = (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(-${50}%, -${50}%)`,
      }}
      className={classes.paper}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 id="simple-modal-title">نمایش سفارش</h2>
        <CancelIcon
          onClick={() => {
            props.modalFlagAction(false);
          }}
        />
      </div>
      <div>
        <div>
          <span>نام مشتری :</span>
          <span>
            {choosenCustomer &&
              choosenCustomer.firstName + " " + choosenCustomer.lastName}
          </span>
        </div>
        <div>
          <span>آدرس: </span>
          <span>{choosenCustomer && choosenCustomer.address}</span>
        </div>
        <div>
          <span>تلفن : </span>
          <span>{choosenCustomer && choosenCustomer.phoneNumber}</span>
        </div>
        <div>
          <span>زمان تحویل : </span>
          <span>
            {choosenCustomer &&
              new Date(
                Number(choosenCustomer.dateOfOrder)
              ).toLocaleDateString()}
          </span>
        </div>
        <div>
          <span>زمان سفارش :</span>
          <span>
            {choosenCustomer &&
              new Date(Number(choosenCustomer.dateOfSend)).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div style={{ backgroundColor: "yellow", width: "100%", height: "40px" }}>
        <DummyTable />
      </div>
      {console.log(choosenCustomer.isReceived)}
      {/* {console.log('hasan kojai pa?',choosenCustomer &&choosenCustomer.isReceived)} */}
      {!(choosenCustomer && choosenCustomer.isReceived) ? (
        <div
          style={{
            display: "flex",
            marginTop: "220px",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              console.log(
                ReceivedProduct(choosenCustomer.id).then((res) =>
                  setUpdateFlag(!updateFlag)
                )
              );
            }}
          >
            تحویل داده شد
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", marginTop: "220px" }}>
          <span>تاریخ تحویل :</span>
          <span>
            {choosenCustomer &&
              new Date(Number(choosenCustomer.dateOfSend)).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          props.modalFlagAction(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isReceived: state.filterCustomTableReducer.isReceived,
    isFiltered: state.filterCustomTableReducer.isFiltered,
    indexOfCustomer: state.modalFlagReducer.indexOfCustomer,
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalFlagAction: (flag) => {
      dispatch(modalFlagAction(flag));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendCustom);
