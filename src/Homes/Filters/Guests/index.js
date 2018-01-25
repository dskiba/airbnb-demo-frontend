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
    height: auto;
    padding-left: 24px;
    padding-right: 15px;
    margin-top: 30px;
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
  margin-left: 8px;
  @media screen and (min-width: 576px) {
    margin-left: 0px;
  }
`;

const Title = styled.p`
  margin: 0;
  margin-right: 85px;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  flex-grow: 2;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-height: 23px;
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

  onReset = () => this.setState(this.initialValues);

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
            <Counter
              name="adults"
              onClick={this.onClick}
              min={this.initialValues.guests.adults}
              value={this.state.guests.adults}
            />
          </Filter>
          <Filter>
            <div>
              <Title>Children</Title>
              <Specifically>Ages 2 — 12</Specifically>
            </div>
            <Counter
              name="children"
              value={this.state.guests.children}
              min={this.initialValues.guests.children}
              onClick={this.onClick}
            />
          </Filter>
          <Filter>
            <div>
              <Title>Infants</Title>
              <Specifically>Under 2</Specifically>
            </div>
            <Counter
              name="infants"
              value={this.state.guests.infants}
              min={this.initialValues.guests.infants}
              onClick={this.onClick}
            />
          </Filter>
        </Filters>
      </Dropdown>
    );
  }
}
