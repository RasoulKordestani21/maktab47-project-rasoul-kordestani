import { MODAL_FLAG,MODAL_CUSTOM_FLAG } from "../Types"


export const modalFlagAction = (flag) => {
    console.log(flag);
    return {
        type: MODAL_FLAG,
       flag
    }
}

export const modalCustomFlagAction = (flag) => {
    console.log('#####',flag);
    return {
        type: MODAL_CUSTOM_FLAG,
       flag
    }
}