import React from 'react';
import Select, { components } from 'react-select';
import { Controller } from 'react-hook-form';
import './CustomSelect.css';

const { Option, SingleValue } = components;

const IconOption = (props) => (
  <Option {...props}>
    <img src={props.data.flag} alt={props.data.label} className="custom-select-flag" />
    {props.data.label}
  </Option>
);

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <img src={props.data.flag} alt={props.data.label} className="custom-select-flag" />
    {props.data.label}
  </SingleValue>
);

const CustomSelect = ({ label, name, control, rules, options, ...rest }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          components={{ Option: IconOption, SingleValue: IconSingleValue }}
          classNamePrefix="custom-select"
          {...rest}
        />
      )}
    />
  </div>
);

export default CustomSelect; 