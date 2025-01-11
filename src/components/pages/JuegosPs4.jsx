import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { listarProductosAPI } from "../helpers/queries";
import { Link } from "react-router";

const JuegosPs4 = () => {
  const [Juegos, setJuegos] = useState([]);
  const [JuegosFlitradosBusqueda, setJuegosFlitradosBusqueda] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setLoading(true);
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      const juegosPs4 = datos.filter((juego) => juego.Consola.toLowerCase() === "ps4");
      setJuegos(juegosPs4);
      setJuegosFlitradosBusqueda(juegosPs4);
    } else {
      alert("Ocurrió un error, intenta más tarde");
    }
    setLoading(false);
  };

  const busquedaDinamica = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      setJuegosFlitradosBusqueda(Juegos);
    } else {
      const filtered = Juegos.filter((juego) =>
        juego.Juego.toLowerCase().includes(searchTerm)
      );
      setJuegosFlitradosBusqueda(filtered);
    }
  };

  return (
    <section>
      <article className="container mt-5 border-bottom p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Catálogo de Juegos</h2>

          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Buscar por nombre"
                  className="mr-sm-2"
                  onChange={busquedaDinamica}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </article>

      <article className="container mt-4">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="row">
            {JuegosFlitradosBusqueda.length > 0 ? (
              JuegosFlitradosBusqueda.map((juego) => (
                <div key={juego.id} className="col-12 col-lg-3 col-md-3 mt-3">
                  <Card className="product-card h-100 rounded">
                    <Card.Img
                      variant="top"
                      src={juego.imagen}
                      alt={juego.Juego}
                      className="rounded-top h-100"
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
                      <Link to={"/DetalleProductos/" + juego.id} className="btn btn-primary w-100">
                        Ver más
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p>No se encontraron juegos de PS4</p>
            )}
          </div>
        )}
      </article>
    </section>
  );
};

export default JuegosPs4;
