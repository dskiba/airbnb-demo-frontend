import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, Img, CardName } from "../UI/index";
import Stars from "../UI/Stars/index";

const City = CardName.extend`
  font-weight: bold;
  font-size: 12px;
  line-hight: 14px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-hight: 18px;
  }
`;

export default props => {
  return (
    <React.Fragment>
      <Link href={props.link}>
        <Img src={props.imgSrc} alt={props.imgAlt} />
        <City>{props.city}</City>
      </Link>
    </React.Fragment>
  );
};
