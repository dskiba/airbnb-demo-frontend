import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import omit from "lodash/omit";
import exit from "../../../assets/plus.svg";

const Filter = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  @media (min-width: 576px) {
    position: absolute;
    top: 40px;
    left: 0;
    display: inline-block;
  }
`;

const Btn = styled.button`
  display: inline-block;
  position: relative;
  padding: 7px 16px;
  margin-right: 12px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #383838;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};

  &:focus {
    background-color: #008489;
  }
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reset = styled.button`
  padding: 20px;
  border: none;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
  background-color: #fff;
  cursor: pointer;
`;

const Apply = styled.button`
  padding: 20px;
  border: none;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #008489;
  background-color: #fff;
  cursor: pointer;
`;

export default class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.autoFocusEndDate ? "startDate" : "endDate",
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      isOpen: false
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  matchMobile = () => {
    if (window.matchMedia("(max-width: 768px)").matches) return true;
  };

  FilterStatus = (startDateString, endDateString) => {
    if (this.state.startDate && this.state.endDate) {
      return `${startDateString} — ${endDateString}`;
    } else if (this.state.isOpen) {
      return "Check in — Check out";
    } else {
      return "Dates";
    }
  };

  renderCalendarInfo = () => {
    return (
      <Menu>
        {this.state.startDate && this.state.endDate ? (
          <Reset onClick={this.Reset}>Reset</Reset>
        ) : (
          <Reset onClick={this.changeOpen}>Cancel</Reset>
        )}
        <Apply onClick={this.changeOpen}>Apply</Apply>
      </Menu>
    );
  };

  Reset = () => {
    this.setState({ startDate: null, endDate: null });
  };

  toggleOpen = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  };

  render() {
    const { isOpen, startDate, endDate, focusedInput } = this.state;

    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate"
    ]);

    const startDateString = startDate && startDate.format("DD-MM-YY");
    const endDateString = endDate && endDate.format("DD-MM-YY");

    const DayPicker = (
      <DayPickerRangeController
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        }
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
        isOpen={isOpen}
        renderCalendarInfo={this.renderCalendarInfo}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        onOutsideClick={this.toggleOpen}
        orientation={this.matchMobile() ? "vertical" : "horizontal"}
      />
    );

    return (
      <React.Fragment>
        <Btn isOpen={this.state.isOpen} onClick={this.toggleOpen}>
          {this.FilterStatus(startDateString, endDateString)}
          <Filter isOpen={isOpen}>{isOpen ? DayPicker : null}</Filter>
        </Btn>
      </React.Fragment>
    );
  }
}
