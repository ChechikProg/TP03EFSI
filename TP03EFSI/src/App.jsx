import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Componentes/Formulario'
import Listado from './Componentes/Listado'

function App() {
  return (
    <div>
      <div className="contenedor-app">
        <h2 className="titulo-principal">ADMINISTRADOR DE PACIENTES</h2>

        <div>
          <h2>CREAR MI CITA</h2>
          <Formulario />
        </div>

        <div>
          <Listado />
        </div>
      </div>
    </div>
  )
}
export default App
