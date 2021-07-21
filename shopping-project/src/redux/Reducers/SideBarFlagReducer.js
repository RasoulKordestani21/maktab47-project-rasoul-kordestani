import { SIDE_BAR_FLAG }from '../Types'

const initialState = {
    toggle: false,
}


const sideBarFlagReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case SIDE_BAR_FLAG:
            {
               
                return {
                    toggle: !state.toggle,
                   
                }
            };default: return{
            ...state
        }
    }
}

export default sideBarFlagReducer;