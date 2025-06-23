import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CurrencyInput from './CurrencyInput';
import './GreyNichePricer.css';

const GreyNichePricer = ({ categories, register, errors, disabled = false }) => (
  <div className={disabled ? 'grey-niche-pricer-disabled' : ''}>
    {/* This is a placeholder for a second row if needed, as per the design mockup */}
    {[0].map(row => (
      <Row key={row} className="grey-niche-row">
        {categories.map(category => (
          <Col md={4} key={category} className="grey-niche-category-col">
            <h5 className="grey-niche-category-title">{category}</h5>
            <CurrencyInput
              label="Price for Guest Posting"
              name={`greyNiche.${category}.guestPosting`}
              register={register}
              error={errors?.greyNiche?.[category]?.guestPosting}
              disabled={disabled}
            />
            <CurrencyInput
              label="Price for Link Insertion"
              name={`greyNiche.${category}.linkInsertion`}
              register={register}
              error={errors?.greyNiche?.[category]?.linkInsertion}
              disabled={disabled}
            />
          </Col>
        ))}
      </Row>
    ))}
  </div>
);

export default GreyNichePricer; 