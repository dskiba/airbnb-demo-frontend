import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../styled";

import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Explore = styled.section`
  width: 100%;
`;

const Card = styled.a`
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  height: 72px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  padding-left: 24px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 17px;

  color: #383838;
`;

const Img = styled.img``;

export default () => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <Row>
          <Col lg={4}>
            <Card href="/Homes">
              <Img src={img1} alt="" />
              <CardTitle>Homes</CardTitle>
            </Card>
          </Col>
          <Col lg={4}>
            <Card href="/Experiences">
              <Img src={img2} alt="" />
              <CardTitle>Experiences</CardTitle>
            </Card>
          </Col>
          <Col lg={4}>
            <Card href="/Restaurants">
              <Img src={img3} alt="" />
              <CardTitle>Restaurants</CardTitle>
            </Card>
          </Col>
        </Row>
      </Slider>
    </Explore>
  );
};
