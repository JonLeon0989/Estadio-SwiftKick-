import  { useState } from "react";
import styles from "./Turno.module.css";

const Turno = ({ turno: { id, description, date, time, status }, onCancelTurno }) => {
  const [cancelado, setCancelado] = useState(false);

  const handleCancelTurno = async () => {
    try {
      await onCancelTurno(id);
      setCancelado(true);
      alert("Turno cancelado exitosamente");
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2 className={styles.description}>{description}</h2>
        <p className={styles.description}>Fecha: {date}</p>
        <p className={styles.description}>Hora: {time}</p>
        <p className={styles.description}>
          Estado: <span className={cancelado ? styles.cancelledState : (status === 'ACTIVE' ? styles.activeState : styles.cancelledState)}>{cancelado ? 'CANCELLED' : status}</span>
        </p>
        {status === 'ACTIVE' && !cancelado && ( // Solo muestra el botón de cancelar si el estado es 'ACTIVE' y no se ha cancelado aún
          <button className={styles.cancelButton} onClick={handleCancelTurno}>
            Cancelar Turno
          </button>
        )}
      </div>
    </div>
  );
};

export default Turno;