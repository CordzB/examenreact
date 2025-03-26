import React from 'react';
import { useEmpleados } from './hooks/useEmpleados';
import TablaEmpleados from './components/TablaEmpleados';
import ModalEmpleado from './components/ModalEmpleado';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const {
    empleados,
    nuevoEmpleado,
    setNuevoEmpleado,
    guardarEmpleado
  } = useEmpleados();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Listado de Empleados</h2>
      <button
        className="btn btn-success mb-3"
        data-bs-toggle="modal"
        data-bs-target="#modalEmpleado"
      >
        <i className="fas fa-user-plus"></i> Agregar Empleado
      </button>

      <TablaEmpleados empleados={empleados} />
      <ModalEmpleado
        nuevoEmpleado={nuevoEmpleado}
        setNuevoEmpleado={setNuevoEmpleado}
        guardarEmpleado={guardarEmpleado}
      />
    </div>
  );
};

export default App;