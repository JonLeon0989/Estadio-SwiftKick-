export const validacionL = (credenciales) => {
    const errores = {};
  
    if (!credenciales.username.trim()) {
      errores.username = 'El usuario es requerido';
    } else if (typeof credenciales.username !== 'string') {
      errores.username = 'El usuario debe ser un string';
    }
  
    if (!credenciales.password.trim()) {
      errores.password = 'La contraseña es requerida';
    } else if (typeof credenciales.password !== 'string') {
      errores.password = 'La contraseña debe ser un string';
    }
  
    return errores;
  };