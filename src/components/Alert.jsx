import React from "react";

const Alert = ({ alertador }) => {
  
  const { texto, tipo, estado } = alertador;

  return (
<div className='alert-box col-12 col-lg-4'>
    <div className={`alert  ${estado ? tipo : 'display-none'} `}>
      <span>{texto}</span>
    </div>
</div>  )
};

export default Alert;
