import React, { useEffect, useRef, useState } from "react";
import { Carousel, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Style.css";
import {
  Fire,
  ChevronDoubleRight,
  ChevronDoubleLeft,
} from "react-bootstrap-icons";
import { Link } from "react-router";
import { listarProductosAPI } from "../helpers/queries";

const Inicio = () => {
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  // Funciones para mover el carrusel
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft2 = () => {
    carouselRef2.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight2 = () => {
    carouselRef2.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  
  const scrollLeft3 = () => {
    carouselRef3.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight3 = () => {
    carouselRef3.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [juegosSemanales, setJuegosSemanales] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegosSemanales(datos);
    } else {
      alert("Ocurrio un error, intenta mas tarde");
    }
  };

  const juegosFiltrados = juegosSemanales.filter(
    (juego) => juego.JuegoDeSemana === "true"
  );

  const juegosFiltradosPS4 = juegosSemanales.filter(
    (juego) => juego.Consola === "ps4"
  );

  return (
    <div>
      <section>
        <article className="">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_Hub_TheLegendOfZelda_ToTK.jpg"
                alt="The Legend of Zelda: Tears of the Kingdom"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://i.blogs.es/5fe30d/fifa-21-intros_1/1366_2000.jpeg"
                alt="Fifa 2021"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-trucos-witcher-3-wild-hunt.jpg?tf=3840x"
                alt="Witcher 3"
              />
            </Carousel.Item>
          </Carousel>
        </article>

        <article className="container">
          <h1 className="border-bottom mt-5">
            Juegos semanales
            <Fire className="fs-4 ms-2 text-danger" />
          </h1>

          <div className="d-flex align-items-center">
            <Button
              variant="link"
              onClick={scrollLeft}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll left"
            >
              &#8592;
            </Button>

            <div
              ref={carouselRef}
              className="d-flex overflow-auto mt-4 card-container"
            >
              {juegosFiltrados.length >= 5 ? (
                juegosFiltrados.map((juego) => (
                  <div className="col-12 col-lg-3 col-md-3 mt-3" key={juego.id}>
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
                            <b>Precio: {juego.precio}</b>
                          </li>
                        </ul>
                        <Link
                          to={"/DetalleProductos/" + juego.id}
                          className="btn btn-primary w-100"
                        >
                          Ver más
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div
                  className="alert alert-warning text-center fs-4 w-100 mt-4"
                  role="alert"
                >
                  <strong>No hay juegos disponibles</strong>
                </div>
              )}
            </div>

            <Button
              variant="link"
              onClick={scrollRight}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll right"
            >
              &#8594;
            </Button>
          </div>
        </article>

        <article className="container mt-5">
          <div className="d-flex justify-content-between border-bottom align-items-center">
            <h2 className="mb-0">Juegos PS4</h2>
            <Link to={"/Juegos"} className="text-decoration-none">
              <h4 className="mb-0">Ver más</h4>
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <Button
              variant="link"
              onClick={scrollLeft2}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll left"
            >
              <ChevronDoubleLeft />
            </Button>

            <div
              ref={carouselRef2}
              className="d-flex overflow-auto mt-4 card-container"
            >
              {juegosFiltradosPS4.length > 0 ? (
                // Limitamos a los primeros 8 juegos
                juegosFiltradosPS4.slice(0, 8).map((juego) => (
                  <div className="col-12 col-lg-3 col-md-3 mt-3" key={juego.id}>
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
                            <b>Precio: {juego.precio}</b>
                          </li>
                        </ul>
                        <Link
                          to={"/DetalleProductos/" + juego.id}
                          className="btn btn-primary w-100"
                        >
                          Ver más
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div
                  className="alert alert-warning text-center fs-4 w-100 mt-4"
                  role="alert"
                >
                  <strong>No hay juegos disponibles</strong>
                </div>
              )}
            </div>

            <Button
              variant="link"
              onClick={scrollRight2}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll right"
            >
              <ChevronDoubleRight />
            </Button>
          </div>
        </article>

        <article className="container mt-5">
          <div className="d-flex justify-content-between border-bottom align-items-center">
            <h2 className="mb-0">Juegos PS5</h2>
            <Link to={"/Juegos"} className="text-decoration-none">
              <h4 className="mb-0">Ver más</h4>
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <Button
              variant="link"
              onClick={scrollLeft3}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll left"
            >
              <ChevronDoubleLeft />
            </Button>

            <div
              ref={carouselRef3}
              className="d-flex overflow-auto mt-4 card-container"
            >
              {juegosFiltradosPS4.length > 0 ? (
                // Limitamos a los primeros 8 juegos
                juegosFiltradosPS4.slice(0, 8).map((juego) => (
                  <div className="col-12 col-lg-3 col-md-3 mt-3" key={juego.id}>
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
                            <b>Precio: {juego.precio}</b>
                          </li>
                        </ul>
                        <Link
                          to={"/DetalleProductos/" + juego.id}
                          className="btn btn-primary w-100"
                        >
                          Ver más
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div
                  className="alert alert-warning text-center fs-4 w-100 mt-4"
                  role="alert"
                >
                  <strong>No hay juegos disponibles</strong>
                </div>
              )}
            </div>

            <Button
              variant="link"
              onClick={scrollRight3}
              className="fs-3 text-dark arrow-btn"
              aria-label="Scroll right"
            >
              <ChevronDoubleRight />
            </Button>
          </div>
        </article>

        
      </section>
    </div>
  );
};

export default Inicio;
