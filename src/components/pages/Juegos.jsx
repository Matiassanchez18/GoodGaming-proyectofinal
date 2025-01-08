import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Juegos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [nombreJuegos, setnombresJuegos] = useState([]);

  const enviadoForm = (data) => {
    console.log(data);
    reset()
}

  return (
    <section>
      <article className="container mt-5 border-bottom p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Catálogos de Juegos</h2>

          <Form onSubmit={handleSubmit(enviadoForm)}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  {...register("NombreJuego", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "El minimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 100,
                      message: "El maximo de caracteres permitido es de 100",
                    },
                  })}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
            <Form.Text className="text-danger mt-2">
            {errors.NombreJuego?.message}
          </Form.Text>
          </Form>
        </div>
      </article>

      <article className="container mt-4">
        <div className="row">
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
        </div>
      </article>
    </section>
  );
};

export default Juegos;
