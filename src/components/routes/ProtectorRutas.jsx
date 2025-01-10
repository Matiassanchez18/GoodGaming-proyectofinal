import React from "react";
import { Navigate } from "react-router"; 

const ProtectorRutas = ({children}) => {
  const userAdmin = JSON.parse(sessionStorage.getItem("userKey")) || "";

  if (!userAdmin) {
    return <Navigate to="/Login" />; 
  } else {
    return children; 
  }
};

export default ProtectorRutas;

