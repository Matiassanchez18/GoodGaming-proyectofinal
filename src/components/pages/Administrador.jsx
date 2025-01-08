import React, { useEffect, useState } from 'react';
import { FileEarmarkPlus, PencilSquare, Trash3 } from "react-bootstrap-icons";
import { Link } from 'react-router';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./css/Style.css"
import { listarProductosAPI } from '../helpers/queries';


const Administrador = () => {

  const [listaJuegos, setlistaJuegos] = useState([])

  useEffect(() => {
    consultarAPI();
  }, []); 


  const consultarAPI = async()=>{
    const respuesta = await listarProductosAPI();
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      setlistaJuegos(datos)
    }else{
    alert("Ocurrio un error por favor intente mas tarde!")
    }
  }



  return (
    <section className="table-responsive container mt-5">
    <div className="d-flex justify-content-between align-items-center border-bottom mb-4">
      <h1 className="">Producto disponibles</h1>
      <Link  to={"/Administrador/FormularioJuego"}>
        <FileEarmarkPlus className="fs-4" />
      </Link>
    </div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
      {listaJuegos.map((Juego) => (
            <tr key={Juego.id}>
              <td>{Juego.id}</td>
              <td>{Juego.Juego}</td>
              <td>{Juego.precio}</td>
              <td className="text-center">
                <img
                  src={Juego.imagen}
                  alt="Imagen de Jugo"
                  className="ImgAministrador mx-auto d-block"
                />
              </td>
              <td>{Juego.opcion}</td>
              <td>
                <Link
                  to={`/administrador/FormularioJuego/editar/${Juego.id}`}
                  className="btn btn-warning me-4 ms-4"
                >
                  <PencilSquare />
                </Link>

                <Button
                  variant="danger"
                >
                  <Trash3></Trash3>
                </Button>
              </td>
            </tr>
          ))}
        
      </tbody>
    </Table>
  </section>
);
};

export default Administrador;
