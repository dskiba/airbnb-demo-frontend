import React from 'react';
import styled from 'styled-components';
import { Link, Img } from '../../UI';

const Category = styled.span`
  display: block;
  font-family: 'Circular Air Bold', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 8px;
  line-hight: 9px;
  font-weight: bold;
  margin-top: 12px;
  text-transform: uppercase;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const ReservationName = styled.h3`
  display: block;
  font-family: 'Circular Air Bold', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-hight: 16px;
  margin-top: 2px;
  margin-bottom: 4px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Check = styled.span`
  display: block;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-hight: 14px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
  @media (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

export default props => (
  <React.Fragment>
    <Link to={props.link}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
      <Category> {props.category} </Category>
      <ReservationName>{props.name}</ReservationName>
      <Check>About ${props.check} per person</Check>
    </Link>
  </React.Fragment>
);
