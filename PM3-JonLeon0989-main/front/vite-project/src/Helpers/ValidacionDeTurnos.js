export const validarFormularioC = (fecha, hora, descripcion) => {
    const errores = {};
  
    if (!fecha) {
      errores.fecha = 'La fecha es requerida';
    } else {
      const today = new Date();
      const selectedDate = new Date(fecha);
      if (selectedDate < today) {
        errores.fecha = 'La fecha debe ser posterior a hoy';
      }
    }
  
    if (!hora) {
      errores.hora = 'La hora es requerida';
    } else {
      const hour = parseInt(hora.split(':')[0]);
      if (hour < 9 || hour >= 20) {
        errores.hora = 'La hora debe estar entre las 7:00 y las 11:59';
      }
    }
  
    if (!descripcion) {
      errores.descripcion = 'La descripción es requerida';
    }
  
    return errores;
  };