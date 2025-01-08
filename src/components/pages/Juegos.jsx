import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { listarProductosAPI } from "../helpers/queries";

const Juegos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [Juegos, setJuegos] = useState([]);
  const [JuegosFiltradosBusqueda, setJuegosFiltradosBusqueda] = useState([]);
  const [loading, setLoading] = useState(false);

  const enviadoForm = (data) => {
    console.log(data);
    
    if (data.NombreJuego) {
      const filtered = Juegos.filter((juego) =>
        juego.Juego.toLowerCase().includes(data.NombreJuego.toLowerCase())
      );
      setJuegosFiltradosBusqueda(filtered);
    } else {
      
      setJuegosFiltradosBusqueda(Juegos);
    }
    reset(); 
  };

  useEffect(() => {
    consultarAPI(); 
  }, []);

  const consultarAPI = async () => {
    setLoading(true);
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegos(datos);
      setJuegosFiltradosBusqueda(datos);
    } else {
      alert("Ocurrió un error, intenta más tarde");
    }
    setLoading(false);
  };

  return (
    <section>
      <article className="container mt-5 border-bottom p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Catálogo de Juegos</h2>

          <Form onSubmit={handleSubmit(enviadoForm)}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre"
                  className="mr-sm-2"
                  {...register("NombreJuego", {
                    minLength: {
                      value: 3,
                      message: "El mínimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 100,
                      message: "El máximo de caracteres permitido es de 100",
                    },
                  })}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Buscar</Button>
              </Col>
            </Row>
            <Form.Text className="text-danger mt-2">
              {errors.NombreJuego?.message}
            </Form.Text>
          </Form>
        </div>
      </article>

      <article className="container mt-4">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="row">
            {JuegosFiltradosBusqueda.length > 0 ? (
              JuegosFiltradosBusqueda.map((juego) => (
                <div key={juego.id} className="col-6 col-lg-3 col-md-3 mt-3">
                  <Card className="product-card h-100 rounded">
                    <Card.Img
                      variant="top"
                      src={juego.imagen}
                      alt={juego.Juego}
                      className="rounded-top"
                    />
                    <Card.Body>
                      <ul className="list-unstyled">
                        <li className="fs-5">
                          <b>{juego.Juego}</b>
                        </li>
                        <li className="text-success">
                          <b>{juego.precio}</b>
                        </li>
                      </ul>
                      <Button variant="primary" className="w-100">
                        Ver más
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p>No se encontraron juegos</p>
            )}
          </div>
        )}
      </article>
    </section>
  );
};

export default Juegos;

