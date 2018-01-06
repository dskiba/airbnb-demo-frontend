import React from "react";
import styled from "styled-components";
import { Title, Slider, SliderArrow, Card, Link, SeeAll, Img } from "../styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Reservations = styled.section`
  overflow: hidden;
`;

const Category = styled.span`
  display: block;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  line-height: 0.75rem;
  margin-top: 12px;
  text-transform: uppercase;
  color: #383838;
`;

const ReservationName = styled.h3`
  display: block;
  font-family: "CircularAirBold";
  font-size: 18px;
  line-height: 21px;
  margin-top: 2px;
  margin-bottom: 4px;
  color: #383838;
`;

const Check = styled.span`
  display: block;
  font-family: "Circular_Air-Light";
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

const SlideNext = SliderArrow.extend`
  top: 80px;
`;

export default () => {
  return (
    <Reservations>
      <Title>
        Popular reservations around the world
        <SeeAll href="/Reservations">See all</SeeAll>
      </Title>
      <Slider>
        <Col lg={3} sm={4} xs={6}>
          <Card>
            <Link href="/">
              <Img src={img1} alt="" />
              <Category>Speakeasy</Category>
              <ReservationName>Chumley’s</ReservationName>
              <Check>About $60 per person</Check>
            </Link>
          </Card>
        </Col>
        <Col lg={3} sm={4} xs={6}>
          <Card>
            <Link href="/">
              <Img src={img2} alt="" />
              <Category>Korean gastropub</Category>
              <ReservationName>Hanjan</ReservationName>
              <Check>About $50 per person</Check>
            </Link>
          </Card>
        </Col>
        <Col lg={3} sm={4} xs={6}>
          <Card>
            <Link href="/">
              <Img src={img3} alt="" />
              <Category>German american</Category>
              <ReservationName>Prime Meats</ReservationName>
              <Check>About $55 per person</Check>
            </Link>
          </Card>
        </Col>
        <Col lg={3} sm={4} xs={6}>
          <Card>
            <Link href="/">
              <Img src={img4} alt="" />
              <Category>Fine seafood</Category>
              <ReservationName>Seaprice</ReservationName>
              <Check>About $70 per person</Check>
            </Link>
          </Card>
        </Col>
        <SlideNext />
      </Slider>
    </Reservations>
  );
};
