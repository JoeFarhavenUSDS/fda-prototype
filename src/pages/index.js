import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form class="usa-form usa-form--large">
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend">Select one historical figure</legend>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            id="historical-truth"
            type="radio"
            name="historical-figures"
            value="sojourner-truth"
          />
          <label class="usa-radio__label" for="historical-truth"
            >Sojourner Truth</label
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
            >Frederick Douglass</label
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
            >Booker T. Washington</label
          >
        </div>
      </fieldset>
    </form>
  </Layout>
);

export default IndexPage;
