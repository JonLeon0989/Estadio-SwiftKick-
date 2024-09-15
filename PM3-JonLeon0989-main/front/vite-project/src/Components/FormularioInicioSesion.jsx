import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { validacionL } from '../Helpers/ValidacionesL'; 
import styles from './FormualarioInicioSesion.module.css';
import { Link, Navigate } from 'react-router-dom';
import image from '../assets/logoI.png'

const InicioSecionF = () => {
  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({ username: '', password: '' });
  const [errores, setErrores] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredenciales({ ...credenciales, [name]: value });

    const erroresValidacion = validacionL({ ...credenciales, [name]: value });
    setErrores({ ...errores, [name]: erroresValidacion[name] || '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const erroresValidacion = validacionL(credenciales);
    if (Object.keys(erroresValidacion).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/users/login', credenciales);
        const responseData = response.data;
        if (response.status === 200) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: responseData.user });
          alert(responseData.message || 'Inicio de sesión exitoso');
          setIsLoggedIn(true);
        } else {
          alert(responseData.message || 'Error al iniciar sesión');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('Usuario o contraseña incorrectos');
        } else {
          console.error('Error al enviar la solicitud:', error);
          alert('Datos de inicio de sesión incorrectos');
        }
      }
    } else {
      alert('Datos de inicio de sesión incorrectos');
      setErrores(erroresValidacion);
    }
  };

  if (isLoggedIn) {
    // Redirige al usuario a la página de appointments
    return <Navigate to="/mis turnos" />;
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label>Usuario:</label>
          <div className={styles.inputWithImage}>
            <input type="text" name="username" value={credenciales.username} onChange={handleChange} onBlur={handleChange} className={styles.input} autoComplete="username" />
            <img src={image} alt="User" className={styles.image} />
          </div>
          {errores.username && <p className={styles.error}>{errores.username}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label>Contraseña:</label>
          <div className={styles.inputWithImage}>
            <input type="password" name="password" value={credenciales.password} onChange={handleChange} onBlur={handleChange} className={styles.input} autoComplete="current-password" />
            <img src={image} alt="Password" className={styles.image} />
          </div>
          {errores.password && <p className={styles.error}>{errores.password}</p>}
        </div>
        <button type="submit" className={styles.button}>Iniciar sesión</button>
        <button> <Link to= "/register" type="button" className={styles.button}>Register</Link></button>
      </form>
    </div>
  );
};

export default InicioSecionF;
