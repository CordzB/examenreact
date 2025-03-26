import React from 'react';
import Entrada from './Entrada';
import Swal from 'sweetalert2';

const ModalEmpleado = ({ nuevoEmpleado, setNuevoEmpleado, guardarEmpleado }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado({ ...nuevoEmpleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, dni, direccion, email } = nuevoEmpleado;

    // Verifica si hay campos vacíos
    if (!nombre || !dni || !direccion || !email) {
      Swal.fire({
        title: "Tiene campos vacios ",
        text: "Por favor completar todos los campos",
        icon: "error"
      });
      return;
    }

    guardarEmpleado();
  };

  return (
    <div className="modal fade" id="modalEmpleado" tabIndex="-1">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <Entrada label="Nombre" name="nombre" type="text" value={nuevoEmpleado.nombre} onChange={handleChange} />
            <Entrada label="DNI" name="dni" type="text" value={nuevoEmpleado.dni} onChange={handleChange} />
            <Entrada label="Dirección" name="direccion" type="text" value={nuevoEmpleado.direccion} onChange={handleChange} />
            <Entrada label="Email" name="email" type="email" value={nuevoEmpleado.email} onChange={handleChange} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" type="submit">Guardar</button>
            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEmpleado;
