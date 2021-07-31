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
import { modalFlagAction, shouldUpdateTable } from '../../redux/Actions/modalFlagAction';
import { useEffect, useState } from 'react'
import { postProductsData } from '../../axios/Axios';
import { editProductWithModal } from '../../axios/Axios';
import { getProducts } from '../../axios/Axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "80vh"
  }
}));

function ProductModal(props) {

  //##################### DEFINE USE-STATES ########################//
  const classes = useStyles();
  const initializeObject = { image: '', name: '', price: '', number: '', group: '', baseGroup: '', groupToPersian: '', description: '' }
  const [modalData, setModalData] = useState(initializeObject)
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [editedData, setEditedData] = useState([]);

  //##################### DEFINE USEFUL-FUNCTIONS ########################//
  const findInexOfOptions = (event) => {
    let child = event.nativeEvent.target;
    let parent = event.nativeEvent.target.parentElement.childNodes
    for (let i = 0; i < parent.length; i++) {
      console.log()
      if (parent[i].innerText == child.innerText) {
        return i
      }
    }
    return -1
  }

  const filterEditedItems = (changes) => {
    let obj = {};
    console.log(changes)
    for (let i = 0; i < Object.keys(changes).length; i++) {
      if (Object.values(changes)[i] != '') {
        obj[`${Object.keys(changes)[i]}`] = Object.values(changes)[i];
      }
    }
    if (obj.image) {
      obj.image = obj.image.files[0];
      console.log(obj.image);
    }
    console.log('this is our obj :',obj);
    return obj
  }


  //##################### DEFINE USE-EFFECTS ########################//
  useEffect(() => {
    setOpen(props.modalFlag)
  }, [props])






  const body = (
    <div style={{ top: '50%', left: '50%', transform: `translate(-${50}%, -${50}%)` }} className={classes.paper}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 id="simple-modal-title">افزودن/ویرایش کالا </h2>
        <CancelIcon onClick={() => { props.modalFlagAction(false) }} />
      </div>

      <div>
        <FormLabel style={{ display: "block" }}>تصویر کالا</FormLabel>
        <TextField type="file" variant="standard" onInput={(e) => { setModalData({ ...modalData, image: e.target }); console.log(modalData) }} />
      </div>

      <div style={{ margin: "20px 0px" }}>
        <FormLabel>نام کالا</FormLabel>
        <TextField variant="outlined" onChange={(e) => { setModalData({ ...modalData, name: e.target.value }); console.log(modalData) }} fullWidth />
      </div>

      <div style={{ marginTop: "20px" }}>
        <FormControl style={{ width: "100%" }} variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            دسته بندی کالاها
          </InputLabel>
          <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
            onChange={(e) => { let baseGroup = findInexOfOptions(e); setModalData({ ...modalData, group: e.target.value, baseGroup, groupToPersian: e.nativeEvent.target.innerText }) }}
            label="دسته بندی کالاها">
            <MenuItem value="">نوع کالا را انتخاب کنید ...</MenuItem>
            <MenuItem value={"dairy"}  >لبنیات</MenuItem>
            <MenuItem value={"health"}  >مواد شوینده و بهداشتی</MenuItem>
            <MenuItem value={"grain"}  >مواد غذایی اولیه</MenuItem>
            <MenuItem value={"digital"}  >دیجیتال</MenuItem>
            <MenuItem value={"sport"}  >ورزشی</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ marginTop: '20px' }}>
        <FormControl style={{ width: '30%', margin: '0px 20px' }}>
          <TextField id="outlined-number" label="تعداد" type="number" variant="outlined" onChange={(e) => { setModalData({ ...modalData, number: e.target.value }); console.log(modalData) }} />
        </FormControl>
        <FormControl style={{ width: '40%', margin: '0px 20px' }}>
          <TextField id="outlined-number" label="مبلغ کالا" type="number" variant="outlined" onChange={(e) => { setModalData({ ...modalData, price: e.target.value }); console.log(modalData) }} />
        </FormControl>
      </div>

      <div style={{ marginTop: "20px" }}>
        <FormLabel style={{ display: "block" }}>توضیحات</FormLabel>
        <TextField variant="outlined" onChange={(e) => { setModalData({ ...modalData, description: e.target.value }); console.log(modalData) }} style={{ width: "100%" }} aria-label="empty textarea" placeholder="توضیحات کالا را وارد کنید" />
      </div>

      <div style={{ display: 'flex' }} >
        <Button style={{ backgroundColor: 'purple', margin: '20px auto' }} onClick={() => { props.addModalFlag ? postProductsData(modalData) : editProductWithModal(props.index, filterEditedItems(modalData)); props.shouldUpdateTable();setModalData(initializeObject) }}>
          ذخیره
        </Button>
      </div>

    </div>

  );

  return (
    <div>
      {console.log(modalData)}
      {/* {console.log(props.index)} */}
      <Modal open={open} onClose={() => { props.modalFlagAction(false, false) }} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
        {body}
      </Modal>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    addModalFlag: state.modalFlagReducer.productModalAddFlag,
    modalFlag: state.modalFlagReducer.productModalFlag,
    index: state.modalFlagReducer.indexOfImproveItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    modalFlagAction: (flag) => { dispatch(modalFlagAction(flag)) },
    shouldUpdateTable: () => { dispatch(shouldUpdateTable()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)
