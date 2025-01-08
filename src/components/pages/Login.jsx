import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

  return (
    <section className="container mt-5">
      <article className="mx-auto border shadow">
        <p className="text-center mt-3">Login</p>
        <form action="" >
          <Form.Group className="mb-3 w-75 mx-auto" controlId="Email">
            <Form.Label>
              <p>Email</p>
            </Form.Label>
            <Form.Control
              {...register("email", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El mínimo de caracteres es de 3",
                },
                maxLength: {
                  value: 50,
                  message: "El máximo de caracteres permitido es de 50",
                },
              })}
              type="email"
              placeholder="ej: askdkjdajk@gmail.com"
              className="form-control-lg"
            />
            <Form.Text className="text-danger mt-2"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 w-75 mx-auto" controlId="pasword">
            <Form.Label>
              <p>Contraseña</p>
            </Form.Label>
            <Form.Control
              {...register("password", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El mínimo de caracteres es de 3",
                },
                maxLength: {
                  value: 50,
                  message: "El máximo de caracteres permitido es de 50",
                },
              })}
              type="password"
              placeholder="Ingresa su contraseña"
              className="form-control-lg"
            />
            <Form.Text className="text-danger mt-2"></Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary mb-4" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
