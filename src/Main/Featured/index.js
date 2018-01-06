import React from "react";
import styled from "styled-components";
import {
  Title,
  Slider,
  SliderArrow,
  Card,
  CardName,
  Link,
  SeeAll,
  Img
} from "../styled";
import { Grid, Row, Col } from "react-flexbox-grid";
import img1 from "./Paris.png";
import img2 from "./Miami.png";
import img3 from "./Tokyo.png";
import img4 from "./Cape-town.png";
import img5 from "./Seoul.png";
import img6 from "./Los-Angeles.png";

const Featured = styled.section``;

const City = CardName.extend`
  font-weight: bold;
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => {
  return (
    <Featured>
      <Row>
        <Col lg={12}>
          <Title>
            Featured destinations
            <SeeAll href="/Homes">See all</SeeAll>
          </Title>
        </Col>
      </Row>
      <Slider>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Paris">
              <Img src={img1} alt="Paris" />
              <City>Paris</City>
            </Link>
          </Card>
        </Col>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Miami">
              <Img src={img2} alt="Miami" />
              <City>Miami</City>
            </Link>
          </Card>
        </Col>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Tokyo">
              <Img src={img3} alt="Tokyo" />
              <City>Tokyo</City>
            </Link>
          </Card>
        </Col>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Cape_town">
              <Img src={img4} alt="Cape town" />
              <City>Cape town</City>
            </Link>
          </Card>
        </Col>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Seoul">
              <Img src={img5} alt="Seoul" />
              <City>Seoul</City>
            </Link>
          </Card>
        </Col>
        <Col lg={2} md={3}>
          <Card>
            <Link href="/Los_Angeles">
              <Img src={img6} alt="Los Angeles" />
              <City>Los Angeles</City>
            </Link>
          </Card>
        </Col>
        <SlideNext />
      </Slider>
    </Featured>
  );
};
