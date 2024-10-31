import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IntakePage = () => {
  const [questionWhatProduct, setQuestionWhatProduct] = useState('');
  const [questionProductPhotos, setQuestionProductPhotos] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState(new Map());
  const [questionFourMonth, setQuestionFourMonth] = useState('');
  const [questionFourDay, setQuestionFourDay] = useState('');
  const [questionFourYear, setQuestionFourYear] = useState('');

  const handleQuestionWhatProductChange = (event) => {
    setQuestionWhatProduct(event.target.value);
  };

  const handleQuestionThreeChange = (event) => {
    setQuestionThree({...questionThree, [event.target.value] : event.target.checked });
  };

  const handleNextClickScreen1 = (event) => {
    if (!questionWhatProduct || (questionWhatProduct === 'A' && !questionTwo)) {
      // Display an error
    }
  };
  
  return (
    <Layout>
      <SEO title="Home" />
      <form class="usa-form usa-form--large padding-9" style={{paddingTop: '0'}}>
        <h1>Report a problem</h1>
        <p>Required fields are marked with an asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>).</p>
        <fieldset class="usa-fieldset">
          <legend class="usa-legend usa-legend">What was the product?<abbr title="required" class="usa-hint usa-hint--required">*</abbr></legend>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-cosmetic"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'cosmetic'}
              value="cosmetic"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-cosmetic"
              >Cosmetic</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-drug-vaccine"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'drug-vaccine'}
              value="drug-vaccine"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-drug-vaccine"
              >Drug or Vaccine</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-dietary-supplement"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'dietary-supplement'}
              value="dietary-supplement"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-dietary-supplement"
              >Dietary Supplement</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-food"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'food'}
              value="food"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-food"
              >Food</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-medical-device"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'medical-device'}
              value="medical-device"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-medical-device"
              >Medical Device</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-x"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'x'}
              value="x"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-x"
              >[Product X]</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-tobacco"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'tobacco'}
              value="tobacco"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-tobacco"
              >Tobacco</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-vet"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'vet'}
              value="vet"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-vet"
              >Veterinary (Pet Food and Drugs)</label
            >
          </div>
          <div class="usa-radio">
            <input
              class="usa-radio__input"
              id="question-what-product-other"
              type="radio"
              name="question-what-product"
              checked={questionWhatProduct === 'other'}
              value="other"
              onChange={handleQuestionWhatProductChange}
            />
            <label class="usa-radio__label" for="question-what-product-other"
              >Other / Don't Know</label
            >
          </div>
        </fieldset>
        { questionWhatProduct === 'x' && 
          <div class="usa-form-group">
            <label class="usa-label" for="question-product-photos"
              >Product photos (optional)</label
            >
            <span class="usa-hint" id="quesiton-product-photos-hint-above">Include as many photos as possible, including the product, barcodes, packaging, and what was wrong.</span> 
            <span class="usa-hint" id="question-product-photos-hint"
              >Select one or more photos</span
            >
            <input
              id="question-product-photos"
              class="usa-file-input"
              type="file"
              name="question-product-photos"
              aria-describedby="question-product-photose-hint"
              multiple="multiple"
              accept="image/*"
              value={questionProductPhotos}
              onChange={e => setQuestionProductPhotos(e.target.value)}
            />
          </div>
        }
        { questionWhatProduct === 'A' && 
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
        { questionWhatProduct === 'B' && 
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
        { questionWhatProduct === 'D' && 
          <div class="usa-form-group">
            <fieldset class="usa-fieldset">
              <legend class="usa-legend"><b>Question 4</b></legend>
              <span class="usa-hint" id="quesiton-four-hint">For example: January 19 2000</span>
              <div class="usa-memorable-date">
                <div class="usa-form-group usa-form-group--month usa-form-group--select" style={{width: "8rem"}}>
                  <label class="usa-label" for="question-four-month">Month</label>
                  <select
                    class="usa-select"
                    id="question-four-month"
                    name="question-four-month"
                    aria-describedby="question-four-hint"
                    value={questionFourMonth}
                    onChange={e => setQuestionFourMonth(e.target.value)}
                    style={{width: "8rem"}}
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
          </div>
        }
        <div style={{width: '100%', textAlign: 'right'}}>
          <button class="usa-button" type="button" onClick={handleNextClickScreen1}>Next</button>
        </div>
      </form>
    </Layout>
  );
};

export default IntakePage;
