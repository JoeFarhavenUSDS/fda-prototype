import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form class="usa-form usa-form--large padding-10">
      <h1>Report a problem</h1>
      <p>Here's where we set expectations of what we will do with reports, and what folks can expect.</p>
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend"><b>Question 1</b></legend>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            id="historical-truth"
            type="radio"
            name="historical-figures"
            value="sojourner-truth"
          />
          <label class="usa-radio__label" for="historical-truth"
            >Option A</label
          >
        </div>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            id="historical-douglass"
            type="radio"
            name="historical-figures"
            value="frederick-douglass"
          />
          <label class="usa-radio__label" for="historical-douglass"
            >Option B</label
          >
        </div>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            id="historical-washington"
            type="radio"
            name="historical-figures"
            value="booker-t-washington"
          />
          <label class="usa-radio__label" for="historical-washington"
            >Option C</label
          >
        </div>
      </fieldset>
      <div class="usa-form-group">
        <label class="usa-label" id="appointment-date-label" for="appointment-date"
          ><b>Question 2</b></label
        >
        <div class="usa-hint" id="appointment-date-hint">Prompt text</div>
        <textarea
          class="usa-textarea"
          id="input-type-textarea"
          name="input-type-textarea"
        ></textarea>
      </div>
      <div style={{width: '100%', textAlign: 'right'}}>
        <button class="usa-button" type="button">Next</button>
      </div>
    </form>
  </Layout>
);

export default IndexPage;
