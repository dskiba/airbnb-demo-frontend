import React from "react";
import styled from "styled-components";
import magnifier from "../assets/magnifier.svg";
import Navigation from "./Navigation";
import { Grid, Row, Col } from "react-flexbox-grid";
import Logo from "./Logo";

const Header = styled.header`
  text-align: center;
  margin-top: 16px;
  border-bottom: 1px solid #eee;
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

export default () => (
  <Header>
    <Grid>
      <Row>
        <Logo />
        <SearchFrom>
          <SearchInput
            type="text"
            name="search"
            placeholder="Try &quot;Miami&quot;"
          />
        </SearchFrom>
        <Navigation />
      </Row>
    </Grid>
  </Header>
);
