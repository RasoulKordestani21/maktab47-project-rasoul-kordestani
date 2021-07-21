import { ADD_PRODUCT, DELETE_PRODUCT } from '../Types'

const initialState = {
    choosenProducts: []
}


const choosenProductReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_PRODUCT: {
            let isInList = false;
            state.choosenProducts.forEach(ele => {
                if (ele.name == action.choosenProduct.name) {
                    isInList = true;
                    // ele.numOfPurch++;
                }
            })
            if (!isInList) {
                // action.choosenProduct.numOfPurch = 1;
                state.choosenProducts.push(action.choosenProduct);
            }
            console.log(state.choosenProducts)
            return {
                ...state
            }
        }
        case DELETE_PRODUCT: {
            let id = action.choosenProduct.id;
            let name = action.choosenProduct.name;
            let index = state.choosenProducts.findIndex(ele => ele.id == id && ele.name == name);
            console.log(id,name,index);
            state.choosenProducts.splice(index, 1);
            console.log(state.choosenProducts);
            return {
                choosenProducts: state.choosenProducts,
            }
        }
        default: return {
            ...state
        }
    }
}

export default choosenProductReducer;