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
import Login from "./components/pages/Login";
import { useForm } from "react-hook-form";
import DetalleProductos from "./components/pages/DetalleProductos";
import AcercadeNostros from "./components/pages/AcercadeNostros";

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}/>
          <Route path="/Juegos" element={<Juegos></Juegos>}/>
          <Route path="/Administrador" element={<Administrador></Administrador>}/>
          <Route path="/Administrador/FormularioJuego"crearProducto={true}  element={<FormularioJuego></FormularioJuego>}/>
          <Route path="/Administrador/FormularioJuego/editar/:id" element={<FormularioJuego crearProducto={false} />} />
          <Route path="/Login" element={<Login></Login>}/>
          <Route path="/DetalleProductos/:id" element={<DetalleProductos></DetalleProductos>}/>
          <Route path="/AcercadeNostros" element={<AcercadeNostros></AcercadeNostros>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
