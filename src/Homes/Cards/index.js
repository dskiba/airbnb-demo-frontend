import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import Pagination from './Paginator';
import Card from './Card';

const Wrapper = styled.section`
  padding-top: 146px;
`;

const Cards = ({ homes, ready }) => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            <ReactPlaceholder type="rect" ready={ready} style={{ width: 1000, height: 2300 }}>
              {homes.map(home => (
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Card
                    name={home.name}
                    image={home.image}
                    price={home.price}
                    type={home.kind}
                    beds={home.beds}
                    kind={home.kind}
                    reviews={home.reviews}
                    host={home.host}
                  />
                </Col>
              ))}
            </ReactPlaceholder>
          </Row>
          <Pagination />
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);

export default Cards;
