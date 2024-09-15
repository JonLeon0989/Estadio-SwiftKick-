import GetTurnos from "../Components/GetTurnos";
import styles from "./Turnos.module.css"
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado de Redux
import { Navigate } from 'react-router-dom';

const MisTurnos = () => {
  const user = useSelector(state => state.user); // Accede al estado del usuario desde Redux

  // Si no hay un usuario logueado, redirige a la página de inicio
  if (!user) {
    return <Navigate to="/" />;
  }

    return (
      <>
        <h1 className={styles.title}>Mis Turnos:</h1>
        <div className={styles.main}>
         <GetTurnos/>
        </div>
      </>
    );
};

export default MisTurnos;