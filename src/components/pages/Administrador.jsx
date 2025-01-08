import React from 'react';
import { FileEarmarkPlus, PencilSquare, Trash3 } from "react-bootstrap-icons";
import { Link } from 'react-router';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./css/Style.css"


const Administrador = () => {
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
          <tr >
            <td>12</td>
            <td>GOD</td>
            <td>1500</td>
            <td className="text-center">
              <img
                src="https://gorilagames.com/img/Public/1019-producto-god-of-war-9234.jpg"
                alt="Imagen de Jugo"
                className="ImgAministrador mx-auto d-block"
              />
            </td>
            <td>survivar</td>
            <td>
              <Link
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
      </tbody>
    </Table>
  </section>
);
};

export default Administrador;
