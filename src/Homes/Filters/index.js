import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import Dates from './Dates';
import Guests from './Guests';
import RoomType from './RoomType';
import Price from './Prices';
import InstantBook from './InstantBook';
import MoreFilters from './MoreFilters/';

const Filters = styled.div`
  margin-top: 80px;
  padding: 12px 8px;
  right: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.1);
  border-top: 1px solid rgba(72, 72, 72, 0.1);
  z-index: 3;
`;

export default class Filter extends React.Component {
  state = {
    openedFilter: '',
    dates: {
      startDate: null,
      endDate: null,
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    },
    roomtype: {
      entire: false,
      privat: false,
      shared: false,
    },
    prices: {
      startPrice: 10,
      endPrice: 1000,
    },
    instantBook: false,
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
    superhost: false,
  };

  onApply = () => {
    this.setState({ openedFilter: null });
  };

  toggle = (key) => {
    this.setState(prevState => ({
      openedFilter: prevState.openedFilter === key ? null : key,
    }));
  };

  render() {
    return (
      <Filters>
        <Grid>
          <Row start="xs">
            <Dates
              dates={this.state.dates}
              isOpen={this.state.openedFilter === 'dates'}
              onClick={() => this.toggle('dates')}
              onApply={this.onApply}
            />
            <Guests
              guests={this.state.guests}
              isOpen={this.state.openedFilter === 'guests'}
              onClick={() => this.toggle('guests')}
              onApply={this.onApply}
              showLg
            />
            <RoomType
              roomtype={this.state.roomtype}
              isOpen={this.state.openedFilter === 'roomtype'}
              onClick={() => this.toggle('roomtype')}
              onApply={this.onApply}
            />
            <Price
              prices={this.state.prices}
              isOpen={this.state.openedFilter === 'prices'}
              onClick={() => this.toggle('prices')}
              onApply={this.onApply}
            />
            <InstantBook
              instantBook={this.state.instantBook}
              isOpen={this.state.openedFilter === 'instantBook'}
              onClick={() => this.toggle('instantBook')}
              onApply={this.onApply}
            />
            <MoreFilters
              roomtype={this.state.roomtype}
              prices={this.state.prices}
              roomsAndBeds={this.state.roomsAndBeds}
              amenities={this.state.amenities}
              facilities={this.state.facilities}
              instantBook={this.state.instantBook}
              superhost={this.state.superhost}
              isOpen={this.state.openedFilter === 'moreFilters'}
              onClick={() => this.toggle('moreFilters')}
              onApply={this.onApply}
              showLg
            />
          </Row>
        </Grid>
      </Filters>
    );
  }
}
