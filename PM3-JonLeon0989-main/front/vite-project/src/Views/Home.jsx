import Carousel from "../Components/Carrusel/carrusel";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenidos a Estadio SwiftKick</h1>
      <span className={styles.span}>Somos una empresa dedicada al alquiler de canchas sinteticas para torneos profesionales como amateur con servicios de arbitraje y alquiler de implementos deportivos</span>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h2 className={styles.subtitle}>Reglas Para Las Canchas Sintéticas:</h2>
            <ul className={styles.ruleList}>
              <li>- No Goma de mascar</li>
              <li>- No Semillas de girasol</li>
              <li>- No Comida o bebidas dentro de la cancha</li>
              <li>- No metales</li>
            </ul>
          </div>
          <div className={styles.image}>
            <img
              src="https://www.shutterstock.com/image-photo/artificial-turf-soccer-field-600nw-297032888.jpg"
              alt="Imagen cancha Izquierda"
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div>
           < Carousel/>
          </div>
          <div className={styles.Subtext}>
            <p>Implementos que se pueden prestar o servicios:</p>
            <ul className={styles.List}>
              <li> -Guantes de Portero</li>
              <li> -Guayos dependiendo la talla</li>
              <li> -Rodilleras</li>
              <li> -Petos</li>
              <li> -Arbitraje</li>
              <li> -Cafeteria </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
