import { GET_PRODUCT_DETAIL }from '../Types'

const initialState = {
    group: '',
    id:''
}


const getProductDetailReducer = (state = initialState, action) => {
    console.log(action.group,action.id)
    switch (action.type) {
        case GET_PRODUCT_DETAIL: return {
            group: action.group,
            id : action.id
            // history:state.history + state.operator
        };default: return{
            ...state
        }
    }
}

export default getProductDetailReducer;