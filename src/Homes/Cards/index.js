import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pagination from './Paginator';
import Card from './Card';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import GoogleMap from '../GoogleMap';

const Cards = styled.section`
  margin-top: 146px;
`;

export default () => (
  <Cards>
    <Grid>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
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
            <Col xs={12} sm={6} md={6} lg={6}>
              <Card
                link="#"
                imgSrc={img2}
                imgAlt="Private"
                price={82}
                title="Your private 3 bedr. riad and exclusi…"
                beds="5"
                hosts={161}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
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
            <Col xs={12} sm={6} md={6} lg={6}>
              <Card
                link="#"
                imgSrc={img4}
                imgAlt="luxury"
                price={110}
                title="Best location old town luxury loft"
                beds="1"
                hosts={369}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Card
                link="#"
                imgSrc={img5}
                imgAlt="Lussuoso. Vista incantevole."
                price={83}
                title="Lussuoso. Vista incantevole."
                beds="6"
                hosts={105}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Card
                link="#"
                imgSrc={img6}
                imgAlt="In the historical center of Lecce"
                price={72}
                title="In the historical center of Lecce"
                beds="3"
                hosts={221}
              />
            </Col>
          </Row>

          <Pagination />
          <GoogleMap />
        </Col>
      </Row>
    </Grid>
  </Cards>
);
