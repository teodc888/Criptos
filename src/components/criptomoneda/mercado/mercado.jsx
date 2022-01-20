import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import CardMercado from "../cardMercado/cardMercado";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const columns = [
  {
    field: "icon",
    headerName: "Imagen",
    width: 110,
    renderCell: (params) => <img src={params.value} />,
  },
  { field: "symbol", headerName: "ID", width: 100,
},
  
  {
    field: "id",
    headerName: "Nombre",
    width: 210,
    renderCell: (params) => <Link to={`/cripto/${params.value}`}>{params.value}</Link>,
  },
  {
    field: "price",
    headerName: "Precio",
    width: 310,

  },
  {
    field: "priceChange1d",
    headerName: "24 horas cambio",
    type: "number",
    width: 210,

  },
  {
    field: "volume",
    headerName: "24 horas Valumen",
    type: "number",
    width: 410,

  },
  {
    field: "marketCap",
    headerName: "Capacidad Mercado",
    type: "number",
    width: 410,

  },
];

export default function Mercado() {
  const criptos = useSelector((state) => state.criptosTotal);

  const precioMayor =
    criptos.length > 0
      ? criptos.reduce((a, b) => (a.priceChange1h > b.priceChange1h ? a : b))
      : null;

  const precioMenor =
    criptos.length > 0
      ? criptos.reduce((a, b) => (a.priceChange1h < b.priceChange1h ? a : b))
      : null;

  const mayorVolumen =
    criptos.length > 0
      ? criptos.reduce((a, b) => (a.volume > b.volume ? a : b))
      : null;

  const masPopular =
    criptos.length > 0
      ? criptos.reduce((a, b) => (a.marketCap > b.marketCap ? a : b))
      : null;
  const menosPopular =
    criptos.length > 0
      ? criptos.reduce((a, b) => (a.marketCap < b.marketCap ? a : b))
      : null;
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <h1>MERCADO</h1>
        <Link to="/">
          <Button sx={{ color: "white", backgroundColor: "#004d40" }}>
            Volver
          </Button>
        </Link>
        <Box
          sx={{ width: "100%", marginTop: "50px" }}
          alignItems="center"
          justify="center"
        >
          <Grid
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 2.4, sm: 8, md: 12 }}
            container
            sx={{ marginBottom: "50px" }}
          >
            {precioMayor ? (
              <Grid item xs={2.4} sm={2.4} md={2.4}>
                <CardMercado
                  name={precioMayor.name}
                  price={precioMayor.price}
                  icon={precioMayor.icon}
                  priceChange1d={precioMayor.priceChange1d}
                  precio={"Precio Mayor"}
                  id={precioMayor.id}
                />
              </Grid>
            ) : null}
            {precioMenor ? (
              <Grid item xs={2.4} sm={2.4} md={2.4}>
                <CardMercado
                  name={precioMenor.name}
                  price={precioMenor.price}
                  icon={precioMenor.icon}
                  priceChange1d={precioMenor.priceChange1d}
                  precio={"Precio Menor"}
                  id={precioMenor.id}
                />
              </Grid>
            ) : null}
            {mayorVolumen ? (
              <Grid item xs={2.4} sm={2.4} md={2.4}>
                <CardMercado
                  name={mayorVolumen.name}
                  price={mayorVolumen.price}
                  icon={mayorVolumen.icon}
                  priceChange1d={mayorVolumen.priceChange1d}
                  precio={"Mayor volumen"}
                  id={mayorVolumen.id}
                />
              </Grid>
            ) : null}
            {masPopular ? (
              <Grid item xs={2.4} sm={2.4} md={2.4}>
                <CardMercado
                  name={masPopular.name}
                  price={masPopular.price}
                  icon={masPopular.icon}
                  priceChange1d={masPopular.priceChange1d}
                  precio={"Mas Popular"}
                  id={masPopular.id}
                />
              </Grid>
            ) : null}
            {menosPopular ? (
              <Grid item xs={2.4} sm={2.4} md={2.4}>
                <CardMercado
                  name={menosPopular.name}
                  price={menosPopular.price}
                  icon={menosPopular.icon}
                  priceChange1d={menosPopular.priceChange1d}
                  precio={"Menos Popular"}
                  id={menosPopular.id}
                />
              </Grid>
            ) : null}
          </Grid>
        </Box>
      </Stack>
      <div
        style={{
          height: 650,
          width: "100%",
          backgroundColor: "white",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <DataGrid
          rows={criptos}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}
