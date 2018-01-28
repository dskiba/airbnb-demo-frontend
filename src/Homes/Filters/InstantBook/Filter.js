import React from 'react';
import styled from 'styled-components';

import RadioButton from './RadioButton';

const Option = styled.div`
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 991px) {
    display: ${props => (props.hideLg ? 'none' : 'flex')};
    box-sizing: border-box;

    width: 326px;
  }
`;

const Name = styled.p`
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
  padding-bottom: 6px;
  flex-grow: 1;
  font-weight: 200;
  font-size: 16px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 16px;
`;

const TextWrapper = styled.div``;

export default function (props) {
  const onChange = () => props.onChange(!props.isChecked);
  return (
    <Option hideLg={props.hideLg}>
      <TextWrapper>
        <Name>{props.name}</Name>
        <Annotation>{props.annotation}</Annotation>
      </TextWrapper>
      <RadioButton isChecked={props.isChecked} onChange={onChange} />
    </Option>
  );
}
