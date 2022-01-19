import {
    GET_CRIPTOS,
    GET_CRIPTOS_TOTAL,

} from "../actions/actionsTypes";

const inicialState = {
    criptos: [],
    criptosTotal: [],

};

export default function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case GET_CRIPTOS:
            return {
                ...state,
                criptos: action.payload,
            };
        case GET_CRIPTOS_TOTAL:
            return {
                ...state,
                criptosTotal: action.payload,
            };
        default:
            return state;
    }
}