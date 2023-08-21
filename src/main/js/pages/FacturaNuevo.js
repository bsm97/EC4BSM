const React = require("react");
const { useState, useEffect } = require("react");
const { Link, useParams } = require("react-router-dom");
const client = require("../client");

const PageFacturaNuevo= () => {
  const [Lugar, setLugar] = useState([]);
  const [Producto, setProducto] = useState([]);
  const [nroboleta, setNroboleta] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [idproducto, setId_Producto] = useState("");
  const [idlugar, setId_lugar] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!nroboleta || !idlugar || !idproducto || !cantidad) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    client({
      method: "POST",
      path: "/api/ventadetalles",
      entity: {
        nroBoleta: nroboleta,
        venta: "http://localhost:8080/api/ventas/" + idlugar,
        producto: "http://localhost:8080/api/productos/" + idproducto,
        cantidad: cantidad,
      },
      headers: { "Content-Type": "application/json" },
    }).done((response) => {
      console.log("Respuesta del servidor:", response);
      alert("Datos registrados Correctamente");
      window.location = '/';
    });
  };

  useEffect(() => {
    client({
      method: "GET",
      path: "/api/ventas",
    }).done((response) => {
      let venta2 = [];
      response.entity._embedded.ventas.map((producto) => {
        venta2.push({
          value: producto._links.self.href.split("/").slice(-1),
          label: producto.lugar,
        });
      });
      setLugar(venta2);
    });
    client({
      method: "GET",
      path: "/api/productos",
    }).done((response) => {
      let productos2 = [];
      response.entity._embedded.productos.map((producto) => {
        productos2.push({
          value: producto._links.self.href.split("/").slice(-1),
          label: producto.nombre,
        });
      });
      setProducto(productos2);
    });
  }, []);

  return (
    <div class="container">
  <h1 class="mt-4">Nuevo Instrumento</h1>
  
  <form onSubmit={handleSubmit} class="mt-4">
    <div class="mb-3">
      <label htmlFor="nroboleta" class="form-label">Nro Boleta:</label>
      <input
        type="text"
        id="nroboleta"
        name="nroboleta"
        class="form-control"
        onChange={(e) => setNroboleta(e.target.value)}
      />
    </div>
    
    <div class="mb-3">
      <label htmlFor="lugar" class="form-label">Lugar:</label>
      <select
        name="lugar"
        id="lugar"
        class="form-select"
        onChange={(e) => {
          console.log("Nuevo valor de lugar:", e.target.value);
          setId_lugar(e.target.value);
        }}
      >
        <option value="0">Seleccione un lugar</option>
        {Lugar.map((lugar) => {
          return (
            <option key={lugar.value} value={lugar.value}>
              {lugar.label}
            </option>
          );
        })}
      </select>
    </div>
    
    <div class="mb-3">
      <label htmlFor="producto" class="form-label">Producto:</label>
      <select
        name="producto"
        id="producto"
        class="form-select"
        onChange={(e) => {
          console.log("Nuevo valor de producto:", e.target.value);
          setId_Producto(e.target.value);
        }}
      >
        <option value="0">Seleccione un producto</option>
        {Producto.map((producto) => {
          return (
            <option key={producto.value} value={producto.value}>
              {producto.label}
            </option>
          );
        })}
      </select>
    </div>
    
    <div class="mb-3">
      <label htmlFor="cantidad" class="form-label">Cantidad:</label>
      <input
        type="text"
        id="cantidad"
        name="cantidad"
        class="form-control"
        onChange={(e) => setCantidad(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">
      Nueva Factura
    </button>
  </form>
  
  <Link to="/" class="btn btn-secondary mt-3">
    Volver
  </Link>
</div>
  );
};

module.exports = PageFacturaNuevo;
