import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const FormularioJuego = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data); 
  };

  return (
    <section className="container">
      <p className="fs-1 mt-5 border-bottom">Administrar Juegos</p>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Group className="mb-3" controlId="Juego">
          <Form.Label>Juego*</Form.Label>
          <Form.Control
            {...register("Juego", {
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
            type="text"
            placeholder="Ingresa el nombre del Juego"
          />
          <Form.Text className="text-danger mt-2">
            {errors.Juego?.message}
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="Precio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: $1500"
            {...register("precio", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "El mínimo de caracteres es de 3",
              },
              maxLength: {
                value: 6,
                message: "El máximo de caracteres permitido es de 6",
              },
            })}
          />
          <Form.Text className="text-danger mt-2">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

       
        <Form.Group className="mb-3" controlId="Imagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="url"
            placeholder="Ej: https://images.pexels.com/photos/27548798/pexels-photo-27548798/free-photo-of-gafas-de-sol-relajacion-camara-verano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            {...register("imagen", {
              required: "Este campo es obligatorio",
            })}
          />
          <Form.Text className="text-danger mt-2">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

       
        <Form.Group className="mb-3">
          <Form.Label>Categoría del producto*</Form.Label>
          <div>
            {[
              "Acción",
              "Aventura",
              "Deportes",
              "RPG",
              "Estrategia",
              "Simulación",
              "Terror",
              "Lucha",
              "Carreras",
              "Plataforma",
              "FPS",
              "MOBA",
              "Battle Royale",
              "Survival",
              "Casual",
              "Indie",
              "Multijugador",
              "Sandbox",
              "VR",
            ].map((genre, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={genre}
                value={genre}
                {...register("Genero", {
                  validate: (value) =>
                    value.length > 0 || "Debe seleccionar al menos un género",
                })}
              />
            ))}
          </div>
          <Form.Text className="text-danger mt-2">
            {errors.Genero?.message}
          </Form.Text>
        </Form.Group>

       
        <FloatingLabel
          controlId="Breve"
          label="Descripción breve"
          className="mt-4"
        >
          <Form.Control
            as="textarea"
            placeholder="Deja un comentario aquí"
            {...register("breve", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "El mínimo de caracteres es de 3",
              },
              maxLength: {
                value: 70,
                message: "El máximo de caracteres permitido es de 70",
              },
            })}
          />
          <Form.Text className="text-danger mt-2">
            {errors.breve?.message}
          </Form.Text>
        </FloatingLabel>

        
        <FloatingLabel
          controlId="Amplia"
          label="Descripción amplia"
          className="mt-4"
        >
          <Form.Control
            as="textarea"
            placeholder="Deja un comentario aquí"
            {...register("amplio", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 15,
                message: "El mínimo de caracteres es de 15",
              },
              maxLength: {
                value: 100,
                message: "El máximo de caracteres permitido es de 100",
              },
            })}
          />
          <Form.Text className="text-danger mt-2">
            {errors.amplio?.message}
          </Form.Text>
        </FloatingLabel>

        
        <Button variant="success" type="submit" className="mt-5">
          Guardar
        </Button>
      </form>
    </section>
  );
};

export default FormularioJuego;
