import styles from './NavBar.module.css';
import ImgLogo from "../assets/logoI.png"
import Img from "../assets/fondo-campo-futbol-o-campo-futbol-balon-futbol-cancha-cesped-verde-crear-juego-futbol-ilustracion-ve-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const user = useSelector(state => state.user)
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img src={ImgLogo} alt="Logo izquierdo" className={styles.logo} />
                <span>Estadio Swiftkick</span>
            </div>
            <div className={styles.navItems}>
                <Link to='/'className={styles.navItem}><span >Home</span></Link>
                <Link to='/canchas'className={styles.navItem}><span >Canchas</span></Link>
                <Link to='/about'className={styles.navItem}><span >About</span></Link>
                {user && <Link to='/mis turnos'className={styles.navItem}> <span>Mis Turnos</span></Link>}
                {user && <Link to='/create'className={styles.navItem}> <span>Crear Turno</span></Link>}
                <img src={Img} alt="Logo derecho" className={styles.logo} />
            </div>
        </div>
    );
};

export default NavBar;