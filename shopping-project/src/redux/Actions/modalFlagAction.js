import {
  MODAL_FLAG,
  MODAL_CUSTOM_FLAG,
  FIND_INDEX_OF_CUSTOMERS,
  SHOULD_UPDATE_TABLE,
} from "../Types";

export const modalFlagAction = (modalFlag, addModalFlag, index) => {
  return {
    type: MODAL_FLAG,
    modalFlag,
    addModalFlag,
    index,
  };
};

export const modalCustomFlagAction = (flag) => {
  return {
    type: MODAL_CUSTOM_FLAG,
    flag,
  };
};

export const findIndexOfCustomerAction = (index) => {
  return {
    type: FIND_INDEX_OF_CUSTOMERS,
    index,
  };
};

export const shouldUpdateTable = () => {
  return {
    type: SHOULD_UPDATE_TABLE,
  };
};
