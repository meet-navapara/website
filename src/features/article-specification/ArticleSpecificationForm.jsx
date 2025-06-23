import React, { useState, useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { Row, Col } from 'react-bootstrap';
import { getArticleSpecificationOptions } from '../../services/apiService';
import RadioGroup from '../../components/common/RadioGroup';
import TextArea from '../../components/common/TextArea';
import MinMaxInput from '../../components/common/MinMaxInput';
import './ArticleSpecificationForm.css';

const ArticleSpecificationForm = ({ register, control, errors }) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(getArticleSpecificationOptions());
  }, []);

  const watchNumberOfWords = useWatch({ control, name: 'numberOfWords' });
  const watchAdvertiserLinks = useWatch({ control, name: 'advertiserLinks' });

  return (
    <div className="article-spec-card">
      <h2 className="article-spec-title">Article specification</h2>
      <Row>
        {/* Left Column */}
        <Col md={6} className="article-spec-col">
          {options.writingIncluded && (
            <RadioGroup
              label="Is writing of an article included in the offer?"
              name="writingIncluded"
              options={options.writingIncluded}
              register={register}
              rules={{ required: 'This field is required' }}
              error={errors.writingIncluded}
            />
          )}
          {options.numberOfWords && (
            <RadioGroup
              label="Number of words in the article"
              name="numberOfWords"
              options={options.numberOfWords}
              register={register}
            />
          )}
          {watchNumberOfWords === 'limited' && <MinMaxInput register={register} errors={errors} control={control} />}
          {options.dofollowLinks && (
            <RadioGroup
              label="I allow DOFOLLOW links in the article"
              name="dofollowLinks"
              options={options.dofollowLinks}
              register={register}
              className="mt-4"
            />
          )}
          {options.linkTypes && (
            <RadioGroup
              label="Type of links allowed:"
              name="linkTypes"
              options={options.linkTypes}
              register={register}
              className="mt-4"
            />
          )}
        </Col>
        {/* Right Column */}
        <Col md={6} className="article-spec-col">
          {options.taggingPolicy && (
            <RadioGroup
              label="Tagging articles policy:"
              name="taggingPolicy"
              options={options.taggingPolicy}
              register={register}
            />
          )}
          {options.advertiserLinks && (
            <RadioGroup
              label="A number of links to the advertiser in the article:"
              name="advertiserLinks"
              options={options.advertiserLinks}
              register={register}
              className="mt-4"
            />
          )}
          {watchAdvertiserLinks === 'max_number' && <MinMaxInput register={register} errors={errors} control={control} />}
          {options.otherLinks && (
            <RadioGroup
              label="Other links in the article:"
              name="otherLinks"
              options={options.otherLinks}
              register={register}
              className="mt-4"
            />
          )}
          <TextArea
            label="Other content rules/specifications:"
            name="otherRules"
            register={register}
            placeholder="Description"
            className="mt-4"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ArticleSpecificationForm; 