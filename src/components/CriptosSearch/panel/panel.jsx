import React from "react";
import CriptoShearch from "../cripto/cripto";
import { useSelector } from "react-redux";
import CardMercado from "../../criptomoneda/cardMercado/cardMercado";

export default function Panel() {
    const criptosShearch = useSelector((state) => state.criptosShearch);
    return (
        <>
        {
            criptosShearch.length > 0 ? 
            criptosShearch.map((cripto) => (
                <CriptoShearch
                name={cripto.name}
                price={cripto.price}
                icon={cripto.icon}
                symbol={cripto.symbol}
                id={cripto.id}
                />
            ))
            :
            null
        }   
        </>
    )
}