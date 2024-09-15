const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Datos del usuario:', action.payload); // Agrega este console.log para verificar los datos del usuario
      // Actualiza el estado del usuario con los datos del payload
      return action.payload;
    default:
      // Si no se maneja la acción, devuelve el estado actual
      return state;
  }
};

export default userReducer;