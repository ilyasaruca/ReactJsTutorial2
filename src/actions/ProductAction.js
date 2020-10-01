import {type_product_add} from './Types'

export const action_product_add = (item) => {
    return {
        type: type_product_add,
        payload:item
    }
}