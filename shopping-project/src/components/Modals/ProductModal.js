import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { connect } from 'react-redux';
import { modalFlagAction,shouldUpdateTable } from '../../redux/Actions/modalFlagAction';
import { useEffect, useState } from 'react'
import { postData } from '../../axios/Axios';
import { editProductWithModal } from '../../axios/Axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    direction: "rtl",
    height: "500px"
  }
}));

function ProductModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [modalData, setModalData] = useState({ imgOfProduct: '', nameOfProduct: '', groupOfProduct: '', descOfProduct: '' })


  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(props.modalFlag)
  }, [props])


  const body = (
    <div style={{
      top: '50%',
      left: '50%',
      transform: `translate(-${50}%, -${50}%)`
    }}
      className={classes.paper}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <h2 id="simple-modal-title">افزودن/ویرایش کالا </h2>
        <CancelIcon onClick={() => { props.modalFlagAction(false) }} />
      </div>
      <div>
        <FormLabel style={{ display: "block" }}>تصویر کالا</FormLabel>
        <Input type="file" variant="outlined" onInput={(e) => { setModalData({ ...modalData, imgOfProduct: e.target }); console.log(modalData) }} />
      </div>
      <div style={{ margin: "20px 0px" }}>
        <FormLabel>نام کالا</FormLabel>
        <TextField
          onChange={(e) => { setModalData({ ...modalData, nameOfProduct: e.target.value }); console.log(modalData) }}
          fullWidth />
      </div>

      <FormControl
        style={{ width: "100%", marginTop: "20px", direction: "rtl" }}
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          دسته بندی کالاها
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={age}
          // onChange={handleChange}
          onChange={(e) => { setModalData({ ...modalData, groupOfProduct: e.target.value }); console.log(modalData) }}
          label="دسته بندی کالاها"
        >
          <MenuItem value="">
            <em>نوع کالا را انتخاب کنید ...</em>
          </MenuItem>
          <MenuItem value={"dairy"}>لبنیات</MenuItem>
          <MenuItem value={"health-Washing"}>مواد شوینده و بهداشتی</MenuItem>
          <MenuItem value={"nuts"}>خشکبار</MenuItem>
        </Select>
      </FormControl>

      <div style={{ marginTop: "20px" }}>
        <FormLabel style={{ display: "block" }}>توضیحات</FormLabel>
        <TextareaAutosize
          onChange={(e) => { setModalData({ ...modalData, descOfProduct: e.target.value }); console.log(modalData) }}
          style={{ width: "100%", height: "80px" }} aria-label="empty textarea" placeholder="توضیحات کالا را وارد کنید" />
      </div>
      <div style={{ display: 'flex' }} >
        <Button style={{ backgroundColor: 'purple', margin: '20px auto' }} onClick={() => {
          props.addModalFlag ?
           postData(modalData) :
            editProductWithModal(props.index, modalData);
          props.shouldUpdateTable();
        }}>ذخیره</Button>
      </div>
    </div>

  );

  return (
    <div>

      <Modal
        open={open}
        onClose={() => { props.modalFlagAction(false,false) }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}


const mapStateToProps = state => {
  console.log('قلقلی', state.modalFlagReducer.productModalAddFlag)
  console.log(state.modalFlagReducer.indexOfImproveItem);
  return {
    addModalFlag: state.modalFlagReducer.productModalAddFlag,
    modalFlag: state.modalFlagReducer.productModalFlag,
    index:state.modalFlagReducer.indexOfImproveItem
  }
}
const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    modalFlagAction: (flag) => { dispatch(modalFlagAction(flag)) },
    shouldUpdateTable: () => { dispatch(shouldUpdateTable()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)
