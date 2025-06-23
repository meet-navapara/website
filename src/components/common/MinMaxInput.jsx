import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from './InputText'; // Reusing our existing component
import './MinMaxInput.css';

const MinMaxInput = ({ register, errors }) => (
  <Row className="min-max-wrapper align-items-center">
    <Col xs={5}>
      <InputText
        name="minWords"
        register={register}
        placeholder="Min"
        error={errors.minWords}
      />
    </Col>
    <Col xs={2} className="text-center min-max-separator">-</Col>
    <Col xs={5}>
      <InputText
        name="maxWords"
        register={register}
        placeholder="Max"
        error={errors.maxWords}
      />
    </Col>
  </Row>
);

export default MinMaxInput; 