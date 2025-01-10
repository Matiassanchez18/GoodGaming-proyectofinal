import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Administrador from "../pages/Administrador";
import FormularioJuego from "../pages/FormularioJuego";

const RutasAdministrador = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Administrador />} />
        <Route path="/FormularioJuego" element={<FormularioJuego crearProducto={true} />} />
        <Route path="/editar/:id" element={<FormularioJuego crearProducto={false} />} />
      </Routes>
    </div>
  );
};

export default RutasAdministrador;

