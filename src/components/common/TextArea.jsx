import React from 'react';
import { Form } from 'react-bootstrap';
import './TextArea.css';

const TextArea = ({ label, name, register, rules, error, placeholder, className = '' }) => {
  const formControlClassName = `form-control-custom-textarea ${error ? 'is-invalid' : ''}`;

  return (
    <Form.Group controlId={name} className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={5}
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

export default TextArea; 