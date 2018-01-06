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

const Homes = styled.section`
  @media (max-width: 1024px) {
    overflow: scroll;
  }
`;

const Hosts = styled.span`
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

const Description = styled.div`
  font-family: "Circular_Air-Light";
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  margin-bottom: 6px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const HouseName = CardName.extend`
  font-weight: bold;
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => {
  return (
    <Homes>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <Title>
            Homes
            <SeeAll href="/Homes">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Col lg={4} md={5} xs={8}>
          <Card>
            <Link href="/La_Salentina">
              <Img src={img1} alt="La Salentina" />
              <CardPrice>$82</CardPrice>
              <HouseName>La Salentina, see, nature & relax</HouseName>
              <Description>Entire house · 9 beds</Description>
              <Stars />
              <Hosts>97 · Superhost</Hosts>
            </Link>
          </Card>
        </Col>
        <Col lg={4} md={5} xs={8}>
          <Card>
            <Link href="/La_Salentina">
              <Img src={img2} alt="Your private" />
              <CardPrice>$82</CardPrice>
              <HouseName>Your private 3 bedr. riad and exclusi…</HouseName>
              <Description>Entire house · 5 beds</Description>
              <Stars />
              <Hosts>161 · Superhost</Hosts>
            </Link>
          </Card>
        </Col>
        <Col lg={4} md={5} xs={8}>
          <Card>
            <Link href="/La_Salentina">
              <Img src={img3} alt="La Salentina" />
              <CardPrice>$200</CardPrice>
              <HouseName>Dreamy Tropical Tree House</HouseName>
              <Description>Entire house · 1 beds</Description>
              <Stars />
              <Hosts>364 · Superhost</Hosts>
            </Link>
          </Card>
        </Col>
        <SlideNext />
      </Slider>
    </Homes>
  );
};
