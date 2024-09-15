import styles from "./CanchasEstilos.module.css"
import { Link } from 'react-router-dom';


const CanchaFutbol5 = () => {
  return (
    <div className={styles.container}>
      <h2>Cancha Fútbol 5</h2>
      <div className={styles.imagen}>
        <img src="https://i.pinimg.com/564x/cb/fb/e5/cbfbe5e70b91f38d6fec0cad5b3c37f6.jpg" alt="Futbol5" />
      </div>
      <div className={styles.descripcion}>
        <p>Ven y disfruta de nuestra cancha futbol 5 donde podras compartir con amigos y familiares dale click al boton agendar cancha</p>
        <button> <Link to="/login" className={styles.button} > Agendar Cancha</Link></button>
      </div>
    </div>
  );
};

const OtroComponente = () => {
  return (
    <div className={styles.container}>
      <h2>Cancha Futbol 7</h2>
      <div className={styles.imagen}>
        <img src="https://i.pinimg.com/564x/16/9c/cd/169ccd0945c1c2b939a872da6bd99949.jpg" alt="Futbol7" />
      </div>
      <div className={styles.descripcion}>
        <p>Ven y disfruta de nuestra cancha futbol 7 donde podras compartir con amigos y familiares dale click al boton agendar cancha</p>
        <button> <Link to="/login" className={styles.button} > Agendar Cancha</Link></button>
      </div>
    </div>
  );
};

const TercerComponente = () => {
  return (
    <div className={styles.container}>
      <h2>Cancha Futbol 8</h2>
      <div className={styles.imagen}>
        <img src="https://i.pinimg.com/564x/92/bc/b0/92bcb0cc29b960440a4f5914818ae63e.jpg" alt="Futbol8" />
      </div>
      <div className={styles.descripcion}>
        <p>Ven y disfruta de nuestra cancha futbol 8 donde podras compartir con amigos y familiares dale click al boton agendar cancha</p>
        <button> <Link to="/login" className={styles.button} > Agendar Cancha</Link></button>
      </div>
    </div>
  );
};

export { CanchaFutbol5, OtroComponente, TercerComponente };
