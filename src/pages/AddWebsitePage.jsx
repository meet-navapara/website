import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import WebsiteDetailsForm from '../features/website-details/WebsiteDetailsForm.jsx';
import CreateOfferForm from '../features/offer-details/CreateOfferForm.jsx';
import ArticleSpecificationForm from '../features/article-specification/ArticleSpecificationForm.jsx';
import PreconditionsBar from '../features/website-details/PreconditionsBar.jsx';
import { addWebsite, updateWebsite } from '../store/slices/websitesSlice';
import { getLanguages } from '../services/apiService';
import './AddWebsitePage.css';

const AddWebsitePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = id !== undefined;
  
  const [languageOptions, setLanguageOptions] = useState([]);
  const [conditionsAccepted, setConditionsAccepted] = useState(false);

  useEffect(() => {
    setLanguageOptions(getLanguages());
  }, []);

  const websiteToEdit = null; // Not used in Add

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    reset({
      websiteUrl: '',
      language: null,
      country: null,
      categories: {},
      description: '',
      isOwner: false,
      guestPostingPrice: '',
      linkInsertionPrice: '',
      samePriceForAll: null,
      greyNiche: {},
      homepageLinkPrice: '',
      homepageLinkGuidelines: '',
      writingIncluded: null,
      numberOfWords: null,
      minWords: '',
      maxWords: '',
      dofollowLinks: null,
      linkTypes: null,
      taggingPolicy: null,
      advertiserLinks: null,
      otherLinks: null,
      otherRules: '',
    });
  }, [reset]);

  const onSubmit = (data) => {
    dispatch(addWebsite({ ...data, conditionsAccepted }));
    navigate('/');
  };

  return (
    <Container className="add-website-page">
      <div className="form-card-container">
        <PreconditionsBar conditionsAccepted={conditionsAccepted} setConditionsAccepted={setConditionsAccepted} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <WebsiteDetailsForm register={register} control={control} errors={errors} />
          <CreateOfferForm register={register} control={control} errors={errors} />
          <ArticleSpecificationForm register={register} control={control} errors={errors} />
          <div className="text-center my-4">
            <Button type="submit" variant="primary" size="lg">
              {isEditMode ? 'Update Website' : 'Submit Website'}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddWebsitePage; 