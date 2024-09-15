export const validateData = (formData) => {
    let errors = {};
  
    // Validaciones
    if (!formData.name.trim()) {
      errors.name = 'Este campo es requerido';
    } else if (typeof formData.name !== 'string') {
      errors.name = 'Debe ser un texto';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = 'Solo se permiten letras y espacios en este campo';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Este campo es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Formato de email inválido';
    }
  
    if (!formData.birthdate.trim()) {
      errors.birthdate = 'Este campo es requerido';
    } else if (isNaN(Date.parse(formData.birthdate))) {
      errors.birthdate = 'Formato de fecha inválido';
    }
  
    if (!formData.dni_number.trim()) {
      errors.dni_number = 'Este campo es requerido';
    } else if (isNaN(formData.dni_number)) {
      errors.dni_number = 'Debe ser un número';
    }
  
    if (!formData.username.trim()) {
      errors.username = 'Este campo es requerido';
    } else if (typeof formData.username !== 'string') {
      errors.username = 'Debe ser un texto';
    }
  
    if (!formData.password.trim()) {
      errors.password = 'Este campo es requerido';
    } else if (formData.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
  
    return errors;
  };