import styles from "./About.module.css";
import myImage from "../assets/9ca58c96-839b-4d11-9738-8e07cce55b9d.png"; // Importa tu imagen

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nosotros</h1>
            <div className={styles.textContainer}>
                <img src={myImage} alt="Descripción de la imagen" className={styles.image} />
                <span className={styles.span}>Somos una empresa dedicada al alquiler de canchas sintéticas para torneos profesionales y amateur, con servicios de arbitraje y alquiler de implementos deportivos.</span>
            </div>
        </div>
    );
};

export default About;
