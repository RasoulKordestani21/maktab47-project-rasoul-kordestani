import { STOCK_PRICE_CHANGES } from "../Types";

const initialState = {
  arrayOfChanges: [],
};

const stockPriceChangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_PRICE_CHANGES:
      return {
        arrayOfChanges: action.arrayOfChanges,
      };
    default:
      return {
        ...state,
      };
  }
};

export default stockPriceChangesReducer;
