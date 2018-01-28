import React from 'react';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import Dropdown from '../MoreFilterDropdown';
import RoomType from '../RoomType/Types';
import Prices from '../Prices/Filter';
import RoomsAndBeds from '../RoomsAndBeds';
import MoreOptions from '../MoreOptions';
import Amenities from '../Amenities';
import Facilities from '../Facilities';

const MoreFiltersStyled = styled.div`
  background-color: #fff;
  z-index: 20;
`;

const Content = styled.div`
  padding-top: 8px;
  @media screen and (min-width: 576px) {
    margin-left: -8px;
  }
`;

const Filter = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-color: #fff;
  @media screen and (min-width: 991px) {
    display: ${props => (props.hideLg ? 'none' : 'block')};
  }
`;

const min = 0;

const activeFilters = [
  'roomtype',
  'prices',
  'roomsAndBeds',
  'amenities',
  'facilities',
  'instantBook',
  'superhost',
];

const getChangedCount = (state, initial) =>
  activeFilters.reduce(
    (count, key) =>
      (Object.keys(state[key]).length > 2
        ? count + getObjectCount(state[key])
        : count + getSimpleCount(state[key], initial[key])),
    0,
  );

const getObjectCount = object =>
  Object.keys(object).reduce((count, key) => (object[key] ? count + 1 : count), 0);

const getSimpleCount = (value, initial) => (isEqual(value, initial) ? 0 : 1);

const getTitle = (state, initial) =>
  (getChangedCount(state, initial) > 0
    ? `More filters ⋅ ${getChangedCount(state, initial)}`
    : 'More filters');

export default class MoreFilters extends React.Component {
  initialValues = {
    roomtype: { entire: false, privat: false, shared: false },
    prices: {
      startPrice: 10,
      endPrice: 1000,
    },
    roomsAndBeds: {
      bathrooms: 0,
      bedrooms: 0,
      beds: 0,
    },
    amenities: {
      heating: false,
      kitchen: false,
      tv: false,
      wifi: false,
    },
    facilities: {
      elevator: false,
      freeParking: false,
      pool: false,
      wheelchairAccessible: false,
    },
    instantBook: false,
    superhost: false,
  };

  state = this.initialValues;

  onChange = (key, values) => {
    this.setState(prevState => ({ [key]: { ...prevState[key], ...values } }));
  };

  onToggle = (key, value) => {
    this.setState({ [key]: value });
  };

  onCounterClick = (key, room) => {
    if (this.state.roomsAndBeds[key] + room >= min) {
      this.onCountChange(key, room);
    }
  };

  onCountChange = (key, room) => {
    this.setState(prevState => ({
      roomsAndBeds: {
        ...prevState.roomsAndBeds,
        [key]: prevState.roomsAndBeds[key] + room,
      },
    }));
  };

  onApply = () => this.props.onApply(this.state);

  onPriceChange = (sliderState) => {
    this.setState({
      prices: {
        startPrice: sliderState.values[0],
        endPrice: sliderState.values[1],
      },
    });
  };

  render() {
    return (
      <Dropdown
        name="More filters"
        isOpen={this.props.isOpen}
        onClick={this.props.onClick}
        onApply={this.onApply}
        showSm
        showLg
        isActive={getChangedCount(this.state, this.initialValues) > 0}
        activeTitle={getTitle(this.state, this.initialValues)}
      >
        <MoreFiltersStyled>
          <Content>
            <Filter hideLg>
              <RoomType
                roomtype={this.state.roomtype}
                onChange={value => this.onChange('roomtype', value)}
              />
            </Filter>
            <Filter hideLg>
              <Prices
                prices={this.state.prices}
                max={this.state.max}
                min={this.state.min}
                onChange={this.onPriceChange}
                title="Price Range"
              />
            </Filter>
            <Filter>
              <RoomsAndBeds
                bathrooms={this.state.roomsAndBeds.bathrooms}
                bedrooms={this.state.roomsAndBeds.bedrooms}
                beds={this.state.roomsAndBeds.beds}
                onClick={this.onCounterClick}
                min={min}
              />
            </Filter>
            <Filter>
              <MoreOptions
                instantBook={this.state.instantBook}
                superhost={this.state.superhost}
                onChange={this.onToggle}
              />
            </Filter>
            <Filter>
              <Amenities
                amenities={this.state.amenities}
                onChange={value => this.onChange('amenities', value)}
              />
            </Filter>
            <Filter>
              <Facilities
                facilities={this.state.facilities}
                onChange={value => this.onChange('facilities', value)}
              />
            </Filter>
          </Content>
        </MoreFiltersStyled>
      </Dropdown>
    );
  }
}
