import {type_product_add} from '../actions/Types'

const initialProduct ={
    products:[]
}

export const productReducer = (state = initialProduct, action)=>{

    console.log("item :", action.payload);

    switch (action.type) {
        case type_product_add:
            return {
                ...state,
                products:state.products.concat(action.payload)
            } 
    
        default:
            return state 
    }
}