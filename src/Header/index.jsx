import React from "react";
import styled from "styled-components";
import magnifier from "../assets/magnifier.svg";
import Navigation from "./Navigation";
import { Grid, Row, Col } from "react-flexbox-grid";
import Logo from "./Logo";

const Header = styled.header`
  text-align: center;
  padding-top: 16px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  align-items: center;
  background: #fff;
  box-shadow: 0 0.5px 0 rgba(72, 72, 72, 0.3);
  }
`;

const SearchFrom = styled.form`
  margin-bottom: 16px;
  margin-left: 51px;
  @media (min-width: 768px) {
    width: 432px;
  }
  @media (min-width: 991px) {
    width: 392px;
  }
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  padding-left: 53px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
  opacity: 0.64;
  background: url(${magnifier}) no-repeat 16px 13px;
  @media (min-width: 991px) {
    font-size: 16px;
  }
`;

export default props => (
  <Header>
    <Grid>
      <Row start="xs">
        <Logo />
        <SearchFrom>
          <SearchInput
            type="text"
            name="search"
            placeholder={props.placeholder}
          />
        </SearchFrom>
        <Navigation />
      </Row>
    </Grid>
  </Header>
);
