import React from "react";

const AcercadeNostros = () => {
  return (
    <section className="container mt-5 p-5 row mx-auto border shadow bg-white">
      <article className="container col-12 col-sm-6 col-lg-6 col-md-6">
        <div className=" mx-auto">
          <img
            src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4864.jpg"
            alt=""
            className="rounded-circle w-50 h-50"
          />
        </div>
      </article>

      <article className="container  col-12 col-sm-6 col-lg-6 col-md-6">
        <div className=" mx-auto">
          <ul className="list-unstyled">
            <li className="fs-3 mb-4"><b>Datos</b></li>
            <li className="fs-5"><b>Nombre: Matias sanchez</b></li>
            <li className="fs-5"><b>Tarea: Realizo el proyecto completo.</b></li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AcercadeNostros;
