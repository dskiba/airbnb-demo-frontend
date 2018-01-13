import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const Wrapper = styled.div`
  position: relative;
`;

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isTouchDevice: true,
      focusedInput: props.autoFocusEndDate ? "startDate" : "endDate",
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      isLog: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  renderBtnInfo = (startDateString, endDateString) => {
    if (this.state.startDate && this.state.endDate) {
      return `${startDateString} — ${endDateString}`;
    } else if (this.state.isOpen) {
      return "Check in — Check out";
    } else {
      return "Dates";
    }
  };

  onReset = () => {
    this.setState({ startDate: null, endDate: null });
    this.changeOpen();
  };

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  changeOpen = () => {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  };

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

    const calendar = (
      <DayPicker
        numberOfMonths={matchMedia("(min-width: 992px)").matches ? 2 : 1}
        isTouchDevice={isTouchDevice}
        hideKeyboardShortcutsPanel
        isOpen={isOpen}
        renderCalendarInfo={this.renderCalendarInfo}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
      />
    );

    return (
      <React.Fragment>
        <Wrapper>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </Wrapper>
      </React.Fragment>
    );
  }
}
