import { ADD_PRODUCT, DELETE_PRODUCT } from "../Types";

const initialState = {
  choosenProducts: [],
  number: 0,
};

const choosenProductReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_PRODUCT: {
      let isInList = false;

      state.choosenProducts.forEach((ele) => {
        if (ele.name == action.choosenProduct[0].name) {
          if (ele.numOfOrd != action.numOfOrd) {
            console.log("hasan amani", ele.numOfOrd, action.numOfOrd);
            ele.numOfOrd = action.numOfOrd;
          }
          isInList = true;
        }
      });
      if (action.numOfOrd <= 0) {
        isInList = true;
      }
      if (!isInList) {
        action.choosenProduct[0].numOfOrd = action.numOfOrd;
        state.choosenProducts.push(action.choosenProduct[0]);
      }
      console.log("*******", state.choosenProducts);
      return {
        ...state,
      };
    }
    case DELETE_PRODUCT: {
      let id = action.choosenProduct.id;
      let name = action.choosenProduct.name;
      let index = state.choosenProducts.findIndex(
        (ele) => ele.id == id && ele.name == name
      );
      console.log(id, name, index);
      state.choosenProducts.splice(index, 1);
      console.log(state.choosenProducts);
      return {
        choosenProducts: state.choosenProducts,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default choosenProductReducer;
