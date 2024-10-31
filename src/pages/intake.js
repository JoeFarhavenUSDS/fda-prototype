import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IntakePage = () => {
  const [questionWhatProduct, setQuestionWhatProduct] = useState('');
  const [questionProductPhotos, setQuestionProductPhotos] = useState('');
  const [questionProductName, setQuestionProductName] = useState('');
  const [questionWhatHappened, setQuestionWhatHappened] = useState('');
  const [whatHappenedCharactersRemaining, setWhatHappenedCharactersRemaining] = useState(4000);
  const [questionWhere, setQuestionWhere] = useState('');
  const [questionCanContact, setQuestionCanContact] = useState('');
  const [questionFirstName, setQuestionFirstName] = useState('');
  const [questionLastName, setQuestionLastName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [questionAgeNumber, setQuestionAgeNumber] = useState('');
  const [questionAgeUnit, setQuestionAgeUnit] = useState('years');
  const [questionGender, setQuestionGender] = useState(new Map());
  const [questionGenderOther, setQuestionGenderOther] = useState('');
  const [questionWhenMonth, setQuestionWhenMonth] = useState('');
  const [questionWhenDay, setQuestionWhenDay] = useState('');
  const [questionWhenYear, setQuestionWhenYear] = useState('');

  const handleQuestionWhatProductChange = (event) => {
    setQuestionWhatProduct(event.target.value);
  };

  const handleQuestionGenderChange = (event) => {
    questionGender.set(event.target.value, event.target.checked);
    setQuestionGender(questionGender);
  };

  const handleNextClickScreen1 = (event) => {
    if (!questionWhatProduct) {
      // Display an error
    }
  };

  const handleQuestionWhatHappenedChange = (event) => {
    let whatHappened = event.target.value;
    let whatHappenedLength = whatHappened ? whatHappened.length : 0;

    setQuestionWhatHappened(whatHappened);
    setWhatHappenedCharactersRemaining(4000 - whatHappenedLength);
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
          <div>
            <div class="usa-form-group">
              <label class="usa-label" id="quesiton-product-photos-label" for="question-product-photos"
                >Product photos (optional)</label
              >
              <span class="usa-hint" id="quesiton-product-photos-hint-above">Include as many photos as possible, including the product, barcodes, packaging, and what was wrong. </span> 
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
            <div class="usa-form-group">
              <label class="usa-label" id="question-product-name-label" for="question-product-name"
                >Product name<abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
              >
              <div class="usa-hint" id="question-product-name-hint">Include as much detail as possible, including the brand</div>
              <input 
                  class="usa-input" 
                  style={{width: '100%'}} 
                  id="question-product-name" 
                  name="question-product-name"
                  value={questionProductName}
                  onChange={e => setQuestionProductName(e.target.value)}
              />
            </div>
            <div class="usa-form-group">
              <label class="usa-label" id="question-what-happened-label" for="question-what-happened"
                >What happened?<abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
              >
              <div class="usa-hint" id="question-what-happened-hint">Include what happened, who was involved, and any actions you took.</div>
              <div class="usa-hint" id="question-what-happened-characters-remaining">{whatHappenedCharactersRemaining} characters remaining</div>
              <textarea
                class="usa-textarea"
                id="question-what-happened"
                name="question-what-happened"
                value={questionWhatHappened}
                onChange={handleQuestionWhatHappenedChange}
              ></textarea>
            </div>
            <div class="usa-form-group">
              <fieldset class="usa-fieldset">
                <legend class="usa-legend">When did this happen?<abbr title="required" class="usa-hint usa-hint--required">*</abbr></legend>
                <span class="usa-hint" id="quesiton-when-hint">If you don’t know, give an approximate date.</span>
                <div class="usa-memorable-date">
                  <div class="usa-form-group usa-form-group--month usa-form-group--select" style={{width: "8rem"}}>
                    <label class="usa-label" for="question-when-month">Month</label>
                    <select
                      class="usa-select"
                      id="question-when-month"
                      name="question-when-month"
                      aria-describedby="question-when-hint"
                      value={questionWhenMonth}
                      onChange={e => setQuestionWhenMonth(e.target.value)}
                      style={{width: "8rem"}}
                    >
                      <option value>State</option>
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
                    <label class="usa-label" for="question-when-day">Day</label>
                    <input
                      class="usa-input"
                      aria-describedby="question-when-hint"
                      id="question-when-day"
                      name="question-when-day"
                      maxlength="2"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      value={questionWhenDay}
                      onChange={e => setQuestionWhenDay(e.target.value)}
                    />
                  </div>
                  <div class="usa-form-group usa-form-group--year">
                    <label class="usa-label" for="question-when-year">Year</label>
                    <input
                      class="usa-input"
                      aria-describedby="question-when-hint"
                      id="question-when-year"
                      name="question-when-year"
                      minlength="4"
                      maxlength="4"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      value={questionWhenYear}
                      onChange={e => setQuestionWhenYear(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="usa-form-group">
              <label class="usa-label" id="question-where-label" for="question-where"
                >Where did you buy the product?<abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
              >
              <div class="usa-hint" id="question-where-hint">Include as much detail as possible, including the brand</div>
              <select 
                    class="usa-select" 
                    name="options" 
                    id="options"
                    style={{width: '100%'}} 
                    id="question-where" 
                    name="question-where"
                    value={questionWhere}
                    onChange={e => setQuestionWhere(e.target.value)}
              >
                <option value>- Select -</option>
              	<option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
                <option value="AS">American Samoa</option>
                <option value="GU">Guam</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="PR">Puerto Rico</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="VI">Virgin Islands</option>
              </select>
            </div>
            <div class="usa-form-group">
              <fieldset class="usa-fieldset">
                <legend class="usa-legend usa-legend">Can we contact you with any follow up questions? (optional)</legend>
                <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="question-can-contact-yes"
                    type="radio"
                    name="question-can-contact"
                    checked={questionCanContact === 'yes'}
                    value="yes"
                    onChange={e => setQuestionCanContact(e.target.value)}
                  />
                  <label class="usa-radio__label" for="question-can-contact-yes"
                    >Yes</label
                  >
                </div>
                <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="question-can-contact-no"
                    type="radio"
                    name="question-can-contact"
                    checked={questionCanContact === 'no'}
                    value="no"
                    onChange={e => setQuestionCanContact(e.target.value)}
                  />
                  <label class="usa-radio__label" for="question-can-contact-no"
                    >No</label
                  >
                </div>
              </fieldset>
            </div>
            { questionCanContact === 'yes' && 
              <div>
                <div class="usa-form-group">
                  <label class="usa-label" id="question-first-name-label" for="question-first-name"
                    >First or given name (optional)</label
                  >
                  <div class="usa-hint" id="question-first-name-hint">For example, Jose, Darren, or Mai</div>
                  <input 
                      class="usa-input" 
                      style={{width: '100%'}} 
                      id="question-first-name" 
                      name="question-first-name"
                      value={questionFirstName}
                      onChange={e => setQuestionFirstName(e.target.value)}
                  />
                </div>
                <div class="usa-form-group">
                  <label class="usa-label" id="question-last-name-label" for="question-last-name"
                    >Last or family name (optional)</label
                  >
                  <div class="usa-hint" id="question-last-name-hint">For example, Martinez Gonzalez, Gu, or Smith</div>
                  <input 
                      class="usa-input" 
                      style={{width: '100%'}} 
                      id="question-last-name" 
                      name="question-last-name"
                      value={questionLastName}
                      onChange={e => setQuestionLastName(e.target.value)}
                  />
                </div>
                <div class="usa-form-group">
                  <label class="usa-label" id="question-email-label" for="question-email"
                    >Email<abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
                  >
                  <div class="usa-hint" id="question-email-hint">For example, name@domain.com</div>
                  <input 
                      class="usa-input" 
                      style={{width: '100%'}} 
                      id="question-email" 
                      name="question-email"
                      value={questionEmail}
                      onChange={e => setQuestionEmail(e.target.value)}
                  />
                </div>
              </div>
            }
            <div class="usa-form-group">
              <div>Tell us more about who was harmed (optional)</div>
              <div class="usa-hint">We use this information to track long-term trends of product use and problems.</div>
            </div>
            <div class="usa-form-group">
              <fieldset class="usa-fieldset">
                <legend class="usa-legend">Age (optional)</legend>
                <span class="usa-hint" id="quesiton-age-hint">If you don’t know, give an approximate age.</span>
                <div class="usa-memorable-date">
                  <div class="usa-form-group usa-form-group--day">
                    <input
                      class="usa-input"
                      aria-describedby="question-age-hint"
                      id="question-age-number"
                      name="question-age-number"
                      maxlength="2"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      value={questionAgeNumber}
                      onChange={e => setQuestionAgeNumber(e.target.value)}
                    />
                  </div>
                  <div class="usa-form-group usa-form-group--month usa-form-group--select" style={{width: "6rem"}}>
                    <select
                      class="usa-select"
                      id="question-age-unit"
                      name="question-age-unit"
                      aria-describedby="question-age-hint"
                      value={questionAgeUnit}
                      onChange={e => setQuestionAgeUnit(e.target.value)}
                      style={{width: "6rem"}}
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="usa-form-group">
              <fieldset class="usa-fieldset">
                <legend class="usa-legend">Gender (optional)</legend>
                <span class="usa-hint" id="quesiton-gender-hint">Select all that apply</span>
                <div class="usa-checkbox">
                  <input
                    class="usa-checkbox__input usa-checkbox__input--tile"
                    id="question-gender-female"
                    type="checkbox"
                    name="question-gender"
                    value="female"
                    checked={questionGender.get('female')}
                    onChange={handleQuestionGenderChange}
                  />
                  <label class="usa-checkbox__label" for="question-gender-female"
                    >Female</label>
                </div>
                <div class="usa-checkbox">
                  <input
                    class="usa-checkbox__input usa-checkbox__input--tile"
                    id="question-gender-male"
                    type="checkbox"
                    name="question-gender"
                    value="male"
                    checked={questionGender.get('male')}
                    onChange={handleQuestionGenderChange}
                  />
                  <label class="usa-checkbox__label" for="question-gender-male"
                    >Male</label
                  >
                </div>
                <div class="usa-checkbox">
                  <input
                    class="usa-checkbox__input usa-checkbox__input--tile"
                    id="question-gender-trans"
                    type="checkbox"
                    name="question-gender"
                    value="trans"
                    checked={questionGender.get('trans')}
                    onChange={handleQuestionGenderChange}
                  />
                  <label class="usa-checkbox__label" for="question-gender-trans"
                    >Transgender</label
                  >
                </div>
                <div class="usa-checkbox">
                  <input
                    class="usa-checkbox__input usa-checkbox__input--tile"
                    id="question-gender-other"
                    type="checkbox"
                    name="question-gender"
                    value="other"
                    checked={questionGender.get('other')}
                    onChange={handleQuestionGenderChange}
                  />
                  <label class="usa-checkbox__label" for="question-gender-other"
                    >Another gender (specify)</label
                  >
                </div>
                <div class="usa-checkbox">
                  <input
                    class="usa-checkbox__input usa-checkbox__input--tile"
                    id="question-gender-not-specified"
                    type="checkbox"
                    name="question-gender"
                    value="not-specified"
                    checked={questionGender.get('not-specified')}
                    onChange={handleQuestionGenderChange}
                  />
                  <label class="usa-checkbox__label" for="question-gender-not-specified"
                    >Prefer not to say</label
                  >
                </div>
              </fieldset>
              { questionGender.get('other') }
              { questionGender.get('other') && 
                <input 
                    class="usa-input" 
                    style={{width: '100%'}} 
                    id="question-gender-other-text" 
                    name="question-gender-other-text"
                    value={questionGenderOther}
                    onChange={e => setQuestionGenderOther(e.target.value)}
                    placeholder="Specify gender"
                />
              }
            </div>
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
