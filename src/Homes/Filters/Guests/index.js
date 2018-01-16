import React from "react";
import styled from "styled-components";

import Responsive from "react-responsive";

import Dropdown from "../Dropdown";

const Lg = props => <Responsive {...props} minWidth={992} />;
const Md = props => <Responsive {...props} minWidth={576} maxWidth={991} />;
const Sm = props => <Responsive {...props} maxWidth={575} />;

const Filter = styled.div``;

export default class Guests extends React.Component {
  render() {
    return (
      <Dropdown
        name="Guests"
        isOpen={this.props.isOpen}
        // activeTitle={getTitle(this.state.dates)}
        onClick={this.props.onClick}
        onApply={this.onApply}
      >
        <Filter>Adults</Filter>
      </Dropdown>
    );
  }
}
