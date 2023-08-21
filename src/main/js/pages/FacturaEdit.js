const React = require("react");
const client = require("../client");
const { Link, useParams } = require("react-router-dom");
const { useState, useEffect } = require("react");

const PageFacturaEdit = (props) => {
  let { id } = useParams();
  const [detalle, setDetalle] = useState({});
  const [venta, setVenta] = useState({});
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const url_banda = "/api/ventadetalles/" + id;
    client({
      method: "GET",
      path: url_banda,
    }).done((response) => {
      setDetalle(response.entity);
      client({
        method: "GET",
        path: response.entity._links.venta.href,
      }).done((ventaResponse) => {
        setVenta(ventaResponse.entity);
      });
      client({
        method: "GET",
        path: response.entity._links.producto.href,
      }).done((productoResponse) => {
        setProducto(productoResponse.entity);
      });
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    client({
      method: "PATCH",
      path: "/api/ventadetalles/"+id,
      entity: detalle,venta,producto,
      headers: { "Content-Type": "application/json" },
    }).done((response) => {
      console.log(response);
    });
  };

  return (
    <div class="container">
  <h1 class="mt-4">Editar Detalle: {id}</h1>

  <form onSubmit={handleSubmit} class="mt-4">
    <div class="mb-3">
      <label for="nroBoleta" class="form-label">Nro Boleta</label>
      <h5 class="mb-3">Solo Lectura</h5>
      <input
        class="form-control"
        type="text"
        id="nroBoleta"
        name="nroBoleta"
        value={detalle.nroBoleta}
        onChange={(e) => {
          setDetalle({ ...detalle, nroBoleta: e.target.value });
        }}
        readOnly
      />
    </div>

    <div class="mb-3">
      <label for="cantidad" class="form-label">Cantidad</label>
      <input
        class="form-control"
        type="text"
        name="cantidad"
        value={detalle.cantidad}
        onChange={(e) => {
          setDetalle({ ...detalle, cantidad: e.target.value });
        }}
      />
    </div>

    <div class="mb-3">
      <label for="venta" class="form-label">Venta</label>
      <h5 class="mb-3">Solo Lectura</h5>
      <input
        class="form-control"
        type="text"
        name="venta"
        value={venta.lugar || detalle.cantidad}
        onChange={(e) => {
          setPutDetalle({ ...putdetalle, lugar: e.target.value });
        }}
        readOnly
      />
    </div>

    <div class="mb-3">
      <label for="producto" class="form-label">Producto</label>
      <h5 class="mb-3">Solo Lectura</h5>
      <input
        class="form-control"
        type="text"
        name="producto"
        value={producto.nombre || detalle.cantidad}
        onChange={(e) => {
          setPutDetalle({ ...putdetalle, nombre: e.target.value });
        }}
        readOnly
      />
    </div>

    <button class="btn btn-primary" type="submit">Editar Factura {id}</button>
  </form>

  <button class="btn btn-danger mt-3">
    <Link to="/" class="text-white">
      Volver
    </Link>
  </button>
</div>
  );
};

module.exports = PageFacturaEdit;
