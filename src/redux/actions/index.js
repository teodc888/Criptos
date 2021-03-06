import axios from "axios";

import {
    GET_CRIPTOS,
    GET_CRIPTOS_TOTAL,
    SEARCH_CRIPTOS,
    GET_CRIPTO_ONLY,
    FAVORITOS,
} from "./actionsTypes";

export function getCriptosIniciales() {
    return async function (dispatch) {
        try {
            let res = await axios(
                `https://api.coinstats.app/public/v1/coins?skip=0&limit=6&currency=USD`
            );

            return dispatch({
                type: GET_CRIPTOS,
                payload: res.data.coins,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getCriptosTotal() {
    return async function (dispatch) {
        try {
            let res = await axios(
                `https://api.coinstats.app/public/v1/coins?&currency=USD`
            );

            return dispatch({
                type: GET_CRIPTOS_TOTAL,
                payload: res.data.coins,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function searchCriptos(payload){

    return{
        type: SEARCH_CRIPTOS,
        payload
    }
}

export function getCriptoOnly(cripto) {
    return async function (dispatch) {
      try {
        let res = await axios(
          `https://api.coinstats.app/public/v1/coins/${cripto}?currency=USD`
        );
  
        return dispatch({
          type: GET_CRIPTO_ONLY,
          payload: res.data.coin,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

export function favoritos(cripto) {
    return{
        type: FAVORITOS,
        payload: cripto
    }
}