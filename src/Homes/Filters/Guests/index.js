import React from 'react';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import Dropdown from '../Dropdown';
import Counter from './Count';

const Filters = styled.div`
  height: 100vh;
  padding-top: 28px;
  @media screen and (min-width: 576px) {
    padding-top: 0px;
    width: 294px;
    height: auto;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Title = styled.p`
  margin: 0;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  flex-grow: 2;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-hight: 23px;
  }
`;

const Specifically = styled.p`
  margin: 0;
  padding-top: 8px;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

const getTitle = ({ adults, children, infants }) =>
  `${adults + children} guests ${infants ? `, ${infants} infants` : ''}`;

export default class Guests extends React.Component {
  initialValues = {
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },
  };

  state = this.initialValues;

  onClick = (key, guest) =>
    this.setState(prevState => ({
      guests: {
        ...prevState.guests,
        [key]: prevState.guests[key] + guest,
      },
    }));

  onApply = () => this.props.onApply({ guests: this.state.guests });

  onReset = () => this.setState({ guests: { adults: 1, children: 0, infants: 0 } });

  render() {
    return (
      <Dropdown
        name="Guests"
        isOpen={this.props.isOpen}
        isActive={!isEqual(this.state, this.initialValues)}
        activeTitle={getTitle(this.state.guests)}
        mobileTitle="Save"
        onClick={this.props.onClick}
        onApply={this.onApply}
        onReset={this.onReset}
        isCancelOrReset={isEqual(this.state.guests, this.initialValues.guests)}
      >
        <Filters>
          <Filter>
            <Title>Adults</Title>
            <Counter name="adults" onClick={this.onClick} value={this.state.guests.adults} />
          </Filter>
          <Filter>
            <div>
              <Title>Children</Title>
              <Specifically>Ages 2 — 12</Specifically>
            </div>
            <Counter name="children" value={this.state.guests.children} onClick={this.onClick} />
          </Filter>
          <Filter>
            <div>
              <Title>Infants</Title>
              <Specifically>Under 2</Specifically>
            </div>
            <Counter name="infants" value={this.state.guests.infants} onClick={this.onClick} />
          </Filter>
        </Filters>
      </Dropdown>
    );
  }
}
