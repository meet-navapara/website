import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getCountries, getLanguages, getMainCategories } from '../../services/apiService';

import CustomSelect from '../../components/common/CustomSelect';
import InputText from '../../components/common/InputText';
import Checkbox from '../../components/common/Checkbox';
import TextArea from '../../components/common/TextArea';

const WebsiteDetailsForm = ({ register, control, errors }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      setCountryOptions(await getCountries());
      setLanguageOptions(getLanguages());
      setCategoryOptions(getMainCategories());
    };
    fetchOptions();
  }, []);

  return (
    <Container className="form-container">
      <h2 className="mb-4">Website detail</h2>
      <Row className="mb-4">
        <Col md={4}>
          <InputText
            label="Enter website"
            name="websiteUrl"
            register={register}
            rules={{ 
              required: 'Website URL is required',
              pattern: {
                value: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/,
                message: 'Enter a valid URL format (e.g., www.example.com)'
              }
            }}
            error={errors.websiteUrl}
            placeholder="Website URL"
          />
        </Col>
        <Col md={4}>
          <CustomSelect
            label="Website's Primary language"
            name="language"
            control={control}
            options={languageOptions}
            rules={{ required: 'Language is required' }}
          />
        </Col>
        <Col md={4}>
          <CustomSelect
            label="Your Majority of traffic comes from"
            name="country"
            control={control}
            options={countryOptions}
            rules={{ required: 'Country is required' }}
            isLoading={countryOptions.length === 0}
          />
        </Col>
      </Row>

      <h4 className="mb-3">Main Category</h4>
      <Row>
        {[...new Set(categoryOptions)].map((category, index) => (
          <Col md={2} key={category} className="mb-2">
            <Checkbox
              label={category}
              name={`categories.${category}`}
              register={register}
            />
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col>
          <TextArea
            label="Description of Website"
            name="description"
            register={register}
            rules={{ 
              required: 'Description is required',
              minLength: { value: 20, message: 'Description must be at least 20 characters' }
            }}
            error={errors.description}
            placeholder="Description"
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Checkbox
            label="I am the owner of the website"
            name="isOwner"
            register={register}
            rules={{ required: 'You must confirm ownership' }}
            error={errors.isOwner}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WebsiteDetailsForm; 