import React from 'react';
import isEqual from 'lodash/isEqual';

import Dropdown from '../Dropdown';
import Prices from './Filter';

const getStartPrice = (startPrice, endPrice, min, max) => {
  if (startPrice <= min) {
    return 'Up to ';
  }
  return startPrice + (endPrice < max ? '$ - ' : '$+');
};

const getEndPrice = (endPrice, max) => (endPrice === max ? '' : `${endPrice}$`);

const getTitle = ({ startPrice, endPrice }, min, max) =>
  (startPrice === min && endPrice === max
    ? 'Price'
    : getStartPrice(startPrice, endPrice, min, max) + getEndPrice(endPrice, max));

export default class Price extends React.Component {
  initialValues = {
    prices: {
      startPrice: 10,
      endPrice: 1000,
    },
    min: 10,
    max: 1000,
  };

  state = this.initialValues;

  onChange = (sliderState) => {
    this.setState({
      prices: {
        startPrice: sliderState.values[0],
        endPrice: sliderState.values[1],
      },
    });
  };

  onApply = () => this.props.onApply({ prices: this.state.prices });

  onReset = () => this.setState(this.initialValues);

  render() {
    return (
      <Dropdown
        name="Price"
        isOpen={this.props.isOpen}
        isActive={!isEqual(this.state, this.initialValues)}
        activeTitle={getTitle(this.state.prices, this.state.min, this.state.max)}
        onClick={this.props.onClick}
        onApply={this.onApply}
        onReset={this.onReset}
        isCancelOrReset={isEqual(this.state.prices, this.initialValues.prices)}
      >
        <Prices
          prices={this.state.prices}
          max={this.state.max}
          min={this.state.min}
          onChange={this.onChange}
          title={this.props.title}
        />
      </Dropdown>
    );
  }
}
