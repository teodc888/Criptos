import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCriptosIniciales, getCriptosTotal } from "./redux/actions";
import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import InicioCripto from "./components/criptomoneda/inicioCripto/inicioCripto";
import Mercado from "./components/criptomoneda/mercado/mercado";
import CriptoOnly from "./components/criptoOnly/criptoOnly";
import Favoritos from "./components/favoritos/favoritos";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCriptosIniciales());
    dispatch(getCriptosTotal());
  
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<InicioCripto />} />
        <Route path="/mercado" element={<Mercado />} />
        <Route path="/cripto/:id" element={<CriptoOnly />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
}

export default App;
