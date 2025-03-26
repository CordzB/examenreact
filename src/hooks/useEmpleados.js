import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const API = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

export const useEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: '',
    dni: '',
    direccion: '',
    email: ''
  });

  const obtenerEmpleados = async () => {
    try {
      const res = await axios.get(API);
      setEmpleados(res.data);
    } catch (error) {
      Swal.fire('Error al obtener empleados', '', 'error');
    }
  };

  const guardarEmpleado = async () => {
    try {
      await axios.post(API, nuevoEmpleado);
      Swal.fire('Empleado guardado con éxito', '', 'success');
      setNuevoEmpleado({ nombre: '', dni: '', direccion: '', email: '' });
      document.querySelector('#modalEmpleado .btn-close').click();
      obtenerEmpleados();
    } catch (error) {
      Swal.fire('Error al guardar empleado', '', 'error');
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return {
    empleados,
    nuevoEmpleado,
    setNuevoEmpleado,
    guardarEmpleado
  };
};