import React, { useState, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { getGreyNicheCategories } from '../../services/apiService';
import CurrencyInput from '../../components/common/CurrencyInput';
import RadioGroup from '../../components/common/RadioGroup';
import GreyNichePricer from '../../components/common/GreyNichePricer';
import TextArea from '../../components/common/TextArea';

const CreateOfferForm = ({ register, control, errors }) => {
  const [activeTab, setActiveTab] = useState('normal');
  const [greyNicheCategories, setGreyNicheCategories] = useState([]);

  useEffect(() => {
    setGreyNicheCategories(getGreyNicheCategories());
  }, []);

  const watchSamePrice = useWatch({ control, name: 'samePriceForAll' });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'normal':
        return (
          <Row className="mt-4">
            <Col md={3}>
              <CurrencyInput
                label="Guest posting"
                name="guestPostingPrice"
                register={register}
                placeholder=""
                error={errors.guestPostingPrice}
              />
            </Col>
            <Col md={3}>
              <CurrencyInput
                label="Link Insertion"
                name="linkInsertionPrice"
                register={register}
                placeholder=""
                error={errors.linkInsertionPrice}
              />
            </Col>
          </Row>
        );
      case 'greyNiche':
        return (
          <div className="mt-4">
            <RadioGroup
              name="samePriceForAll"
              options={[{ value: 'yes', label: 'I offer same price for all grey niches' }]}
              register={register}
            />
            
            {watchSamePrice === 'yes' && (
              <Row>
                <Col md={3} className="mt-3">
                  <CurrencyInput label="Enter Price" name="greyNicheSamePrice" register={register} />
                </Col>
              </Row>
            )}
            
            <GreyNichePricer
              categories={greyNicheCategories}
              register={register}
              errors={errors}
              disabled={watchSamePrice === 'yes'}
              control={control}
            />
          </div>
        );
      case 'homepageLink':
        return (
          <div className="mt-4">
            <Row>
              <Col md={4}>
                <CurrencyInput
                  label="Price"
                  name="homepageLinkPrice"
                  register={register}
                  error={errors.homepageLinkPrice}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={8}>
                <TextArea
                  label="Offer Guidelines"
                  name="homepageLinkGuidelines"
                  register={register}
                  placeholder="Description"
                />
              </Col>
            </Row>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="form-container mt-4">
      <h2 className="mb-3">Create offer</h2>
        <Nav variant="tabs" className="offer-nav-tabs" defaultActiveKey="normal" onSelect={(k) => setActiveTab(k)}>
          <Nav.Item>
            <Nav.Link eventKey="normal">Normal offer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="greyNiche">Grey Niche offer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="homepageLink">Homepage link</Nav.Link>
          </Nav.Item>
        </Nav>

        {renderTabContent()}
    </Container>
  );
};

export default CreateOfferForm; 