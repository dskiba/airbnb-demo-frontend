import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, Img, CardName } from "../../UI/index";
import Stars from "../../UI/Stars/index";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;

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
  font-family: "CircularAirBold";
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
  font-family: "Circular_Air-Light";
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

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <Img src={props.imgSrc} alt={props.imgAlt} />
        <Category> {props.category} </Category>
        <ReservationName>{props.name}</ReservationName>
        <Check>About ${props.check} per person</Check>
      </Link>
    </React.Fragment>
  );
};