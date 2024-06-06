import React from "react";

const Buscador = ({ buscarColaborador }) => {
  const inputChange = (a) => {
    buscarColaborador(a.target.value);
  };

  return (
    <div className="buscador col-12 col-md-6 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Busca algún colaborador"
        onChange={inputChange}
      />
    </div>
  );
};

export default Buscador;
