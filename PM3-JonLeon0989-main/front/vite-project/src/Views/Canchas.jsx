import { CanchaFutbol5, OtroComponente, TercerComponente } from "../Components/CanchasEstilos"
import styles from "./Canchas.module.css"

const Canchas = ()=>{
    return(
        <div className={styles.main}>
            <div>
                <CanchaFutbol5 />
            </div>
            <div>
                <OtroComponente />
            </div>
            <div>
                <TercerComponente />
            </div>
        </div>
    )
}

export default Canchas