import React from "react";
import styled from "styled-components";
import {
  Title,
  Slider,
  SliderArrow,
  Card,
  CardName,
  CardPrice,
  Link,
  SeeAll,
  Img
} from "../styled";
import Stars from "../Stars";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Experiences = styled.section`
  overflow: scroll;
`;

const Reviews = styled.span`
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => {
  return (
    <Experiences>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <Title>
            Experiences
            <SeeAll href="/Experiences">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Col lg={3} md={4} xs={6}>
          <Card>
            <Link href="/Forest_therapy">
              <Img src={img1} alt="forest" />
              <CardPrice>$29</CardPrice>
              <CardName>Forest therapy</CardName>
              <br />
              <Stars />
              <Reviews>44 reviews</Reviews>
            </Link>
          </Card>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Card>
            <Link href="/Whale_watching">
              <Img src={img2} alt="Sea" />
              <CardPrice>$69</CardPrice>
              <CardName>Whale watching</CardName>
              <br />
              <Stars />
              <Reviews>46 reviews</Reviews>
            </Link>
          </Card>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Card>
            <Link href="/Moutain_summit">
              <Img src={img3} alt="Mountain" />
              <CardPrice>$69</CardPrice>
              <CardName>Table Mountain Summit, Cable Car Down</CardName>
              <br />
              <Stars />
              <Reviews>44 reviews</Reviews>
            </Link>
          </Card>
        </Col>
        <Col lg={3} md={4} xs={6}>
          <Card>
            <Link href="/Salsa_night">
              <Img src={img4} alt="Dance" />
              <CardPrice>$50</CardPrice>
              <CardName>Salsa Night</CardName>
              <br />
              <Stars />
              <Reviews>44 reviews</Reviews>
            </Link>
          </Card>
        </Col>
        <SlideNext />
      </Slider>
    </Experiences>
  );
};
