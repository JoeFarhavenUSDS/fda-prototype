import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => {
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState(new Map());
  const [questionFour, setQuestionFour] = useState('');

  const handleQuestionOneChange = (event) => {
    setQuestionOne(event.target.value);
  };

  const handleQuestionThreeChange = (event) => {
    setQuestionThree({...questionThree, [event.target.value] : event.target.checked });
  }
  
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
              onChange={handleQuestionOneChange}
            />
            <label class="usa-radio__label" for="question-one-A"
              >Option A</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-one-B"
              type="radio"
              name="question-one"
              checked={questionOne === 'B'}
              value="B"
              onChange={handleQuestionOneChange}
            />
            <label class="usa-radio__label" for="question-one-B"
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
              onChange={handleQuestionOneChange}
            />
            <label class="usa-radio__label" for="question-one-C"
              >Option C</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-one-D"
              type="radio"
              name="question-one"
              checked={questionOne === 'D'}
              value="D"
              onChange={handleQuestionOneChange}
            />
            <label class="usa-radio__label" for="question-one-D"
              >Option D</label
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
              value={questionTwo}
              onChange={e => setQuestionTwo(e.target.value)}
            ></textarea>
          </div>
        }
        { questionOne === 'B' && 
          <div class="usa-form-group">
            <fieldset class="usa-fieldset">
              <legend class="usa-legend"><b>Question 3</b></legend>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="question-three-A"
                  type="checkbox"
                  name="question-three"
                  value="A"
                  checked={questionThree.get('A')}
                  onChange={handleQuestionThreeChange}
                />
                <label class="usa-checkbox__label" for="question-three-A"
                  >Option A</label>
              </div>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="question-three-B"
                  type="checkbox"
                  name="question-three"
                  value="B"
                  checked={questionThree.get('B')}
                  onChange={handleQuestionThreeChange}
                />
                <label class="usa-checkbox__label" for="question-three-B"
                  >Option B</label
                >
              </div>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="question-three-C"
                  type="checkbox"
                  name="question-three"
                  value="C"
                  checked={questionThree.get('C')}
                  onChange={handleQuestionThreeChange}
                />
                <label class="usa-checkbox__label" for="question-three-C"
                  >Option C</label
                >
              </div>
            </fieldset>
          </div>
        }
        { questionOne === 'D' && 
          <div class="usa-form-group">
            <label class="usa-label" id="question-four-label" for="question-four"
              ><b>Question 4</b></label
            >
            <div class="usa-hint" id="question-four-hint">Prompt text</div>
            <textarea
              class="usa-textarea"
              id="question-four"
              name="question-four"
              value={questionFour}
              onChange={e => setQuestionFour(e.target.value)}
            ></textarea>
          </div>
        }
        <div style={{width: '100%', textAlign: 'right'}}>
          <button class="usa-button" type="button" disabled={!questionOne || (questionOne === 'A' && !questionTwo)}>Next</button>
        </div>
      </form>
    </Layout>
  );
};

export default IndexPage;
