import { combineReducers } from 'redux';
import getProductDetailReducer from './Reducers/getProductDetailReducer'
import choosenProductReducer from './Reducers/choosenProductReducer';
import sideBarFlagReducer from './Reducers/SideBarFlagReducer'
const rootReducer = combineReducers({
    getProductDetailReducer,
    choosenProductReducer,
    sideBarFlagReducer,
})

export default rootReducer;