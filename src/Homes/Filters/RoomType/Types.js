import React from 'react';
import styled from 'styled-components';

import entire from './entire.svg';
import privateroom from './private.svg';
import shared from './shared.svg';
import Checkbox from './Checkbox';

const Filter = styled.div`
  @media screen and (min-width: 991px) {
    width: 326px;
    padding-top: 24px;
  }
`;

const Row = styled.label`
  margin-bottom: 8px;
  margin-right: 16px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 991px) {
    margin-left: 16px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 4px;
  flex-grow: 1;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
`;
const Annotation = styled.p`
  margin: 0;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const Icon = styled.img`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    align-self: center;
    margin-left: 30px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 12px;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 23px;
  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export default function (props) {
  return (
    <Filter>
      <Title>Room type</Title>
      <Row>
        <Checkbox isChecked={props.roomtype.entire} handleChange={props.onChange} name="entire" />
        <TextWrapper>
          <Name>Entire home</Name>
          <Annotation>Have a place to yourself</Annotation>
        </TextWrapper>
        <Icon src={entire} />
      </Row>
      <Row>
        <Checkbox isChecked={props.roomtype.privat} handleChange={props.onChange} name="privat" />
        <TextWrapper>
          <Name>Private room</Name>
          <Annotation>Have your own room and share some common spaces</Annotation>
        </TextWrapper>
        <Icon src={privateroom} />
      </Row>
      <Row>
        <Checkbox isChecked={props.roomtype.shared} handleChange={props.onChange} name="shared" />
        <TextWrapper>
          <Name>Shared room</Name>
          <Annotation>Stay in a shared space, like a common room</Annotation>
        </TextWrapper>
        <Icon src={shared} />
      </Row>
    </Filter>
  );
}
