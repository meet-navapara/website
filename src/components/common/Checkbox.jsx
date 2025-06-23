import React from 'react';
import './Checkbox.css'; // Using a new, dedicated CSS file

const Checkbox = ({ label, name, register, error, ...rest }) => {
  const inputId = name;
  
  return (
    <div className="checkbox-wrapper">
      <input
        id={inputId}
        type="checkbox"
        className="checkbox-input"
        {...register(name)}
        {...rest}
      />
      <label htmlFor={inputId} className="checkbox-label">
        <span className="checkbox-custom"></span>
        {label}
      </label>
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

export default Checkbox;