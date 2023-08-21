const React = require("react");
const { useState, useEffect } = require("react");
const { useParams, Link } = require("react-router-dom");
const client = require("../client");

const PageProductosEdit = () => {
  const { id } = useParams();
  const [Producto, setProducto] = useState({});

  useEffect(() => {
    client({
      method: "GET",
      path: "/api/productos/" + id,
      headers: { "Content-Type": "application/json" },
    }).done((response) => {
      setProducto(response.entity);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    client({
      method: "PATCH",
      path: "/api/productos/" + id,
      headers: { "Content-Type": "application/json" },
      entity: Producto,
    }).done(() => (window.location = "/"));
  };

  return (
    <div class="container">
      <h1>Editar Producto: {id}</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          class="form-control"
          type="text"
          name="nombre"
          value={Producto.nombre}
          onChange={(e) => {
            setProducto({ ...Producto, nombre: e.target.value });
          }}
        />
        <br />
        <label>Precio</label>
        <input
          class="form-control"
          type="text"
          name="precio"
          value={Producto.precio}
          onChange={(e) => {
            setProducto({ ...Producto, precio: e.target.value });
          }}
        />
        <br />

        <input
          class="btn btn-primary mb-2"
          type="submit"
          value={`Editar Producto ${id}`}
        />
      </form>
      <button class="btn btn-danger">
        <Link to="/" class="btn-link-unstyled2">
          Volver
        </Link>
      </button>
    </div>
  );
};

module.exports = PageProductosEdit;
