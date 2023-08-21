const React = require("react");
const client = require("../client");
const { Link } = require("react-router-dom");

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productos: [], ventadetalles: [], ventas: [] };
  }
  componentDidMount() {
    client({ method: "GET", path: "/api/productos" }).done((response) => {
      this.setState({ productos: response.entity._embedded.productos });
    });
    client({ method: "GET", path: "/api/ventadetalles" }).done((response) => {
      this.setState({ ventadetalles: response.entity._embedded.ventadetalles });
    });
    client({ method: "GET", path: "/api/ventas" }).done((response) => {
      this.setState({ ventas: response.entity._embedded.ventas });
    });
  }
  render() {
    return (
      <div class="container">
  <h1 class="text-center">EC4 Final</h1>
  <div class="row">
    <div class="col-md-4">
      <div class="border p-3 mb-3 text-center">
        <h2 class="mb-3">Productos</h2>
        <button class="btn btn-success mb-2">
          <Link to="/producto-new" class="text-white">
            Nuevo Producto
          </Link>
        </button>
        <ProductoList productos={this.state.productos} />
      </div>
    </div>
    <div class="col-md-4">
      <div class="border p-3 mb-3 text-center">
        <h2 class="mb-3">Negocios</h2>
        <button class="btn btn-success mb-2">
          <Link to="/lugar-new" class="text-white">
            Nuevo Negocio
          </Link>
        </button>
        <VentaList ventas={this.state.ventas} />
      </div>
    </div>
    <div class="col-md-4">
      <div class="border p-3 mb-3 text-center">
        <h2 class="mb-3">Facturas</h2>
        <button class="btn btn-success mb-2">
          <Link to="/factura-new" class="text-white">
            Nueva Factura
          </Link>
        </button>
        <DetalleList ventadetalles={this.state.ventadetalles} />
      </div>
    </div>
  </div>
</div>
    );
  }
}

const Titulo = (props) => {
  return (
    <>
      <hr />
      <h2>{props.entidad}</h2>
      <span>Listado completo de {props.entidad.toLowerCase()}:</span>
      <hr />
    </>
  );
};

class ProductoList extends React.Component {
  render() {
    const productos = this.props.productos.map((producto) => (
      <Producto key={producto._links.self.href} producto={producto} />
    ));
    return (
      <div className="border border-1 border-primary p-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos}
          </tbody>
        </table>
      </div>
    );
  }
}

class Producto extends React.Component {
  render() {
    const id = this.props.producto._links.self.href.split("/").slice(-1);
    return (
      <tr>
        <td>{this.props.producto.nombre}</td>
        <td>{this.props.producto.precio}</td>
        <td>
          <Link to={`/producto-edit/${id}`} className="btn btn-sm btn-primary">
            Editar
          </Link>
        </td>
      </tr>
    );
  }
}

class VentaList extends React.Component {
  render() {
    const ventas = this.props.ventas.map((venta) => (
      <Venta key={venta._links.self.href} venta={venta} />
    ));
    return (
      <div className="border border-1 border-primary">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Lugar</th>
              <th>Acciones</th>
            </tr>
            {ventas}
          </tbody>
        </table>
      </div>
    );
  }
}

class Venta extends React.Component {
  render() {
    const id = this.props.venta._links.self.href.split("/").slice(-1);
    return (
      <tr>
        <td>{this.props.venta.lugar}</td>
        <td>
          <Link to={`/lugar-edit/${id}`} className="btn btn-success">
            Editar
          </Link>
        </td>
      </tr>
    );
  }
}

class DetalleList extends React.Component {
  render() {
    const ventadetalles = this.props.ventadetalles.map((detalle) => (
      <Detalle key={detalle._links.self.href} detalle={detalle} />
    ));
    return (
      <div class="border border-1 border-primary">
        <table class="table table-striped-columns">
          <tbody>
            <tr>
              <th>Id Detalle</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
            {ventadetalles}
          </tbody>
        </table>
      </div>
    );
  }
}

class Detalle extends React.Component {
  render() {
    const id = this.props.detalle._links.self.href.split("/").slice(-1);
    return (
      <tr>
        <td>{this.props.detalle.nroBoleta}</td>
        <td>{this.props.detalle.cantidad}</td>
        <td>
          <Link to={`/factura-ver/${id}`} className="btn btn-danger mr-2">
            Ver
          </Link>
          <Link to={`/factura-edit/${id}`} className="btn btn-success">
            Editar
          </Link>
        </td>
      </tr>
    );
  }
}

module.exports = PageHome;