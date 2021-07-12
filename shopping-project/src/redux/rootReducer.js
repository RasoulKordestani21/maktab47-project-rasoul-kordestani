import { combineReducers } from 'redux';
import getProductDetailReducer from './Reducers/getProductDetailReducer'
import choosenProductReducer from './Reducers/choosenProductReducer';
// import unaryClickedReducer from './Reducer/unaryClickedReducer'
// import binaryClickedReducer from './Reducer/binaryClickedReducer';
// import numClickedReducer from './Reducer/numClickedReducer';
// import equalClickedRducer from './Reducer/equalClickedReducer';
// import clearAllClickedReducer from './Reducer/clearAllClickedReducer';
// import clearElementClickedReducer from './Reducer/clearElementClickedReducer';
const rootReducer = combineReducers({
    getProductDetailReducer,
    choosenProductReducer,
    // unaryClickedReducer,
    // binaryClickedReducer,
    // numClickedReducer,
    // equalClickedRducer,
    // clearElementClickedReducer,
    // clearAllClickedReducer,
})

export default rootReducer;