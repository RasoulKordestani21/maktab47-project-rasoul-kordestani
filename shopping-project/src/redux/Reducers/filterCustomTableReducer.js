import { FILTER_CUSTOM_TABLE }from '../Types'

const initialState = {
    isFiltered: false,
    isReceived:false
}


const filterCustomTableReducer = (state = initialState, action) => {
   console.log(action)
    switch (action.type) {
        case FILTER_CUSTOM_TABLE: return {
            isFiltered: true,
            isReceived:action.flags.isReceived
        };default: return{
            ...state
        }
    }
}

export default filterCustomTableReducer;