import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/pages/common/Menu";
import Footer from "./components/pages/common/Footer";
import Inicio from "./components/pages/Inicio";
import Juegos from "./components/pages/Juegos";
import Administrador from "./components/pages/Administrador";
import FormularioJuego from "./components/pages/FormularioJuego";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}/>
          <Route path="/Juegos" element={<Juegos></Juegos>}/>
          <Route path="/Administrador" element={<Administrador></Administrador>}/>
          <Route path="/Administrador/FormularioJuego" element={<FormularioJuego></FormularioJuego>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
