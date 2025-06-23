import React from 'react';
import Form from 'react-bootstrap/Form';
import './InputText.css';

const InputText = ({ label, name, register, rules, error, placeholder, type = 'text' }) => {
  // Combine Bootstrap's is-invalid with our custom class
  const formControlClassName = `form-control-custom ${error ? 'is-invalid' : ''}`;

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className={formControlClassName}
        {...register(name, rules)}
      />
      {error && (
        <div className="invalid-feedback-custom">
          {error.message}
        </div>
      )}
    </Form.Group>
  );
};

export default InputText; 