import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/pages/common/Menu";
import Footer from "./components/pages/common/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
