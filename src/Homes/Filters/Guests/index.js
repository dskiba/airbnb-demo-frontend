import React from "react";
import styled from "styled-components";

import Responsive from "react-responsive";
import isEqual from "lodash/isEqual";

import Dropdown from "../Dropdown";
import Counter from "./Count";

const Lg = props => <Responsive {...props} minWidth={992} />;
const Md = props => <Responsive {...props} minWidth={576} maxWidth={991} />;
const Sm = props => <Responsive {...props} maxWidth={575} />;

const Filters = styled.div`
  height: 100vh;
  padding-top: 28px;
  @media screen and (min-width: 576px) {
    padding-top: 0px;
    width: 294px;
    height: auto;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Title = styled.p`
  margin: 0;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  flex-grow: 2;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-hight: 23px;
  }
`;

const Specifically = styled.p`
  margin: 0;
  padding-top: 8px;
  font-family: "Circular Air Light", Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  line-height: 16px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

const Num = styled.div`
  width: 48px;
  font-weight: 200;
  font-size: 18px;
  text-align: center;
`;

export default class Guests extends React.Component {
  // initialValues = {};

  // state = this.initialValues;

  // onClick = () => ;

  // onChange = () = => ;

  // onApply = () => ;

  render() {
    return (
      <Dropdown
        name="Guests"
        isOpen={this.props.isOpen}
        isActive={!isEqual(this.state, this.initialValues)}
        mobileTitle="Save"
        onClick={this.props.onClick}
        onApply={this.onApply}
      >
        <Filters>
          <Filter>
            <Title>Adults</Title>
            <Counter name="adults" onClick={this.onClick} />
          </Filter>
          <Filter>
            <div>
              <Title>Children</Title>
              <Specifically>Ages 2 — 12</Specifically>
            </div>
            <Counter name="children" onClick={this.onClick} />
          </Filter>
          <Filter>
            <div>
              <Title>Infants</Title>
              <Specifically>Under 2</Specifically>
            </div>
            <Counter name="infants" onClick={this.onClick} />
          </Filter>
        </Filters>
      </Dropdown>
    );
  }
}
