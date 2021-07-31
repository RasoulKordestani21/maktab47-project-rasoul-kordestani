import { GET_PRODUCT_DETAIL } from "../Types"


export const getProductDetailAction = (id,group) => {
    console.log(id,group)
    return {
        type: GET_PRODUCT_DETAIL,
        id,
       group
    }
}