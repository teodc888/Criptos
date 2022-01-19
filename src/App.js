import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCriptosIniciales } from "./redux/actions";
import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/navBar/navBar";
import InicioCripto from "./components/criptomoneda/inicioCripto/inicioCripto";
import Mercado from "./components/criptomoneda/mercado/mercado";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCriptosIniciales());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<InicioCripto />} />
        <Route path="/mercado" element={<Mercado />} />
      </Routes>
    </div>
  );
}

export default App;
