import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getCriptoOnly } from "../../redux/actions/index";
import CardCriptoOnly from "./cardCriptoOnly/cardCriptoOnly";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function CriptoOnly() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCriptoOnly(id));
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, [dispatch]);
  const cripto = useSelector((state) => state.cripto);

  console.log(loading);

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ":" + min + ":" + sec;
    return time;
  }

  console.log(timeConverter(1642928100));
  return (
    <div>
      {loading === true ? (
        <>
          <h1 className="tituloCripto">{cripto.name}</h1>
          <CardCriptoOnly icon={cripto.icon} price={cripto.price} />
          <Box sx={{ flexGrow: 1 }}></Box>
        </>
      ) : (
        <div>
          <h1>Cargando...</h1>
          <img
            src="https://media3.giphy.com/media/mVHENVoUFjKT1GeXta/giphy.gif?cid=ecf05e47v718sq600z45wmak38f7oi749kfo6qmc59ux1poq&rid=giphy.gif&ct=s"
            alt="j"
            className="imagenCargando"

          />
        </div>
      )}
    </div>
  );
}
