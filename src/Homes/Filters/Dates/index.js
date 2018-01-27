import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import isEqual from 'lodash/isEqual';

import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './ReactDates.css';

import { Sm, Md, Lg } from '../../../UI/Responsive';
import Dropdown from '../Dropdown';
import arrow from '../arrow.svg';

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
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  border: none;
  border-bottom: ${props => (props.isActive ? '1px solid #008489' : 'none')};
  color: ${props => (props.isActive ? '#0F7276' : '#636363')};
`;
const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

const getStartDate = date => (date ? date.format('MMM Do') : 'Check in');
const getEndDate = date => (date ? date.format('MMM Do') : 'Check out');

const getTitle = ({ startDate, endDate }) => `${getStartDate(startDate)} - ${getEndDate(endDate)}`;

export default class Dates extends React.Component {
  initialValues = {
    dates: {
      startDate: null,
      endDate: null,
    },
    focusedInput: 'startDate',
  };

  state = this.initialValues;

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      dates: { startDate, endDate },
    });
  };

  onFocusChange = (focusedInput) => {
    this.setState({
      focusedInput: focusedInput || 'startDate',
    });
  };

  onApply = () => this.props.onApply({ dates: this.state.dates });

  onReset = () => this.setState(this.initialValues);

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
        isCancelOrReset={isEqual(this.state.dates, this.initialValues.dates)}
        showSm
        showLg
      >
        <Calendar>
          <Sm>
            <SmWrapper>
              <Input isActive readOnly value={getStartDate(this.state.dates.startDate)} />
              <Arrow src={arrow} />
              <Input readOnly value={getEndDate(this.state.dates.endDate)} />
            </SmWrapper>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel
              numberOfMonths={2}
              orientation="vertical"
              verticalHeight={560}
              isOutsideRange={day => day.isBefore(moment(), 'day')}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Sm>
          <Md>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel
              numberOfMonths={1}
              isOutsideRange={day => day.isBefore(moment(), 'day')}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Md>
          <Lg>
            <DayPickerRangeController
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              hideKeyboardShortcutsPanel
              numberOfMonths={2}
              isOutsideRange={day => day.isBefore(moment(), 'day')}
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
