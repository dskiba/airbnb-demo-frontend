import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Filters from './Filters/index';
import Cards from './Cards/index';
import Header from '../Header';

const Homes = styled.main``;

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Airbnb Homes Page</title>
    </Helmet>
    <Header placeholder="Anywhere  ·  Homes" />
    <Filters />
    <Homes>
      <Cards />
    </Homes>
  </React.Fragment>
);
