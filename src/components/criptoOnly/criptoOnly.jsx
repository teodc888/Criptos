import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getCriptoOnly } from "../../redux/actions/index";
import CardCriptoOnly from "./cardCriptoOnly/cardCriptoOnly";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function CriptoOnly() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCriptoOnly(id));
  }, [dispatch]);
  const cripto = useSelector((state) => state.cripto);

  console.log(cripto);
  return (
    <div>
      <h1 className="tituloCripto">{cripto.name}</h1>
      <CardCriptoOnly icon={cripto.icon} price={cripto.price} />
      <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h2>Precio en BTC {cripto.priceBtc}</h2>
          </Grid>
          <Grid item xs={8}>
           <h2>Rankin {cripto.rank}</h2>
          </Grid>
        </Grid> */}
      </Box>
    </div>
  );
}
