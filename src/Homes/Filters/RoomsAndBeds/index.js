import React from 'react';
import styled from 'styled-components';

import Counter from '../Guests/Count';

const RoomsAndBeds = styled.div`
  @media screen and (min-width: 576px) {
    width: 60%;
  }
`;

const Title = styled.h3`
  margin: 0 0 24px 0;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  @media screen and (min-width: 991px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 6px;
  flex-grow: 1;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Row = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function (props) {
  return (
    <RoomsAndBeds>
      <Title>Rooms and beds</Title>
      <Row>
        <Name>Bedrooms</Name>
        <Counter name="bedrooms" value={props.bedrooms} onClick={props.onClick} min={props.min} />
      </Row>
      <Row>
        <Name>Beds</Name>
        <Counter name="beds" value={props.beds} onClick={props.onClick} min={props.min} />
      </Row>
      <Row>
        <Name>Bathrooms</Name>
        <Counter name="bathrooms" value={props.bathrooms} onClick={props.onClick} min={props.min} />
      </Row>
    </RoomsAndBeds>
  );
}
