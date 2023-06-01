import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Form({ colaboradores }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [renderedColaboradores, setRenderedColaboradores] = useState([]);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleAddColaborador = () => {
      const newColaborador = { name, email };
      setRenderedColaboradores([...renderedColaboradores, newColaborador]);
      setName("");
      setEmail("");
    };
  
    const filtrarColaboradores = colaboradores.filter((colaborador) =>
      colaborador.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const filtrarMostrarColaboradores = renderedColaboradores.filter((colaborador) =>
      colaborador.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <div>
        <nav class="navbar bg-primary mb-4">
  <div class="container-fluid">
    <a className="navbar-brand text-light">Buscador de colaboradores</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" value={searchTerm} type="search" placeholder="Buscar" onChange={handleSearch}/>
    </form>
  </div>
</nav>
        </div>
        <div className="container">
          <label>Nombre del colaborador:</label>
          <input type="text" value={name} onChange={handleNameChange}  class="form-control" id="exampleFormControlInput1" placeholder="Ingresa el nombre del colaborador" />
          <br />
          <label>Correo del colaborador:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa el correo del colaborador" value={email} onChange={handleEmailChange} />
          <br />
          <button className="btn btn-primary" onClick={handleAddColaborador}>Agregar Colaborador</button>
        </div>
        <ul className="container mt-4">
          {filtrarColaboradores.map((colaborador, index) => (
            <li key={index}>
              <strong>Name:</strong> {colaborador.name}, <strong>Email:</strong>{" "}
              {colaborador.email}
            </li>
          ))}
          {filtrarMostrarColaboradores.map((colaborador, index) => (
            <li key={index + filtrarColaboradores.length}>
              <strong>Name:</strong> {colaborador.name}, <strong>Email:</strong>{" "}
              {colaborador.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Form