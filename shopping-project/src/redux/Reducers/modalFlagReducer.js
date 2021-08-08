import {
  MODAL_FLAG,
  MODAL_CUSTOM_FLAG,
  FIND_INDEX_OF_CUSTOMERS,
  SHOULD_UPDATE_TABLE,
} from "../Types";

const initialState = {
  indexOfImproveItem: "",
  productModalFlag: false,
  productModalAddFlag: false,
  customModalFlag: false,
  indexOfCustomer: "",
  shouldUpdateTable: false,
};

const modalFlagReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_FLAG:
      return {
        indexOfImproveItem: action.index,
        productModalFlag: action.modalFlag,
        productModalAddFlag: action.addModalFlag,
        customModalFlag: false,
        indexOfCustomer: "",
        shouldUpdateTable: state.shouldUpdateTable,
      };
    case MODAL_CUSTOM_FLAG:
      return {
        productModalFlag: state.productModalFlag,
        customModalFlag: action.flag,
        indexOfCustomer: state.indexOfCustomer,
        shouldUpdateTable: state.shouldUpdateTable,
      };
    case FIND_INDEX_OF_CUSTOMERS:
      return {
        productModalFlag: false,
        customModalFlag: state.customModalFlag,
        indexOfCustomer: action.index,
        shouldUpdateTable: state.shouldUpdateTable,
      };
    case SHOULD_UPDATE_TABLE:
      return {
        productModalFlag: false,
        customModalFlag: state.customModalFlag,
        indexOfCustomer: action.index,
        shouldUpdateTable: !state.shouldUpdateTable,
      };
    default:
      return {
        ...state,
      };
  }
};

export default modalFlagReducer;
