import  { useState } from 'react';
import axios from 'axios';
import { validateData } from '../Helpers/Validaciones';
import styles from './FormularioRegistro.module.css'; 
import { Link } from 'react-router-dom';

const RegistroF = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    dni_number: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validaciones
    const newErrors = validateData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: newErrors[name], 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateData(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/users/register', formData);
        alert(response.data.message); 
      } catch (error) {
        alert(error.response.data.message);
        
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.'); // Mensaje de error genérico
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.birthdate && <span className={styles.errorMessage}>{errors.birthdate}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dni_number">DNI Number:</label>
          <input
            type="text"
            id="dni_number"
            name="dni_number"
            value={formData.dni_number}
            onChange={handleChange}
            className={styles.formInput}
            inputMode="numeric" // Solo permite ingresar números
          />
          {errors.dni_number && <span className={styles.errorMessage}>{errors.dni_number}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
        </div>
        <button type="submit" className={styles.registerButton}>Register</button>
      </form>
      <button ><Link to="/login" className={styles.loginButton}>Login </Link></button>
    </div>
  );
};

export default RegistroF;