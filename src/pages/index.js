import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => {
  const [questionOne, setQuestionOne] = useState('');

  const handleChange = (event) => {
    setQuestionOne(event.target.value);
    window.alert("Event: " + event.target.value + " / Question: " + questionOne);
  };
  
  return (
    <Layout>
      <SEO title="Home" />
      <form class="usa-form usa-form--large padding-9" style={{paddingTop: '0'}}>
        <h1>Report a problem</h1>
        <p>Here's where we set expectations of what we will do with reports, and what folks can expect.</p>
        <fieldset class="usa-fieldset">
          <legend class="usa-legend usa-legend"><b>Question 1</b></legend>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-one-A"
              type="radio"
              name="question-one"
              checked={questionOne === 'A'}
              value="A"
              onChange={handleChange}
            />
            <label class="usa-radio__label" for="historical-truth"
              >Option A</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-one-B"
              type="radio"
              name="quesiton-one"
              checked={questionOne === 'B'}
              value="B"
              onChange={handleChange}
            />
            <label class="usa-radio__label" for="historical-douglass"
              >Option B</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-one-C"
              type="radio"
              name="question-one"
              checked={questionOne === 'C'}
              value="C"
              onChange={handleChange}
            />
            <label class="usa-radio__label" for="historical-washington"
              >Option C</label
            >
          </div>
        </fieldset>
        { questionOne === 'A' && 
          <div class="usa-form-group">
            <label class="usa-label" id="question-two-label" for="question-two"
              ><b>Question 2</b></label
            >
            <div class="usa-hint" id="question-two-hint">Prompt text</div>
            <textarea
              class="usa-textarea"
              id="question-two"
              name="question-two"
            ></textarea>
          </div>
        }
        { questionOne === 'B' && 
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Question 3</legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="question-three-A"
                type="checkbox"
                name="question-three"
                value="A"
                checked="checked"
              />
              <label class="usa-checkbox__label" for="question-three-A"
                >Option A</label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="quesiton-three-B"
                type="checkbox"
                name="quesiton-three"
                value="B"
              />
              <label class="usa-checkbox__label" for="question-three-B"
                >Option B</label
              >
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="quesiton-three-C"
                type="checkbox"
                name="question-three"
                value="C"
              />
              <label class="usa-checkbox__label" for="question-three-C"
                >Option C</label
              >
            </div>
          </fieldset>
        }
        <div style={{width: '100%', textAlign: 'right'}}>
          <button class="usa-button" type="button">Next</button>
        </div>
      </form>
    </Layout>
  );
};

export default IndexPage;
