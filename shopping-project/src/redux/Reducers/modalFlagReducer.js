import { MODAL_FLAG ,MODAL_CUSTOM_FLAG} from '../Types'

const initialState = {
    productModalFlag: false,
    customModalFlag: false
}


const modalFlagReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case MODAL_FLAG: return {
            productModalFlag: action.flag,
            state
        };
        case MODAL_CUSTOM_FLAG: return {
            customModalFlag: action.flag,
            state
        }
            ; default: return {
                ...state
            }
    }
}

export default modalFlagReducer;