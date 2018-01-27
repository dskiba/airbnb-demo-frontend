import React from 'react';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import Dropdown from '../Dropdown';
import Option from './Filter';

const Filter = styled(Option)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 326px;
`;

export default class InstantBook extends React.Component {
  initialValues = {
    instantBook: false,
  };

  state = this.initialValues;

  onChange = (value) => {
    this.setState({ instantBook: value });
  };

  onApply = () => this.props.onApply({ instantBook: this.state.instantBook });

  onReset = () => this.setState(this.initialValues);

  render() {
    return (
      <Dropdown
        name="Instant Book"
        isOpen={this.props.isOpen}
        isActive={this.state.instantBook}
        onClick={this.props.onClick}
        onApply={this.onApply}
        onReset={this.onReset}
        isCancelOrReset={isEqual(this.state.instantBook, this.initialValues.instantBook)}
      >
        <Filter
          name="Instant Book"
          annotation="Listings you can book without waiting for host approval."
          isChecked={this.state.instantBook}
          onChange={this.onChange}
        />
      </Dropdown>
    );
  }
}
