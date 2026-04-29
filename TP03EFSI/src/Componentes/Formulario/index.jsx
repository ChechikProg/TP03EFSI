
import { useState } from 'react'
import './Formulario.css'
const Formulario = ({ agregarCita }) => {
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([mascota, propietario, fecha, hora, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)
    const nuevaCita = {
      id: Date.now(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    }
    agregarCita(nuevaCita)
    setMascota('')
    setPropietario('')
    setFecha('')
    setHora('')
    setSintomas('')
  }

  return (
    <div>
      {error && (
        <div className="alerta-error">Todos los campos son obligatorios</div>
      )}

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          placeholder="Nombre dueño de la mascota"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Síntomas</label>
        <textarea
          placeholder="Describa los síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  )
}

export default Formulario