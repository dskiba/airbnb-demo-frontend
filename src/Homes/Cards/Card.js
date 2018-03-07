import React from 'react';
import styled from 'styled-components';
import 'react-placeholder/lib/reactPlaceholder.css';
import { Img, CardName, CardPrice, Reviews } from '../../UI';
import Stars from '../../UI/Stars';

const Title = CardName.extend`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
`;
const Price = CardPrice.extend`
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  margin-right: 8px;
  margin-top: 8px;
`;

const Hosts = Reviews.extend``;

const Description = styled.div`
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  margin-top: 2px;
  margin-bottom: 6px;
  color: #383838;
`;

const CardImg = Img.extend`
  max-height: 242px;

  margin-top: 24px;
`;

const Home = styled.a`
  display: block;
  text-decoration: none;
`;

export default ({
  name, image, price, kind, beds, reviews, host,
}) => (
  <React.Fragment>
    <Home href={name}>
      <CardImg src={image} alt={name} />
      <Title>
        <Price>${price}</Price>
        {name}
      </Title>
    </Home>
    <Description>
      {kind} &#183; {beds} {beds > 1 ? ' beds' : ' bed'}
    </Description>
    <Stars />
    <Hosts>
      {reviews} {host && '· Superhost'}
    </Hosts>
  </React.Fragment>
);
