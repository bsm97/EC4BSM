const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageProductoNuevo = () => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: { nombre: nombre, precio: precio},
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <div class="container">
  <h1 class="mt-4">Nuevo Producto</h1>
  
  <form onSubmit={handleSubmit} class="mt-4">
    <div class="mb-3">
      <label htmlFor="nombre" class="form-label">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        class="form-control"
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
    
    <div class="mb-3">
      <label htmlFor="precio" class="form-label">Precio:</label>
      <input
        type="text"
        id="precio"
        name="precio"
        class="form-control"
        onChange={(e) => setPrecio(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">
      Nuevo Producto
    </button>
  </form>
  
  <Link to="/" class="btn btn-secondary mt-3">
    Volver
  </Link>
</div>
    )
}

module.exports = PageProductoNuevo;