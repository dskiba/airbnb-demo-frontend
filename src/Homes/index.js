import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Filters from './Filters';
import Cards from './Cards';
import Header from '../Header';
import GoogleMap from './GoogleMap';
import getHomes from './Cards/api';

import ReactPlaceholder from 'react-placeholder';

const Content = styled.main``;

export default class Homes extends React.Component {
  state = { homes: [], ready: false };

  async componentWillMount() {
    const homes = await getHomes(0, 6);
    this.setState({ homes, ready: true });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Airbnb Homes Page</title>
        </Helmet>
        <Header placeholder="Anywhere  ·  Homes" />
        <Filters />
        <Content>
          <Cards homes={this.state.homes} ready={this.state.ready} />
        </Content>
        <GoogleMap homes={this.state.homes} />
      </React.Fragment>
    );
  }
}
