const Cita = ({ nombre, dueño, fecha, hora, sintoma }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{nombre}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintoma}</span></p>
      <button className="button eliminar u-full-width">Eliminar ×</button>
    </div>
  );
};

export default Cita;