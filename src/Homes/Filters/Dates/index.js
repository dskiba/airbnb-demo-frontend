import React, { Component } from "react";
import styled, { css } from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import { DayPickerRangeController, isInclusivelyAfterDay } from "react-dates";
import omit from "lodash/omit";
import moment from "moment";
import cross from "../../../assets/plus.svg";

const Btn = styled.button`
  position: relative;
  margin-right: 8px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #383838;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  background: ${props => (props.isOpen ? "#008489" : "transparent")};
`;

const Filter = styled.div`
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

const DayPicker = styled(DayPickerRangeController)`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 8px;
  @media (min-width: 576px) {
    display: none;
  }
`;

const Caption = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #383838;
`;

const Exit = styled.button`
  width: 16px;
  height: 16px;
  background: url(${cross}) no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const Reset = styled.button`
  padding: 0;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #0f7276;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cancel = styled.button`
  width: 110px;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #636363;
  background: transparent;
  cursor: pointer;
`;

const Apply = styled.button`
  width: 110px;
  border: none;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #008489;
  background: transparent;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 137px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
`;

const DatesRange = styled.div`
  padding: 8px;
  padding-top: 30px;
  text-align: left;
  @media (min-width: 576px) {
    display: none;
  }
`;

const StartDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.startDate ? "#636363" : "#0f7276")};
  border-bottom: ${props => (props.startDate ? "none" : "1px solid #008489")};
`;

const EndDate = styled.span`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.startDate ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.startDate ? "1px solid #008489" : "none")};
`;

const Bottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding: 8px;
  box-shadow: 0 -1px #d5d5d5;
  z-index: 2;
  background: #fff;
  @media (min-width: 576px) {
    padding: 0;
    box-shadow: none;
    z-index: 1;
    background: transparent;
  }
`;

const CalendarRow = styled.div`
  position: relative;
  top: -12px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  height: 48px;
  padding: 8px;
`;

const Save = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: Bold;
  color: #fff;
  background: #ff5a5f;
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`;

export default class Dates extends React.Component {
  state = {
    focused: true,
    isOpen: false,
    isTouchDevice: true,
    focusedInput: this.props.autoFocusEndDate ? "startDate" : "endDate",
    startDate: this.props.initialStartDate,
    endDate: this.props.initialEndDate
  };

  onDatesChange = this.onDatesChange.bind(this);
  onFocusChange = this.onFocusChange.bind(this);

  FilterStatus = (startDateString, endDateString) => {
    if (startDateString && endDateString) {
      return `${startDateString} — ${endDateString}`;
    } else if (this.state.isOpen) {
      return "Check in — Check out";
    } else {
      return "Dates";
    }
  };

  renderCalendarInfo = () => {
    return (
      <CalendarRow>
        {this.state.startDate && this.state.endDate ? (
          <Cancel onClick={this.onReset}>Reset</Cancel>
        ) : (
          <Cancel onClick={this.toggleOpen}>Cancel</Cancel>
        )}
        <Apply onClick={this.props.onSave}>Apply</Apply>
      </CalendarRow>
    );
  };

  onReset = () => {
    this.setState({ startDate: null, endDate: null });
  };

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  toggleOpen = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  };

  numberOfMonths() {
    return matchMedia("(min-width: 992px)").matches ? 2 : 1;
  }

  render() {
    const {
      isOpen,
      startDate,
      endDate,
      isTouchDevice,
      focusedInput
    } = this.state;

    const startDateString = startDate && startDate.format("YYYY-MM-DD");
    const endDateString = endDate && endDate.format("YYYY-MM-DD");

    return (
      <React.Fragment>
        <Btn isOpen={isOpen} onClick={this.toggleOpen}>
          {this.FilterStatus(startDateString, endDateString)}
          {isOpen ? this.filter : null}
          {isOpen ? (
            <Filter isOpen={isOpen}>
              <Header>
                <Exit />
                <Caption>Dates</Caption>
                <Reset onClick={this.onReset}>Reset</Reset>
              </Header>
              <DatesRange>
                <StartDate startDate={startDate}>
                  {startDate ? startDateString : "Check-in"}
                </StartDate>
                <EndDate endDate={endDate} startDate={startDate}>
                  {endDate ? endDateString : "Check-out"}
                </EndDate>
              </DatesRange>
              <DayPicker
                numberOfMonths={
                  matchMedia("(min-width: 992px)").matches
                    ? 2
                    : matchMedia("(min-width: 576px)").matches ? 1 : 12
                }
                isTouchDevice={isTouchDevice}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                hideKeyboardShortcutsPanel
                isOpen={isOpen}
                renderCalendarInfo={
                  matchMedia("(min-width: 576px)").matches
                    ? this.renderCalendarInfo
                    : null
                }
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                onClickOutside="false"
                orientation={
                  matchMedia("(min-width: 576px)").matches
                    ? "horizontal"
                    : "verticalScrollable"
                }
              />
              <Bottom>
                <Save onClick={this.props.onSave}>Save</Save>
              </Bottom>
            </Filter>
          ) : null}
        </Btn>
        {isOpen ? <Overlay onClick={this.toggleOpen} /> : null}
      </React.Fragment>
    );
  }
}
