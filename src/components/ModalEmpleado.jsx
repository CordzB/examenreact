import React from 'react';
import Swal from 'sweetalert2';
import CampoConIcono from './CampoConIcono';

const ModalEmpleado = ({ nuevoEmpleado, setNuevoEmpleado, guardarEmpleado }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado({ ...nuevoEmpleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, dni, direccion, email } = nuevoEmpleado;

    if (!nombre || !dni || !direccion || !email) {
      Swal.fire({
        title: "Campos Vacios",
        text: "Por favor completar los campos.",
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
            <CampoConIcono label="Nombre" name="nombre" type="text" icono="fa-user" value={nuevoEmpleado.nombre} onChange={handleChange} />
            <CampoConIcono label="DNI" name="dni" type="text" icono="fa-id-card" value={nuevoEmpleado.dni} onChange={handleChange} />
            <CampoConIcono label="Dirección" name="direccion" type="text" icono="fa-map-marker-alt" value={nuevoEmpleado.direccion} onChange={handleChange} />
            <CampoConIcono label="Email" name="email" type="email" icono="fa-envelope" value={nuevoEmpleado.email} onChange={handleChange} />
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-save me-2"></i> Guardar
            </button>
            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEmpleado;
