import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { crearProductoAPI } from "../helpers/queries";
import Swal from 'sweetalert2'

const FormularioJuego = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async(Juego) => {
   console.log(Juego)
   const respuesta = await crearProductoAPI(Juego)
   if (respuesta.status === 201) {
    Swal.fire({
      title: "Se creo el juego con exito!",
      icon: "success",
      draggable: false
    });
    reset();
  } else {
    Swal.fire({
      title: 'Ocurrio un erro por favor intentelo mas tarde!',
      text: 'Quieres continuar',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }
  };

  return (
    <section className="container">
      <p className="fs-1 mt-5 border-bottom">Administrar Juegos</p>
      <form className="container border shadow p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
        
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

        <Form.Group className="mb-3 mt-4" controlId="Desarrollador">
          <Form.Label>Desarrollador*</Form.Label>
          <Form.Control
            {...register("Desarrollador", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "El mínimo de caracteres es de 3",
              },
              maxLength: {
                value: 25,
                message: "El máximo de caracteres permitido es de 25",
              },
            })}
            type="text"
            placeholder="Ingresa el nombre del Desarrollador"
          />
          <Form.Text className="text-danger mt-2">
            {errors.Desarrollador?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Categoria del producto*</Form.Label>
          <Form.Select
            {...register("JuegoDeSemana", {
              required: "Este campo es obligatorio",
            })}
          >
            <option value="">Juego de la semana?</option>
            <option value="true">si</option>
            <option value="false">no</option>
          </Form.Select>
          <Form.Text className="text-danger mt-2">
            {errors.JuegoDeSemana?.message}
          </Form.Text>
        </Form.Group>

        
        <Button variant="success" type="submit" className="mt-5">
          Guardar
        </Button>
      </form>
    </section>
  );
};

export default FormularioJuego;
