import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
  @media (min-width: 577px) {
    display: flex;
  }
`;

const Title = styled.h3`
  font-family: 'Circular Air Bold', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: normal;
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  padding-left: 12px;
  @media (min-width: 576px) {
    padding-left: 24px;
  }
  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  height: 78px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media (min-width: 576px) {
    height: 72px;
    width: 96px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 0px;
  }
  @media (min-width: 768px) {
    width: 96px;
    height: 72px;
  }
`;

export default props => (
  <Card to={props.link}>
    <Img src={props.imgSrc} alt={props.imgAlt} />
    <Title>{props.title}</Title>
  </Card>
);
