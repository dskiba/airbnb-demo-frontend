import React from 'react';
import { Link, Img, CardName, CardPrice, Reviews } from '../../UI';
import Stars from '../../UI/Stars';

const Title = CardName.extend``;
const Price = CardPrice.extend``;

export default props => (
  <React.Fragment>
    <Link to={props.link}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
      <Price>${props.price}</Price>
      <Title>{props.title}</Title>
    </Link>
    <Stars />
    <Reviews>{props.reviews} Reviews</Reviews>
  </React.Fragment>
);
