import { FILTER_CUSTOM_TABLE } from "../Types"


export const filterCustomTableAction = (flags) => {
    console.log(flags);
    return {
        type: FILTER_CUSTOM_TABLE,
       flags
    }
}