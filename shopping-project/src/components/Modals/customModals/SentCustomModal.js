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
import { connect } from 'react-redux';
import { modalFlagAction } from '../../../redux/Actions/modalFlagAction';
import { useEffect } from 'react';
import DummyTable from "../../Modals/DummyTable/DummyTable";

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

function SendCustom(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render

    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        setOpen(props.state.modalFlagReducer.customModalFlag)
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
                <h2 id="simple-modal-title">نمایش سفارش</h2>
                <CancelIcon onClick={() => { props.modalFlagAction(false) }} />
            </div>
            <div>
                <div>
                    <span>نام مشتری :</span><span>علی کاظمی</span>
                </div>
                <div>
                    <span>آدرس: </span><span>تهران- خ انقلاب-کوچه ی سوم- پلاک ۳</span>
                </div>
                <div>
                    <span>تلفن : </span><span>۰۹۱۳۸۸۲۱۹۹۸</span>
                </div>
                <div>
                    <span>زمان تحویل : </span><span>۱۴۰۰/۰۳/۱۲</span>
                </div>
                <div>
                    <span>زمان سفارش :</span><span>۱۴۰۰/۰۳/۱۲</span>
                </div>
            </div>
            <div style={{ backgroundColor: 'yellow', width: '100%', height: '40px' }}>
                <DummyTable />
            </div>
            <div style={{ display: 'flex',marginTop:'220px' }} >
                <span>نام مشتری :</span><span>علی کاظمی</span>
            </div>
        </div>

    );

    return (
        <div>

            <Modal
                open={open}
                onClose={() => { props.modalFlagAction(false) }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state.modalFlagReducer.SendCustomFlag)
    return {
        state
    }
}
const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        modalFlagAction: (flag) => { dispatch(modalFlagAction(flag)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendCustom)
