import { combineReducers } from 'redux';
import filterCustomTableReducer from './Reducers/filterCustomTableReducer';
import modalFlagReducer from './Reducers/modalFlagReducer';
import stockPriceChangesReducer from './Reducers/StockPriceChangesReducer';
import getProductDetailReducer from './Reducers/getProductDetailReducer'
import choosenProductReducer from './Reducers/choosenProductReducer';
const rootReducer = combineReducers({
    filterCustomTableReducer,
    modalFlagReducer,
    stockPriceChangesReducer,
    getProductDetailReducer,
    choosenProductReducer,
})

export default rootReducer;