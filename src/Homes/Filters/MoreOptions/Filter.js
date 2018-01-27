import React from 'react';
import styled from 'styled-components';

import RadioButton from '../InstantBook/RadioButton';

const Option = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 991px) {
    display: ${props => (props.hideLg ? 'none' : 'flex')};
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
    font-size: 20px;
    line-height: 23px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  padding-bottom: 6px;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Link = styled.a`
  padding: 4px 0;
  color: #0f7276;
  text-decoration: none;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const TextWrapper = styled.div``;

export default function (props) {
  const onChange = () => props.onChange(!props.isChecked);
  return (
    <Option hideLg={props.hideLg}>
      <TextWrapper>
        <Name>{props.name}</Name>
        <Annotation>{props.annotation}</Annotation>
        <Link>Learn more</Link>
      </TextWrapper>
      <RadioButton isChecked={props.isChecked} onChange={onChange} />
    </Option>
  );
}
