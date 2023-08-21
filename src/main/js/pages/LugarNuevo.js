const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageLugarNuevo = () => {

    const [lugar, setLugar] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventas',
            entity: { lugar: lugar},
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <div class="container">
  <h1 class="mt-4">Agregar Nuevo Negocio</h1>
  
  <form onSubmit={handleSubmit} class="mt-4">
    <div class="mb-3">
      <label htmlFor="lugar" class="form-label">Lugar:</label>
      <input
        type="text"
        id="lugar"
        name="lugar"
        class="form-control"
        onChange={(e) => setLugar(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">
      Nuevo Negocio
    </button>
  </form>
  
  <Link to="/" class="btn btn-secondary mt-3">
    Volver
  </Link>
</div>
    )
}

module.exports = PageLugarNuevo;