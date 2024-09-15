import  { useEffect, useState } from "react";
import axios from "axios";
import Turno from "./Turno";
import { useSelector } from "react-redux"; 
import styles from "./GetTurnos.module.css"

const GetTurnos = () => {
  const user = useSelector(state => state.user); 
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    if (user) { 
      axios.get(`http://localhost:3000/users/${user.id}`) 
        .then(response => {
          setTurnos(response.data.appointments); 
        }).catch(error => {
          console.error("Error fetching turns:", error);
        });
    }
  }, [user]); 

  const handleCancelTurno = async (id) => {
    try {
      await axios.put("http://localhost:3000/appointments/cancel", { id });
      // Puedes agregar lógica adicional aquí si es necesario
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
      throw error; // Lanza el error para que pueda ser manejado en el componente Turno
    }
  };

  return (
    <>
      {turnos.length > 0 ? (
        turnos.map(turno => (
          <Turno key={turno.id} turno={turno} onCancelTurno={handleCancelTurno} />
        ))
      ) : (
        <p className={styles.mensaje}> No hay turnos agendados para este usuario.</p> 
      )}
    </>
  );
};

export default GetTurnos;