import { useState, useEffect } from 'react';
import axios from 'axios';
import { validarFormularioC } from '../Helpers/ValidacionDeTurnos';
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado del usuario
import styles from './FormularioDeTurnos.module.css';

const CrearTurnoForm = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [enviando, setEnviando] = useState(false);

  // Accede al estado del usuario logueado
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    setFecha(formattedToday);
  }, []);

  const handleFechaChange = (event) => {
    const nuevaFecha = event.target.value;
    setFecha(nuevaFecha);
    actualizarErrores('fecha', nuevaFecha, hora, descripcion);
  };

  const handleHoraChange = (event) => {
    const nuevaHora = event.target.value;
    setHora(nuevaHora);
    actualizarErrores('hora', fecha, nuevaHora, descripcion);
  };

  const handleDescripcionChange = (event) => {
    const nuevaDescripcion = event.target.value;
    setDescripcion(nuevaDescripcion);
    actualizarErrores('descripcion', fecha, hora, nuevaDescripcion);
  };

  const actualizarErrores = (campo, nuevaFecha, nuevaHora, nuevaDescripcion) => {
    const erroresValidacion = validarFormularioC(nuevaFecha, nuevaHora, nuevaDescripcion);
    setErrores(prevErrores => ({ ...prevErrores, [campo]: erroresValidacion[campo] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const erroresValidacion = validarFormularioC(fecha, hora, descripcion);

    if (Object.keys(erroresValidacion).length === 0) {
      setEnviando(true);

      try {
        const response = await axios.post('http://localhost:3000/appointments/schedule', { date: fecha, time: hora, description:descripcion, userId }); // Incluye userId en la solicitud
        if (response.status === 201) {
          console.log('Turno creado exitosamente');
          alert(response.data.message)
          setMensajeExito(response.data.message || 'Turno creado exitosamente');
          setFecha('');
          setHora('');
          setDescripcion('');
        } else {
          console.error('Error al crear el turno:', response.data.error);
          setMensajeError(response.data.error);
        }
      } catch (error) {
        console.error('Error al crear el turno:', error);
        setMensajeError('Error al crear el turno. Por favor, inténtalo de nuevo.');
      } finally {
        setEnviando(false);
      }
    } else {
      setMensajeError('');
    }
  };

  const desactivarBoton = Object.values(errores).some(error => error) || !fecha || !hora || !descripcion || enviando;

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label>Fecha:</label>
        <input type="date" value={fecha} min={fecha} onChange={handleFechaChange} />
        {errores.fecha && <p className={styles.error}>{errores.fecha}</p>}
      </div>
      <div className={styles.inputContainer}>
        <label>Hora:</label>
        <input type="time" value={hora} onChange={handleHoraChange} />
        {errores.hora && <p className={styles.error}>{errores.hora}</p>}
      </div>
      <div className={styles.inputContainer}>
        <label>Descripción:</label>
        <textarea value={descripcion} onChange={handleDescripcionChange} />
        {errores.descripcion && <p className={styles.error}>{errores.descripcion}</p>}
        <p>Su cancha aparecera en mis turnos</p>
      </div>
      {mensajeError && <p className={styles.error}>{mensajeError}</p>}
      {mensajeExito && <p className={styles.exito}>{mensajeExito}</p>}
      <button type="submit" disabled={desactivarBoton}>Crear Turno</button>
    </form>
  );
};

export default CrearTurnoForm;