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
    console.error(error);
    return false;
  }
};

export const eliminarProducto = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos/" + id, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerJuegos = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarProductoAPI = async (productoEditado, id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
