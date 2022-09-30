import axios from 'axios';

export let GET_PRODUCTOS = "GET_PRODUCTOS";



export const getProductos = () => {
    return async (dispatch) => {
        try {
            let response = (await axios('https://fakestoreapi.com/products?limit=3')).data
            return dispatch({
                type:GET_PRODUCTOS,
                payload: response 
            })
        } catch (error) {
            return error
        }
    }
}