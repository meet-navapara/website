import React from 'react';
import './RadioGroup.css'; // Using a new, dedicated CSS file

const RadioGroup = ({ label, name, options, register, error, className = '' }) => (
  <fieldset className={`radiogroup-fieldset ${className}`}>
    <legend className="radiogroup-legend">{label}</legend>
    <div className="radiogroup-options-wrapper">
      {options.map((option) => (
        <div key={option.value} className="radio-wrapper">
          <input
            id={`${name}-${option.value}`}
            type="radio"
            value={option.value}
            className="radio-input"
            {...register(name)}
          />
          <label htmlFor={`${name}-${option.value}`} className="radio-label">
            <span className="radio-custom"></span>
            {option.label}
          </label>
        </div>
      ))}
    </div>
    {error && <span className="text-danger">{error.message}</span>}
  </fieldset>
);

export default RadioGroup; 