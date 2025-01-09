import React, { useState } from "react";
import "./css/Style.css";

const DetalleProductos = () => {
  
  const [Estrellas, setEstrellas] = useState(0); // Estado de la calificación
  const [Comentario, setComentario] = useState(""); // Estado del comentario
  const [ComentariosList, setComentariosList] = useState([ // Lista de comentarios inicial
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

  // Función para manejar cambios en el comentario
  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  // Función para manejar el envío de comentario
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
      setComentario(""); // Limpiar el comentario
      setEstrellas(0);   // Limpiar la calificación
    }
  };

  // Función para manejar el cambio de estrellas
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
                  src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/10/caratula-last-us-parte-ii.jpg?tf=3840x"
                  alt="Imagen del producto"
                  className="ImagenDetalleProducto"
                />
              </div>

              <div className="col-md-7">
                <div className="card-body custom-card-body">
                  <h4 className="card-title">The Last of Us Parte II</h4>
                  <p className="card-text text-muted">Juego para PlayStation 4</p>
                  <p className="card-description">
                    La secuela del aclamado juego de aventuras y acción. Explora un mundo post-apocalíptico lleno de emoción, tensión y personajes memorables.
                    Vive la historia de Ellie mientras lucha por sobrevivir en un entorno brutal y despiadado.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">€59.99</span>
                    <button className="btn btn-outline-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de calificación */}
            <div className="card-footer">
              <h5 className="Calificacion-titulo">Calificación</h5>
              <div className="Calificacion">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`Estrella ${Estrellas >= star ? "filled" : ""}`}
                    onClick={() => handleEstrellasChange(star)} 
                  >
                    &#9733; {/* Estrella de la calificación */}
                  </span>
                ))}
              </div>
            </div>

            {/* Sección de comentarios */}
            <div className="card-body">
              <h5>Comentarios</h5>
              <form onSubmit={handleComentarioSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control"
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


  




