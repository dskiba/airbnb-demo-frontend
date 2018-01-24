import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link as RouteLink } from 'react-router-dom';

import { Title, Slider, SliderArrow, SeeAll } from '../../UI/index';
import Card from './Card';
import img1 from '../../Homes/Cards/1.png';
import img2 from '../../Homes/Cards/2.png';
import img3 from '../../Homes/Cards/3.png';

const Homes = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

const Link = styled(RouteLink)`
  text-decoration: none;
`;

export default () => (
  <Homes>
    <Row>
      <Col xs={12} md={12} lg={12}>
        <Link to="/Homes">
          <Title>
            Homes
            <SeeAll to="/Homes">See all</SeeAll>
          </Title>
        </Link>
      </Col>
    </Row>
    <Slider>
      <Col xs={8} md={5} lg={4}>
        <Card
          link="#"
          imgSrc={img1}
          imgAlt="Nature"
          price={82}
          title="La Salentina, see, nature & relax"
          beds="9"
          hosts={97}
        />
      </Col>
      <Col xs={8} md={5} lg={4}>
        <Card
          link="#"
          imgSrc={img2}
          imgAlt="Your private"
          price={82}
          title="Your private 3 bedr. riad and exclusi…"
          beds="5"
          hosts={161}
        />
      </Col>
      <Col xs={8} md={5} lg={4}>
        <Card
          link="#"
          imgSrc={img3}
          imgAlt="Tropical"
          price={200}
          title="Dreamy Tropical Tree House"
          beds="1"
          hosts={364}
        />
      </Col>
      <SlideNext />
    </Slider>
  </Homes>
);
