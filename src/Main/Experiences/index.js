import React from "react";
import styled from "styled-components";
import { Title, Slider, Card, Link, SeeAll, Img, SliderArrow } from "../styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Experiences = styled.section``;

const SeeNext = styled.button``;

const CardName = styled.a`
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

const CardPrice = styled.span`
  font-family: "Circular_Air-Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  line-height: 1.1rem;
  padding-right: 0.5rem;
`;

const Reviews = styled.span`
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

export default () => {
  return (
    <Experiences>
      <Row>
        <Col lg={3}>
          <Title>Experiences</Title>
        </Col>
        <Col lgOffset={8} lg={1}>
          <SeeAll href="/Experiences">See all</SeeAll>
        </Col>
      </Row>
    </Experiences>
  );
};
