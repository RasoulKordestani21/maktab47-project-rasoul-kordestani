import { ADD_PRODUCT,DELETE_PRODUCT } from "../Types"


export const addProduct = (choosenProduct) => {
    console.log(choosenProduct)
    return {
        type: ADD_PRODUCT,
        choosenProduct
    }
}

export const deleteProduct = (choosenProduct) => {
    console.log('deleteAction')
    return {
        type: DELETE_PRODUCT,
        choosenProduct
    }
}
