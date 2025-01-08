export const crearProductoAPI = async (juegoNuevo) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juegoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listarProductosAPI = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos");
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error)
    return false
  }
};
