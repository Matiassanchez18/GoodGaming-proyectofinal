import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from'./components/pages/common/Menu'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
   
    </BrowserRouter> 
    </>
  )
}

export default App
