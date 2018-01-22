import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Container } from "../../UI/index";

import Dates from "./Dates";
import Guests from "./Guests";

const Filters = styled.div`
  padding: 12px 8px;
  right: 0;
  left: 0;
  position: fixed;
  top: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default class Filter extends React.Component {
  state = {
    isOpen: false,
    openedFilter: "",
    dates: {
      startDate: null,
      endDate: null
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0
    }
  };

  toggle = key => {
    this.setState(
      prevState =>
        prevState.openedFilter === key
          ? { openedFilter: null }
          : { openedFilter: key }
    );
  };
  // { openedFilter: prevState.openedFilter === key ? x : y }

  onApply = () => {
    this.setState({ openedFilter: null });
  };

  render() {
    return (
      <Filters>
        <Grid>
          <Row start="xs">
            <Dates
              dates={this.state.dates}
              isOpen={this.state.openedFilter === "dates"}
              onClick={() => this.toggle("dates")}
              onApply={this.onApply}
            />
            <Guests
              guests={this.state.guests}
              isOpen={this.state.openedFilter === "guests"}
              onClick={() => this.toggle("guests")}
              onApply={this.onApply}
            />
          </Row>
        </Grid>
      </Filters>
    );
  }
}
