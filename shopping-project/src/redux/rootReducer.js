import { combineReducers } from 'redux';
import filterCustomTableReducer from './Reducers/filterCustomTableReducer';
import modalFlagReducer from './Reducers/modalFlagReducer';
import stockPriceChangesReducer from './Reducers/StockPriceChangesReducer';
const rootReducer = combineReducers({
    filterCustomTableReducer,
    modalFlagReducer,
    stockPriceChangesReducer

})

export default rootReducer;