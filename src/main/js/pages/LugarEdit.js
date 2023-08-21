const React = require("react");
const { useState, useEffect } = require("react");
const { useParams, Link } = require("react-router-dom");
const client = require("../client");

const PageLugarEdit = () => {
  const { id } = useParams();
  const [lugar, setLugar] = useState({});

  useEffect(() => {
    client({
      method: "GET",
      path: "/api/ventas/" + id,
      headers: { "Content-Type": "application/json" },
    }).done((response) => {
        setLugar(response.entity);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    client({
      method: "PATCH",
      path: "/api/ventas/" + id,
      headers: { "Content-Type": "application/json" },
      entity: lugar,
    }).done(() => (window.location = "/"));
  };

  return (
    <div class="container">
      <h1>Editar lugar: {id}</h1>

      <form onSubmit={handleSubmit}>
        <label>Lugar</label>
        <input
          class="form-control"
          type="text"
          name="lugar"
          value={lugar.lugar}
          onChange={(e) => {
            setLugar({ ...lugar, lugar: e.target.value });
          }}
        />
        <input
          class="btn btn-primary mb-2"
          type="submit"
          value={`Editar Lugar ${id}`}
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

module.exports = PageLugarEdit;
