import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import homesData from './Cards/api';

const Wrapper = styled.section`
  display: none;
  box-sizing: border-box;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    top: 136px;
    right: 0;
    bottom: 0;
    width: 33%;
    z-index: 3;
  }
`;

const Place = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: darkorange;
`;

export default class GoogleMap extends React.Component {
  static defaultProps = {
    center: [48.239811, 16.375931],
    zoom: 2,
  };

  state = { homes: [] };

  async componentWillMount() {
    const homes = await homesData(0, 6);
    this.setState({ homes });
  }

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLEMAP_CODE,
          }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.state.homes.map(home => <Place lat={home.lat} lng={home.lng} text={home.name} />)}
        </GoogleMapReact>
      </Wrapper>
    );
  }
}
