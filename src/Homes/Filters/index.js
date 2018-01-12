import React from "react";
import styled, { css } from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Filters = styled.header`
  display: flex;
  position: fixed;
  top: 81px;
  width: 100%;
  align-content: flex-start;
  padding-top: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  z-index: 2;
`;

const FilterButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 7px 16px;
  margin-right: 12px;
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(216, 216, 216, 0.3);
  }
  &:active {
    background: #008489;
    color: #fff;
  }
  @media (min-width: 992px) {
    display: inline-block;
  }
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
`;

export default () => {
  return (
    <Filters>
      <Grid>
        <FilterButton>Dates</FilterButton>
        <FilterButton>Guests</FilterButton>
        <FilterButton hidden>Room type</FilterButton>
        <FilterButton hidden>Price</FilterButton>
        <FilterButton hidden>Instant book</FilterButton>
        <FilterButton>More filters</FilterButton>
      </Grid>
    </Filters>
  );
};
