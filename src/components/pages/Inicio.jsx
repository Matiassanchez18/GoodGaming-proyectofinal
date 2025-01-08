import React, { useRef } from "react";
import { Carousel, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Style.css";
import { Fire } from "react-bootstrap-icons";

const Inicio = () => {
  const carouselRef = useRef(null);

  // Funciones para mover el carrusel
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Desplazar hacia la izquierda
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Desplazar hacia la derecha
  };

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
              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://gorilagames.com/img/Public/1019-producto-god-of-war-9234.jpg"
                    alt="God of War"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>God of War</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 2500</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              
              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jnqJu83c4356cObgqUqv9CDvQBzfyvmbNQ&s"
                    alt="Gran Turismo 7"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>Gran Turismo 7</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 12500</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              
              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://spacegamer.com.ar/img/Public/1058-producto-gtavpremiun-270.jpg"
                    alt="GTA 5"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>GTA 5</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 1500</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>

          
              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://i5.walmartimages.com/seo/The-Legend-of-Zelda-Breath-of-the-Wild-Nintendo-Switch_88fdeff7-b5c7-4dc1-9d30-66217f20f86c.3d08635afa4636f1074ae99ebf602b92.jpeg"
                    alt="Zelda"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>Zelda</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 16400</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://juegosdigitalesargentina.com/files/images/productos/1539888144-days-gone-pre-orden-ps4-primaria.png"
                    alt="Days gonr"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>Days Gone</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 54000</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-12 col-lg-3 col-md-3 mt-3">
                <Card className="product-card h-100 rounded">
                  <Card.Img
                    variant="top"
                    src="https://ubistatic-a.akamaihd.net/0071/Far_Cry_4/000078602_enGB_FC4_StandardEdition.jpg"
                    alt="Far Cry"
                    className=" rounded-top"
                  />
                  <Card.Body>
                    <ul className="list-unstyled">
                      <li className="fs-5">
                        <b>Far Cry</b>
                      </li>
                      <li className="text-success">
                        <b>Precio: 57000</b>
                      </li>
                    </ul>
                    <Button variant="primary" className="w-100">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </div>
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
      </section>
    </div>
  );
};

export default Inicio;
