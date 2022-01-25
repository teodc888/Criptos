import {
    GET_CRIPTOS,
    GET_CRIPTOS_TOTAL,
    SEARCH_CRIPTOS,
    GET_CRIPTO_ONLY,
    FAVORITOS,

} from "../actions/actionsTypes";

const inicialState = {
    criptos: [],
    criptosTotal: [],
    criptosShearch: [],
    cripto:{},
    favorito:[]

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
        case GET_CRIPTO_ONLY:
            return {
                ...state,
                cripto: action.payload,
            };
        case FAVORITOS:
            return {
                ...state,
                favorito: [...state.favorito, action.payload],
            };
        default:
            return state;
    }
}