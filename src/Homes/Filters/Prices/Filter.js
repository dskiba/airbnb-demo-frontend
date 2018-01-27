import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import Diagram from './Diagram';

const Prices = styled.div`
    box-sizing: border-box;
    
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: 991px) {
    width: 326px;
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 23px;
  @media screen and (min-width: 576px) {
  }
`;

const Name = styled.p`
  margin: 0;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  flex-grow: 1;
`;

const Annotation = styled.p`
  margin: 0;
  margin-top: 7px;
  margin-bottom: 32px;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const Histogram = styled.div`
  @media screen and (min-width: 576px) {
    padding-left: 16px;
    padding-right: 24px;
  }
`;

export default function (props) {
  return (
    <Prices>
      <Title>Price range</Title>
      <Name>
        ${props.prices.startPrice} — ${props.prices.endPrice}+
      </Name>
      <Annotation>The average nightly price is $75.</Annotation>
      <Histogram>
        <Diagram />
        <Rheostat
          min={props.min || 10}
          max={props.max || 1000}
          values={[props.prices.startPrice, props.prices.endPrice]}
          onValuesUpdated={props.onChange}
        />
      </Histogram>
    </Prices>
  );
}
