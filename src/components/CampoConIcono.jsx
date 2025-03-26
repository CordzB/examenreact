import React from 'react';

const CampoConIcono = ({ label, name, type, icono, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <div className="input-group">
      <span className="input-group-text">
        <i className={`fas ${icono}`}></i>
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  </div>
);

export default CampoConIcono;
