import Cita from '../cita'
import './Listado.css'
const Listado = ({ citas, eliminarCita }) => {
  return (
    <div>
      <h2>ADMINISTRA TUS CITAS</h2>
      {citas.length === 0 ? (
        <p className="sin-citas">No hay citas registradas. Agregá una desde el formulario.</p>
      ) : (
        citas.map(cita => (
          <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  )
}
export default Listado