
const Cita = ({ nomMascota, dueñoMascota, fecha, hora, sintomaMascota }) => {

  return (

   <div class="cita">
              <p>Mascota: <span>{nomMascota}</span></p>
              <p>Dueño: <span>{dueñoMascota}</span></p>
              <p>Fecha: <span>{fecha}</span></p>
              <p>Hora: <span>{hora}</span></p>
              <p>Sintomas: <span>{sintomaMascota}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
  );
};

export default Cita;