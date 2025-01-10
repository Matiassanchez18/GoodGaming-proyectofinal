import React, { useEffect, useState } from "react";
import "./css/Style.css";
import { useParams } from "react-router";
import { obtenerJuegos } from "../helpers/queries";

const DetalleProductos = () => {
  const [Estrellas, setEstrellas] = useState(0);
  const [Comentario, setComentario] = useState("");
  const [ComentariosList, setComentariosList] = useState([
    {
      user: "Juan Perez",
      text: "¡Me encantó el juego! La historia es increíble.",
      Estrellas: 5,
    },
    {
      user: "Maria Gómez",
      text: "Buen juego, pero algunas secciones son un poco repetitivas.",
      Estrellas: 4,
    },
  ]);

  const [Juegos, setJuegos] = useState({});

  const { id } = useParams();

  useEffect(() => {
    obtenerJuego();
  }, []);

  const obtenerJuego = async () => {
    const respuesta = await obtenerJuegos(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegos(datos);
    } else {
      alert("Ocurrio un error intente mas tarde");
    }
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleComentarioSubmit = (event) => {
    event.preventDefault();
    if (Comentario.trim()) {
      setComentariosList([
        ...ComentariosList,
        {
          user: "Nuevo Usuario",
          text: Comentario,
          Estrellas: Estrellas,
        },
      ]);
      setComentario("");
      setEstrellas(0);
    }
  };

  const handleEstrellasChange = (newEstrellas) => {
    setEstrellas(newEstrellas);
  };

  return (
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card custom-card shadow-sm rounded">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={Juegos.imagen}
                  alt="Imagen del producto"
                  className="ImagenDetalleProducto"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body custom-card-body">
                  <p>Codigo: #{Juegos.id}</p>
                  <h4 className="card-title">{Juegos.Juego}</h4>
                  <p className="card-text text-muted">
                    Juego para {Juegos.Consola}
                  </p>
                  <p className="card-description">{Juegos.amplio}</p>
                  <div className="mb-3">
                    {Juegos.Genero && Array.isArray(Juegos.Genero)
                      ? Juegos.Genero.map((genero, index) => (
                          <span
                            key={index}
                            className="badge rounded-pill bg-secondary me-2 mb-2"
                          >
                            {genero}
                          </span>
                        ))
                      : Juegos.Genero?.split(",").map((genero, index) => (
                          <span
                            key={index}
                            className="badge rounded-pill bg-secondary me-2 mb-2"
                          >
                            {genero.trim()}
                          </span>
                        ))}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price text-success">
                      <b>${Juegos.precio}</b>
                    </span>
                    <button className="btn btn-outline-dark">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <h5 className="Calificacion-titulo">Calificación</h5>
              <div className="Calificacion">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`Estrella ${Estrellas >= star ? "filled" : ""}`}
                    onClick={() => handleEstrellasChange(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            <div className="card-body">
              <h5>Comentarios</h5>
              <form onSubmit={handleComentarioSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control rezine"
                    rows="3"
                    placeholder="Deja tu comentario"
                    value={Comentario}
                    onChange={handleComentarioChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar Comentario
                </button>
              </form>

              <div className="Comentarios-list mt-4">
                {ComentariosList.map((c, index) => (
                  <div key={index} className="Comentario">
                    <strong>{c.user}</strong> -{" "}
                    <span className="text-muted">{c.Estrellas} Estrellas</span>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleProductos;
