import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Title, Slider, SliderArrow } from '../../UI';
import Card from './Card';
import Paris from './Paris.jpg';
import Miami from './Miami.jpg';
import Tokyo from './Tokyo.jpg';
import CapeTown from './Cape-town.jpg';
import Seoul from './Seoul.jpg';
import LosAngeles from './Los-Angeles.jpg';

const Featured = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
  margin-bottom: 0px;
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

export default () => (
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
        <Card link="#" imgSrc={CapeTown} imgAlt="Cape town" city="Cape town" />
      </Col>
      <Col xs={4} md={3} lg={2}>
        <Card link="#" imgSrc={Seoul} imgAlt="Seoul" city="Seoul" />
      </Col>
      <Col xs={4} md={3} lg={2}>
        <Card link="#" imgSrc={LosAngeles} imgAlt="Los Angeles" city="Los Angeles" />
      </Col>
      <SlideNext />
    </Slider>
  </Featured>
);
