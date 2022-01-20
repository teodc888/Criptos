import React from "react";
import { useSelector } from "react-redux";
import Cripto from "../cripto/cripto";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../../searchBar/searchBar";
import Panel from "../../CriptosSearch/panel/panel";

export default function InicioCripto() {
  const criptos = useSelector((state) => state.criptos);

  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <div>
          <h1>Bienvenidos</h1>
          <h2>
            Estas en una de las mejores paginas de criptomonedas del mercado
          </h2>
          <SearchBar />
          <Panel />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={5.33}>
              <Link to="/mercado">
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#004d40",
                    height: "50px",
                  }}
                >
                  Ir al Mercado
                </Button>
              </Link>
            </Grid>
            <Grid item xs={5.33}>
              <Link to="/favoritos">
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#004d40",
                    height: "50px",
                  }}
                >
                  Ir a Favoritos
                </Button>
              </Link>
            </Grid>
            <Grid item xs={5.33}>
              <Link to="/noticias">
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#004d40",
                    height: "50px",
                  }}
                >
                  Ir a Noticias
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Box
        sx={{ width: "100%", marginTop: "50px" }}
        alignItems="center"
        justify="center"
      >
        <Grid
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          container
          sx={{ marginBottom: "50px" }}
        >
          {criptos &&
            criptos.map((cripto) => (
              <Grid item xs={4} sm={4} md={4} key={cripto.id}>
                <Cripto
                  icon={cripto.icon}
                  name={cripto.name}
                  price={cripto.price}
                  symbol={cripto.symbol}
                  id={cripto.id}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
