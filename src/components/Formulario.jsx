import React, { useState } from "react";
import Alert from "./Alert";

const Formulario = ({ agregarColaborador, mensajeAlert, tipoAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarAlertaExito, setMostrarAlertaExito] = useState(false);

  const manejoCambios = (a) => {
    const { name, value } = a.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  const manejoEnvios = (a) => {
    a.preventDefault();
    if (
      !validarCorreo(colaborador.correo) ||
      !validarTelefono(colaborador.telefono) ||
      !validarEdad(colaborador.edad)
    ) {
      setMostrarAlerta(true);
      setMostrarAlertaExito(false);
    } else {
      agregarColaborador(colaborador);
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setMostrarAlerta(false);
      setMostrarAlertaExito(true);
    }
  };
  const validarCorreo = (correo) => {
    const regexCorreo = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regexCorreo.test(correo);
  };
  const validarTelefono = (telefono) => {
    const regexTelefono = /^\d{9}$/;
    return regexTelefono.test(telefono);
  };
  const validarEdad = (edad) => {
    const edadNumero = parseInt(edad, 10);
    return !isNaN(edadNumero) && edadNumero >= 18 && edadNumero <= 100;
  };

  return (
    <div className="form col-12 col-lg-4">
      <form onSubmit={manejoEnvios} noValidate>
        <div className="form-group">
          <h3>Agregar Colaborador</h3>
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={colaborador.nombre}
            onChange={manejoCambios}
          />
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            className={`form-control ${
              mostrarAlerta && !validarCorreo(colaborador.correo)
                ? "is-invalid"
                : ""
            }`}
            name="correo"
            value={colaborador.correo}
            onChange={manejoCambios}
          />
          {mostrarAlerta && !validarCorreo(colaborador.correo) && (
            <Alert mensaje="Por favor ingrese un correo válido" tipo="danger" />
          )}
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            className={`form-control ${
              mostrarAlerta && !validarEdad(colaborador.edad)
                ? "is-invalid"
                : ""
            }`}
            name="edad"
            value={colaborador.edad}
            onChange={manejoCambios}
          />
          {mostrarAlerta && !validarEdad(colaborador.edad) && (
            <Alert
              mensaje="Por favor ingrese una edad válida (Mayor a 18 años)"
              tipo="danger"
            />
          )}
        </div>
        <div className="form-group">
          <label>Cargo:</label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={colaborador.cargo}
            onChange={manejoCambios}
          />
        </div>
        <div className="form-group">
          <label>N° Telefónico:</label>
          <input
            type="tel"
            className={`form-control ${
              mostrarAlerta && !validarTelefono(colaborador.telefono)
                ? "is-invalid"
                : ""
            }`}
            name="telefono"
            value={colaborador.telefono}
            onChange={manejoCambios}
          />
          {mostrarAlerta && !validarTelefono(colaborador.telefono) && (
            <Alert
              mensaje="Por favor ingrese un teléfono de 9 dígitos"
              tipo="danger"
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
      {mostrarAlerta && (
        <Alert
          mensaje="Por favor complete todos los campos correctamente"
          tipo="danger"
        />
      )}
      {mostrarAlertaExito && (
        <Alert
          mensaje="El colaborador se ha agregado con éxito"
          tipo="success"
        />
      )}
    </div>
  );
};

export default Formulario;
