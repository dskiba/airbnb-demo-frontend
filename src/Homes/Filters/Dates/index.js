import React from "react";
import styled from "styled-components";

import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import moment from "moment";

import Responsive from "react-responsive";

import isEqual from "lodash/isEqual";
import Dropdown from "../Dropdown";
import arrow from "../arrow.svg";

const Lg = props => <Responsive {...props} minWidth={992} />;
const Md = props => <Responsive {...props} minWidth={576} maxWidth={991} />;
const Sm = props => <Responsive {...props} maxWidth={575} />;

const Calendar = styled.div``;

const SmWrapper = styled.div`
  padding-top: 40px;
  padding-left: 8px;
  display: flex;
  justify-content: start;
`;

const Input = styled.input`
  max-width: 30%;
  display: inline-block;
  box-sizing: border-box;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  border: none;
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  color: ${props => (props.isActive ? "#0F7276" : "#636363")};
`;
const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

const getStartDate = date => (date ? date.format("MMM Do") : "Check in");
const getEndDate = date => (date ? date.format("MMM Do") : "Check out");

const getTitle = ({ startDate, endDate }) => {
  return getStartDate(startDate) + " - " + getEndDate(endDate);
};

export default class Dates extends React.Component {
  initialValues = {
    dates: {
      startDate: null,
      endDate: null
    },
    focusedInput: "startDate",
    isTouchDevice: true
  };

  state = this.initialValues;

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      dates: {
        startDate,
        endDate
      }
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: focusedInput || "startDate"
    });
  };

  onApply = () => this.props.onApply({ dates: this.state.dates });

  onReset = () => this.setState({ dates: { startDate: null, endDate: null } });

  isReset = () => this.props.isReset();

  render() {
    return (
      <Dropdown
        name="Dates"
        isOpen={this.props.isOpen}
        isActive={!isEqual(this.state, this.initialValues)}
        activeTitle={getTitle(this.state.dates)}
        onClick={this.props.onClick}
        onApply={this.onApply}
        onReset={this.onReset}
        isReset={isEqual(this.state.dates, this.initialValues.dates)}
      >
        <Calendar>
          <Sm>
            <SmWrapper>
              <Input
                isActive
                readOnly
                value={getStartDate(this.state.dates.startDate)}
              />
              <Arrow src={arrow} />
              <Input readOnly value={getEndDate(this.state.dates.endDate)} />
            </SmWrapper>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel={true}
              numberOfMonths={12}
              orientation="vertical"
              verticalHeight={568}
              isOutsideRange={day => day.isBefore(moment(), "day")}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Sm>
          <Md>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel={true}
              numberOfMonths={1}
              isOutsideRange={day => day.isBefore(moment(), "day")}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Md>
          <Lg>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel={true}
              numberOfMonths={2}
              isOutsideRange={day => day.isBefore(moment(), "day")}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Lg>
        </Calendar>
      </Dropdown>
    );
  }
}
