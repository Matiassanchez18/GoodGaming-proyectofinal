import React, { useState } from "react";
import "./css/Style.css";

const DetalleProductos = () => {
  // Estado para la calificación (puedes simular la calificación y los comentarios)
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([
    {
      user: "Juan Perez",
      text: "¡Me encantó el juego! La historia es increíble.",
      rating: 5,
    },
    {
      user: "Maria Gómez",
      text: "Buen juego, pero algunas secciones son un poco repetitivas.",
      rating: 4,
    },
  ]);

  // Función para manejar el cambio en los comentarios
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Función para manejar el envío del comentario
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setCommentsList([
        ...commentsList,
        {
          user: "Nuevo Usuario",
          text: comment,
          rating: rating,
        },
      ]);
      setComment(""); // Limpiar el campo de comentario
    }
  };

  // Función para manejar el cambio de calificación
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card custom-card shadow-sm rounded">
            <div className="row no-gutters">
              {/* Imagen del Producto */}
              <div className="col-md-5">
                <img
                  src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/10/caratula-last-us-parte-ii.jpg?tf=3840x"
                  alt="Imagen del producto"
                  className="card-img-top custom-card-img"
                />
              </div>

              {/* Detalles del Producto */}
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
              <h5 className="rating-title">Calificación</h5>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? "filled" : ""}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            {/* Sección de comentarios */}
            <div className="card-body">
              <h5>Comentarios</h5>
              <form onSubmit={handleCommentSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Deja tu comentario"
                    value={comment}
                    onChange={handleCommentChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar Comentario
                </button>
              </form>

              <div className="comments-list mt-4">
                {commentsList.map((c, index) => (
                  <div key={index} className="comment">
                    <strong>{c.user}</strong> -{" "}
                    <span className="text-muted">{c.rating} Estrellas</span>
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


