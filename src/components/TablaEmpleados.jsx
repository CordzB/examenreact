import React from 'react';

const TablaEmpleados = ({ empleados }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-light">
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Dirección</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.nombre}</td>
            <td>{emp.dni}</td>
            <td>{emp.direccion}</td>
            <td>{emp.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEmpleados;