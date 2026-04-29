import { useState } from 'react'
import './App.css'
import Formulario from './Componentes/Formulario'
import Listado from './Componentes/Listado'

function App() {
  const [citas, setCitas] = useState([])
  const agregarCita = (nuevaCita) => {
    setCitas(citasActuales => [...citasActuales, nuevaCita])
  }
  const eliminarCita = (id) => {
    if (window.confirm('¿Estás seguro de que querés eliminar esta cita?')) {
      setCitas(citasActuales => citasActuales.filter(cita => cita.id !== id))
    }
  }
  return (
    <div>
      <div className="contenedor-app">
        <h2 className="titulo-principal">ADMINISTRADOR DE PACIENTES</h2>

        <div>
          <h2>CREAR MI CITA</h2>
          <Formulario agregarCita={agregarCita} />
        </div>

        <div>
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  )
}

export default App