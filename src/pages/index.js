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
  const [questionFourMonth, setQuestionFourMonth] = useState('');
  const [questionFourDay, setQuestionFourDay] = useState('');
  const [questionFourYear, setQuestionFourYear] = useState('');

  const handleQuestionOneChange = (event) => {
    setQuestionOne(event.target.value);
  };

  const handleQuestionThreeChange = (event) => {
    setQuestionThree({...questionThree, [event.target.value] : event.target.checked });
  };

  const handleNextClickScreen1 = (event) => {
    if (!questionOne || (questionOne === 'A' && !questionTwo)) {
      // Display an error
    }
  };
  
  return (
    <Layout>
      <SEO title="Home" />
      <form class="usa-form usa-form--large padding-9" style={{paddingTop: '0'}}>
        <h1>Report a problem</h1>
        <p>Here's where we set expectations of what we will do with reports, and what folks can expect.</p>
        <fieldset class="usa-fieldset">
          <legend class="usa-legend usa-legend"><b>Question 1<abbr title="required" class="usa-hint usa-hint--required">*</abbr></b></legend>
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
              ><b>Question 2<abbr title="required" class="usa-hint usa-hint--required">*</abbr></b></label
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
              <legend class="usa-legend"><b>Question 3</b> <span class="usa-hint">(optional)</span></legend>
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
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Question 4</legend>
            <span class="usa-hint" id="quesiton-four-hint">For example: January 19 2000</span>
            <div class="usa-memorable-date">
              <div class="usa-form-group usa-form-group--month usa-form-group--select">
                <label class="usa-label" for="question-four-month">Month</label>
                <select
                  class="usa-select"
                  id="question-four-month"
                  name="question-four-month"
                  aria-describedby="question-four-hint"
                  value={questionFourMonth}
                  onChange={e => setQuestionFourMonth(e.target.value)}
                >
                  <option value>- Select -</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="usa-form-group usa-form-group--day">
                <label class="usa-label" for="question-four-day">Day</label>
                <input
                  class="usa-input"
                  aria-describedby="question-four-hint"
                  id="question-four-day"
                  name="question-four-day"
                  maxlength="2"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  value={questionFourDay}
                  onChange={e => setQuestionFourDay(e.target.value)}
                />
              </div>
              <div class="usa-form-group usa-form-group--year">
                <label class="usa-label" for="question-four-year">Year</label>
                <input
                  class="usa-input"
                  aria-describedby="question-four-hint"
                  id="question-four-year"
                  name="question-four-year"
                  minlength="4"
                  maxlength="4"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  value={questionFourYear}
                  onChange={e => setQuestionFourYear(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
        }
        <div style={{width: '100%', textAlign: 'right'}}>
          <button class="usa-button" type="button" onClick={handleNextClickScreen1}>Next</button>
        </div>
      </form>
      <div
          class="usa-modal"
          id="example-modal-1"
          aria-labelledby="modal-1-heading"
          aria-describedby="modal-1-description"
        >
          <div class="usa-modal__content">
            <div class="usa-modal__main">
              <h2 class="usa-modal__heading" id="modal-1-heading">
                Missing information
              </h2>
              <div class="usa-prose">
                <p id="modal-1-description">
                  Please complete the required questions in order to continue.
                </p>
              </div>
              <div class="usa-modal__footer">
                <ul class="usa-button-group">
                  <li class="usa-button-group__item">
                    <button type="button" class="usa-button" data-close-modal>
                      Continue
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              class="usa-button usa-modal__close"
              aria-label="Close this window"
              data-close-modal
            >
              <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                <use xlink:href="/assets/img/sprite.svg#close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
