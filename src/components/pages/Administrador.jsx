import React, { useEffect, useState } from "react";
import { FileEarmarkPlus, PencilSquare, Trash3, Eye } from "react-bootstrap-icons";
import { Link } from "react-router";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./css/Style.css";
import { eliminarProducto, listarProductosAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import Modal from 'react-bootstrap/Modal';

const Administrador = () => {
  const [listaJuegos, setlistaJuegos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalJuego, setModalJuego] = useState(null);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setlistaJuegos(datos);
    } else {
      alert("Ocurrio un error por favor intente mas tarde!");
    }
  };

  const borrarProducto = async (JuegoId) => {
    const respuesta = await eliminarProducto(JuegoId);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "El articulo se elimino correctamente!",
        icon: "success",
        draggable: false,
      });
      const respuestaJuego = await listarProductosAPI();
      if (respuestaJuego.status === 200) {
        const datos = await respuestaJuego.json();
        setlistaJuegos(datos);
      } else {
        Swal.fire({
          title: "Ocurrio un erro por favor intentelo mas tarde!",
          text: "Quieres continuar",
          icon: "error",
          confirmButtonText: "ok",
        });
      }
    } else {
      Swal.fire({
        title: "Ocurrio un erro por favor intentelo mas tarde!",
        text: "Quieres continuar",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  const handleShowModal = (Juego) => {
    setModalJuego(Juego);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalJuego(null);
  };

  return (
    <section className="table-responsive container mt-5">
      <div className="d-flex justify-content-between align-items-center border-bottom mb-4">
        <h1 className="">Producto disponibles</h1>
        <Link to={"/Administrador/FormularioJuego"}>
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
                  to={`/Administrador/FormularioJuego/editar/${Juego.id}`}
                  className="btn btn-warning me-4 ms-4"
                >
                  <PencilSquare />
                </Link>

                <Button
                  variant="danger"
                  onClick={() => borrarProducto(Juego.id)}
                >
                  <Trash3 />
                </Button>
                
                <Button
                  variant="primary"
                  className="ms-4"
                  onClick={() => handleShowModal(Juego)}
                >
                  <Eye />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {modalJuego && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalJuego.Juego}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Precio:</strong> {modalJuego.precio}</p>
            <p><strong>Genero:</strong> {modalJuego.Genero}</p>
            <p><strong>URL Imagen:</strong> {modalJuego.imagen}</p>
            <p><strong>Descripcion amplia:</strong> {modalJuego.amplio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Administrador;

