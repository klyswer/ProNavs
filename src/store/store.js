import { createStore } from 'redux'

// Metodos para definir state
const initiaState = {
    datos: [],
    seleccion: []
};


const reducerNaves = (state = initiaState, action) => {
    // console.log(action.objeto)
    // console.log(action.type)
    switch (action.type) {
        case "ADD_OBJS":
            return {
                ...state,
                datos: state.datos.concat(action.objeto),
                };
        case "ADD_SHIP_TOTABLE":
            return {
                ...state,
                seleccion: state.seleccion.concat(action.item),
                datos: state.datos.filter(item => item.name !== action.item.name)
            };
        case "DELETE_SHIP_TOTABLE":
            return {
                ...state,
                seleccion: state.seleccion.filter(item => item.name !== action.item.name),
                datos: state.datos.concat(action.item)
            };
        default:
            return { ...state };
    }

}



export default createStore(reducerNaves)