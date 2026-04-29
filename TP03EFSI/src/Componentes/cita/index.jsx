import './Cita.css'
const Cita = ({ cita, eliminarCita }) => {
  const { id, mascota, propietario, fecha, hora, sintomas } = cita

  return (
    <div className="cita">
      <p><span className="campo">Mascota:</span> {mascota}</p>
      <p><span className="campo">Dueño:</span> {propietario}</p>
      <p><span className="campo">Fecha:</span> {fecha}</p>
      <p><span className="campo">Hora:</span> {hora}</p>
      <p><span className="campo">Síntomas:</span> {sintomas}</p>

      
      <button
        className="btn-eliminar"
        onClick={() => eliminarCita(id)}
      >
        Eliminar ×
      </button>
    </div>
  )
}

export default Cita