import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { getLanguages } from '../services/apiService';

import WebsiteDetailsForm from '../features/website-details/WebsiteDetailsForm.jsx';
import CreateOfferForm from '../features/offer-details/CreateOfferForm.jsx';
import ArticleSpecificationForm from '../features/article-specification/ArticleSpecificationForm.jsx';
import { updateWebsite } from '../store/slices/websitesSlice';
import PreconditionsBar from '../features/website-details/PreconditionsBar.jsx';

const EditWebsitePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [languageOptions, setLanguageOptions] = useState([]);
  const websiteToEdit = useSelector((state) =>
    state.websites.list.find((w) => w.id === parseInt(id, 10))
  );
  const [conditionsAccepted, setConditionsAccepted] = useState(false);

  useEffect(() => {
    setLanguageOptions(getLanguages());
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (websiteToEdit) {
      const languageOption = languageOptions.find(l => l.label === (websiteToEdit.language?.label || websiteToEdit.language)) || null;
      reset({ ...websiteToEdit, language: languageOption });
      setConditionsAccepted(!!websiteToEdit.conditionsAccepted);
    }
  }, [websiteToEdit, reset, languageOptions]);

  const onSubmit = (data) => {
    const payload = { ...data, language: data.language, conditionsAccepted };
    dispatch(updateWebsite({ id: parseInt(id, 10), ...payload }));
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
              Update Website
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditWebsitePage; 