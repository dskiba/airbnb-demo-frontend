import React from "react";
import styled from "styled-components";
import { Title, Slider, SliderArrow, SeeAll } from "../../UI/index";
import Card from "./Card";
import { Grid, Row, Col } from "react-flexbox-grid";
import Paris from "./Paris.png";
import Miami from "./Miami.png";
import Tokyo from "./Tokyo.png";
import CapeTown from "./Cape-town.png";
import Seoul from "./Seoul.png";
import LosAngeles from "./Los-Angeles.png";

const Featured = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
  margin-bottom: 40px;
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => {
  return (
    <Featured>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Title>Featured destinations</Title>
        </Col>
      </Row>
      <Slider>
        <Col xs={4} md={3} lg={2}>
          <Card link="#" imgSrc={Paris} imgAlt="Paris" city="Paris" />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Card link="#" imgSrc={Miami} imgAlt="Miami" city="Miami" />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Card link="#" imgSrc={Tokyo} imgAlt="Tokyo" city="Tokyo" />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Card
            link="#"
            imgSrc={CapeTown}
            imgAlt="Cape town"
            city="Cape town"
          />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Card link="#" imgSrc={Seoul} imgAlt="Seoul" city="Seoul" />
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Card
            link="#"
            imgSrc={LosAngeles}
            imgAlt="Los Angeles"
            city="Los Angeles"
          />
        </Col>
        <SlideNext />
      </Slider>
    </Featured>
  );
};
