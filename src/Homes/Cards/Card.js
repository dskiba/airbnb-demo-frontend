import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, Img, CardName, CardPrice, Reviews } from "../../UI/index";
import Stars from "../../UI/Stars/index";

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
  font-family: "Circular_Air-Light";
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

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <CardImg src={props.imgSrc} alt={props.imgAlt} />
        <Title>
          <Price>${props.price}</Price>
          {props.title}
        </Title>
      </Link>
      <Description>
        Entire house &#183; {props.beds} {props.beds > 1 ? " beds" : " bed"}
      </Description>
      <Stars />
      <Hosts>{props.hosts} &#183; Superhost</Hosts>
    </React.Fragment>
  );
};
