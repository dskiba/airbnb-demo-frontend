import React from "react";
import styled from "styled-components";
import { Slider, Title } from "../UI/index";
import { Grid, Row, Col } from "react-flexbox-grid";
import Card from "./Card";
import HomesImg from "./1.png";
import ExperiencesImg from "./2.png";
import RestaurantsImg from "./3.png";

const Explore = styled.section`
  overflow: scroll;
  margin-top: 78px;
  @media (min-width: 1024px) {
    margin-top: 128px;
    overflow: visible;
  }
`;

export default props => {
  return (
    <Explore>
      <Title>Explore Airbnb</Title>
      <Slider>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card link="/Homes" imgSrc={HomesImg} imgAlt="Homes" title="Homes" />
        </Col>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card
            link="/Experiences"
            imgSrc={ExperiencesImg}
            imgAlt="Experiences"
            title="Experiences"
          />
        </Col>
        <Col xs={6} sm={5} md={5} lg={4}>
          <Card
            link="/Restaurants"
            imgSrc={RestaurantsImg}
            imgAlt="Restaurants"
            title="Restaurants"
          />
        </Col>
      </Slider>
    </Explore>
  );
};
