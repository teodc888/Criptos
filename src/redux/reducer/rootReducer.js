import {
    GET_CRIPTOS,
    GET_CRIPTOS_TOTAL,
    SEARCH_CRIPTOS

} from "../actions/actionsTypes";

const inicialState = {
    criptos: [],
    criptosTotal: [],
    criptosShearch: [],

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
        case SEARCH_CRIPTOS:
            const criptoShearch = state.criptosTotal.filter(cripto => { return cripto.name.toLowerCase().includes(action.payload.toLowerCase()) });
            return {
                ...state,
                criptosShearch: criptoShearch,
            };

        default:
            return state;
    }
}