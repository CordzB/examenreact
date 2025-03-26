import React from 'react';

const Entrada = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        input
      />
    </div>
  );
};

export default Entrada;