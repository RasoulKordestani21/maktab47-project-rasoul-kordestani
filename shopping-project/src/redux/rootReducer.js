import { combineReducers } from 'redux';
import filterCustomTableReducer from './Reducers/filterCustomTableReducer'
import modalFlagReducer from './Reducers/modalFlagReducer';
const rootReducer = combineReducers({
    filterCustomTableReducer,
    modalFlagReducer

})

export default rootReducer;