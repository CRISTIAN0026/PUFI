import { GET_PRODUCTOS } from './actions';

let initialState = {
    productos:[],
}

const reDucer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_PRODUCTOS:
            return {
                ...state,
                productos: action.payload,
            }
    default:
        return state
    
}
}

export default reDucer
