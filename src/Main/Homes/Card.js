import React from 'react';
import styled from 'styled-components';

import { Link, Img, CardName, CardPrice, Reviews } from '../../UI';
import Stars from '../../UI/Stars';

const Title = CardName.extend`
  font-weight: bold;
`;
const Price = CardPrice.extend``;

const Hosts = Reviews.extend``;

const Description = styled.div`
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  margin-bottom: 6px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default props => (
  <React.Fragment>
    <Link to={props.link}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
      <Title>
        $<Price>{props.price}</Price> {props.title}
      </Title>
    </Link>
    <Description>
      Entire house &#183; {props.beds} {props.beds > 1 ? ' beds' : ' bed'}
    </Description>
    <Stars />
    <Hosts>{props.hosts} &#183; Superhost</Hosts>
  </React.Fragment>
);
