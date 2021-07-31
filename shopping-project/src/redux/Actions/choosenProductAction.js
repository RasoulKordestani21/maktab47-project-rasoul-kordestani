import { ADD_PRODUCT,DELETE_PRODUCT } from "../Types"


export const addProduct = (choosenProduct,numOfOrd) => {
    console.log('fkdsljflsjflsd',choosenProduct,numOfOrd)
    return {
        type: ADD_PRODUCT,
        choosenProduct,
        numOfOrd
    }
}

export const deleteProduct = (choosenProduct) => {
    console.log('deleteAction')
    return {
        type: DELETE_PRODUCT,
        choosenProduct
    }
}
