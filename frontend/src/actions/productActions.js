import {
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
      PRODUCT_LIST_FAIL,
      PRODUCT_LIST_REQUEST,
      PRODUCT_LIST_SUCCESS} 
from '../constants/productConstants'

import axios from 'axios'
// this will do what useEffect did 

// doing with list costants
export const listProducts=()=> async(dispatch)=>{
//    redux thunk will be used to add func within a func
try{
    dispatch({type:PRODUCT_LIST_REQUEST})
    const {data}=await axios.get('/api/products')

    dispatch({
        type:PRODUCT_LIST_SUCCESS,
        // data should be passed down in the state
        payload : data
    })
}
catch(error)
{
    dispatch({
        type:PRODUCT_LIST_FAIL,
        // data should be passed down in the state
        payload : error.response && error.response.data.message ?error.response.data.message : error.message,
    })
}
}

// doing with details constant
export const listProductsDetails=(id)=> async(dispatch)=>{
    //    redux thunk will be used to add func within a func
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/products/${id} `)
    
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            // data should be passed down in the state
            payload : data,
        })
    }
    catch(error)
    {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            // data should be passed down in the state
            payload : error.response && error.response.data.message ?error.response.data.message : error.message,
        })
    }
    }
    
