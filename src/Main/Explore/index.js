import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../styled";

import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Explore = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  @media (min-width: 576px) {
    flex-direction: row;
    height: 72px;
    align-items: center;
  }
`;

const CardTitle = styled.h3`
  font-family: CircularAir;
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
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  @media (min-width: 768px) {
    width: 96px;
    height: 72px;
  }
`;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card href="/Homes">
            <Img src={img2} alt="" />
            <CardTitle>Homes</CardTitle>
          </Card>
        </Col>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card href="/Experiences">
            <Img src={img3} alt="" />
            <CardTitle>Experiences</CardTitle>
          </Card>
        </Col>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card href="/Restaurants">
            <Img src={img1} alt="" />
            <CardTitle>Restaurants</CardTitle>
          </Card>
        </Col>
      </Slider>
    </Explore>
  );
};
