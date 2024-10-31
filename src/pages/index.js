import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <form class="usa-form usa-form--large padding-9" style={{paddingTop: '0'}}>
        <h1>Report a problem</h1>
        <p>We review every complaint submitted. We use this information to monitor the safety of FDA-regulated products.</p>
        <p>We will ask you for the product information, what happened, and any photos of the product.</p>
        <p>We are unable to answer questions about submitted problems. You can check the current list of recalled products here.</p>
        <p>We will reach out if we have any questions.</p>
        <div style={{width: '100%', textAlign: 'center'}}>
          <a href="/site/joefarhavenusds/fda-prototype/intake"><button class="usa-button" type="button" style={{width: '100%', textAlign: 'center'}}>Get Started</button></a>
        </div>
      </form>
    </Layout>
  );
};

export default IndexPage;
