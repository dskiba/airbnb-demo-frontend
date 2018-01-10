import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Title, SliderArrow, SeeAll, Slider } from "../UI/index";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Experiences = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => {
  return (
    <Experiences>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Title>
            Experiences
            <SeeAll href="/Experiences">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Col xs={6} md={4} lg={3}>
          <Card
            link={"#"}
            imgSrc={img1}
            imgAlt={"Forest"}
            price={29}
            title={"Forest therapy"}
            reviews={44}
          />
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card
            link={"#"}
            imgSrc={img2}
            imgAlt={"Whale watching"}
            price={69}
            title={"Whale watching"}
            reviews={46}
          />
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card
            link={"#"}
            imgSrc={img3}
            imgAlt={"Table Mountain Summit, Cable Car Down"}
            price={69}
            title={"Table Mountain Summit, Cable Car Down"}
            reviews={44}
          />
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Card
            link={"#"}
            imgSrc={img4}
            imgAlt={"Salsa Night"}
            price={50}
            title={"Salsa Night"}
            reviews={44}
          />
        </Col>
        <SlideNext />
      </Slider>
    </Experiences>
  );
};
