import React from "react";
import styled from "styled-components";
import { Title, Slider, SliderArrow, SeeAll } from "../../UI/index";
import Card from "./Card";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Homes = styled.section`
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
    <Homes>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Title>
            Homes
            <SeeAll href="/Homes">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Col xs={8} md={5} lg={4}>
          <Card
            link={"#"}
            imgSrc={img1}
            imgAlt={"Nature"}
            price={82}
            title={"La Salentina, see, nature & relax"}
            beds={"9"}
            hosts={97}
          />
        </Col>
        <Col xs={8} md={5} lg={4}>
          <Card
            link={"#"}
            imgSrc={img2}
            imgAlt={"Your private"}
            price={82}
            title={"Your private 3 bedr. riad and exclusi…"}
            beds={"5"}
            hosts={161}
          />
        </Col>
        <Col xs={8} md={5} lg={4}>
          <Card
            link={"#"}
            imgSrc={img3}
            imgAlt={"Tropical"}
            price={200}
            title={"Dreamy Tropical Tree House"}
            beds={"1"}
            hosts={364}
          />
        </Col>
        <SlideNext />
      </Slider>
    </Homes>
  );
};
