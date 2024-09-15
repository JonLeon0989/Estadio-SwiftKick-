import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Home from "./Views/Home"
import MisTurnos from "./Views/Turnos"
import Canchas from "./Views/Canchas"
import About from "./Views/About"
import InicioDeSecion from "./Views/IncioSesion"
import Registro from "./Views/registro"
import TurnoF from "./Views/Turnocreado"

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/canchas" element = {<Canchas />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/mis turnos" element = {<MisTurnos/>}/>
      <Route path="/login" element = {<InicioDeSecion/>}/>
      <Route path="/register" element = {<Registro/>}/>
      <Route path="/create" element = {<TurnoF/>}/>
      </Routes>
      

     
    </>
  )
}

export default App
