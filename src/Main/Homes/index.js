import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link as RouteLink } from 'react-router-dom';

import { Title, Slider, SliderArrow, SeeAll } from '../../UI';
import Card from './Card';
import img1 from '../../Homes/Cards/1.png';
import img2 from '../../Homes/Cards/2.png';
import img3 from '../../Homes/Cards/3.png';
import { HomesData } from '../../Homes/Cards/api';

const Homes = styled.section`
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: hide;
  }
`;

const SlideNext = SliderArrow.extend`
  top: calc(50% - 40px);
`;

const Link = styled(RouteLink)`
  text-decoration: none;
`;

export default class Cards extends React.Component {
  state = { homes: [] };

  async componentWillMount() {
    const homes = await HomesData(0, 18);
    this.setState({ homes });
  }

  render() {
    return (
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
          {this.state.homes.map(home => (
            <Col xs={8} md={5} lg={4}>
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
          <SlideNext />
        </Slider>
      </Homes>
    );
  }
}
