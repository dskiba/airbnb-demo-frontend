import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, Img, CardName, CardPrice, Reviews } from "../../UI/index";
import Stars from "../../UI/Stars/index";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Title = CardName.extend``;
const Price = CardPrice.extend``;

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <Img src={props.imgSrc} alt={props.imgAlt} />
        <Price>{"$" + props.price}</Price>
        <Title>{props.title}</Title>
      </Link>
      <Stars />
      <Reviews>{props.reviews} Reviews</Reviews>
    </React.Fragment>
  );
};
