import React from "react";

const Listado = ({ colaboradores, eliminarColaborador, buscarColaborador }) => {
  
  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 p-0">
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>N° Telefónico</th>
            <th>Acción</th>
          </tr>
        </thead>
        
        <tbody>
          {colaboradores.filter((colaborador) =>
              Object.values(colaborador).some((valor) =>
                valor.toLowerCase().includes(buscarColaborador.toLowerCase())
              )
            )
            .map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarColaborador(colaborador.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
