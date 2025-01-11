import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Usa 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/pages/common/Menu";
import Footer from "./components/pages/common/Footer";
import Inicio from "./components/pages/Inicio";
import Juegos from "./components/pages/Juegos";
import Administrador from "./components/pages/Administrador";
import FormularioJuego from "./components/pages/FormularioJuego";
import Login from "./components/pages/Login";
import DetalleProductos from "./components/pages/DetalleProductos";
import AcercadeNostros from "./components/pages/AcercadeNostros";
import ProtectorRutas from "./components/routes/ProtectorRutas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import JuegosPs4 from "./components/pages/JuegosPs4";
import JuegosPs5 from "./components/pages/JuegosPs5";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogeado, setusuarioLogeado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu setusuarioLogeado={setusuarioLogeado} usuarioLogeado={usuarioLogeado} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Juegos" element={<Juegos />} />
          <Route path="/JuegosPs4" element={<JuegosPs4 />} />
          <Route path="/JuegosPs5" element={<JuegosPs5 />} />
          <Route
            path="/Administrador/*"
            element={
              <ProtectorRutas>
                <RutasAdministrador />
              </ProtectorRutas>
            }
          />
          <Route path="/Login" element={<Login setusuarioLogeado={setusuarioLogeado} />} />
          <Route path="/DetalleProductos/:id" element={<DetalleProductos />} />
          <Route path="/AcercadeNostros" element={<AcercadeNostros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

