import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1>Hello world</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
