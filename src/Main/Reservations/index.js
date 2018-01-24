import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

import Card from './Card';
import { Title, SliderArrow, SeeAll, Slider } from '../../UI/index';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

const Reservations = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: visible;
  }
`;

const SlideNext = SliderArrow.extend`
  top: 80px;
`;

export default () => (
  <Reservations>
    <Title>
      Popular reservations around the world
      <SeeAll href="/Reservations">See all</SeeAll>
    </Title>
    <Slider>
      <Col xs={6} md={4} lg={3}>
        <Card
          link="#"
          imgSrc={img1}
          imgAlt="speakeasy"
          category="speakeasy"
          name="Chumley's"
          check={60}
        />
      </Col>
      <Col xs={6} md={4} lg={3}>
        <Card
          link="#"
          imgSrc={img2}
          imgAlt="Korean gastropub"
          category="Korean gastropub"
          name="Hanjan"
          check={50}
        />
      </Col>
      <Col xs={6} md={4} lg={3}>
        <Card
          link="#"
          imgSrc={img3}
          imgAlt="German american"
          category="German american"
          name="Prime Meats"
          check={55}
        />
      </Col>
      <Col xs={6} md={4} lg={3}>
        <Card
          link="#"
          imgSrc={img4}
          imgAlt="Fine seafood"
          category="Fine seafood"
          name="Seaprice"
          check={55}
        />
      </Col>
      <SlideNext />
    </Slider>
  </Reservations>
);
