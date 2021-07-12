import { ADD_PRODUCT, DELETE_PRODUCT } from '../Types'

const initialState = {
    choosenProducts: []
}


const choosenProductReducer = (state = initialState, action) => {
    console.log(action.choosenProduct);
    state.choosenProducts.push(action.choosenProduct);
    console.log(state.choosenProducts)
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state.choosenProducts
            }
        }
        case DELETE_PRODUCT: {
            let id = action.choosenProduct.id;
            let name = action.choosenProduct.name;
            let index = this.state.choosenProducts.findIndex(ele => ele.id == id && ele.name == name);
            this.state.choosenProducts.splice(index, 1);
            return {
                choosenProducts: this.state.choosenProducts,
            }
        }
        default: return {
            ...state
        }
    }
}

export default choosenProductReducer;