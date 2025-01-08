import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/pages/common/Menu";
import Footer from "./components/pages/common/Footer";
import Inicio from "./components/pages/Inicio";


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
