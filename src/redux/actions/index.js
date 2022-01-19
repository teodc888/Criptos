import axios from "axios";

import {
    GET_CRIPTOS,
    GET_CRIPTOS_TOTAL
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