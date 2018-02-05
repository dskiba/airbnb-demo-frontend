import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

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

const GoogleMap = ({ homes }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLEMAP_CODE,
      }}
      defaultCenter={{ lat: 59.95, lng: 30.33 }}
      defaultZoom={2}
    >
      {homes.map(home => <Place lat={home.lat} lng={home.lng} text={home.name} />)}
    </GoogleMapReact>
  </Wrapper>
);

export default GoogleMap;
