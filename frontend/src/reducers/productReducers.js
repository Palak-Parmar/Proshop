import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS} 
    from '../constants/productConstants'

// takes in 2 things i.e state and set that to an empty object adn an action

export const productListReducer =(state={products:[]},action)=>
    {
// evaluate the type thats in action so we use switch
      switch(action.type)
      {
          case PRODUCT_LIST_REQUEST:
              return {loading:true, products:[] }
          case PRODUCT_LIST_SUCCESS:
              return {loading:false,products:action.payload}
          case PRODUCT_LIST_FAIL:
              return {loading:false, error:action.payload}
          default:
              return state
      }
    }
     

    // product object with an array for reviews
    export const productDetailsReducer =(state={product:{ reviews:[]}},action)=>
    {
// evaluate the type thats in action so we use switch
      switch(action.type)
      {
          case PRODUCT_DETAILS_REQUEST:
              return {loading:true, ...state}
          case PRODUCT_DETAILS_SUCCESS:
              return {loading:false,product:action.payload}
          case PRODUCT_DETAILS_FAIL:
              return {loading:false, error:action.payload}
          default:
              return state
      }
    }
