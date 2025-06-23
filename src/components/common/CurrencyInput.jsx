import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './CurrencyInput.css';

const CurrencyInput = ({ label, name, register, error, placeholder, disabled = false }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup className="currency-input-group">
        <InputGroup.Text className="currency-symbol">$</InputGroup.Text>
        <Form.Control
          type="number"
          step="0.01"
          placeholder={placeholder}
          className="currency-input-control"
          {...register(name)}
          disabled={disabled}
        />
      </InputGroup>
      {error && <Form.Text className="text-danger mt-1">{error.message}</Form.Text>}
    </Form.Group>
  );
};

export default CurrencyInput; 