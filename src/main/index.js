import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Resevations from './Reservations';
import Featured from './Featured';
import Footer from '../Footer';
import Header from '../Header';

const Main = styled.main``;

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Airbnb Main Page</title>
    </Helmet>
    <Header placeholder="Try &quot;Miami&quot;" />
    <Main>
      <Grid>
        <Explore />
        <Experiences />
        <Homes />
        <Resevations />
        <Featured />
      </Grid>
    </Main>
    <Footer />
  </React.Fragment>
);
