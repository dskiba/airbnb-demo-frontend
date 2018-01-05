import React from "react";
import styled from "styled-components";
import {
  Title,
  Slider,
  Card,
  CardName,
  CardPrice,
  Link,
  SeeAll,
  Img
} from "../styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Featured = styled.section``;

const City = CardName.extend`
  font-weight: bold;
`;

export default () => {
  return (
    <Homes>
      <Row>
        <Col lg={12}>
          <Title>
            Homes
            <SeeAll href="/Homes">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Row>
          <Col lg={4}>
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
          <Col lg={4}>
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
          <Col lg={4}>
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
        </Row>
      </Slider>
    </Homes>
  );
};
