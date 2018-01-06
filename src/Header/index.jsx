import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import shape from "./shape.png";
import Navigation from "./Navigation";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "../Footer/arrow.svg";

const Header = styled.header`
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.img`
  margin-top: 9px;
  height: 32px;
  width: 32px;
`;
const Humburger = styled.button`
  display: none;
  @media (max-width: 991px) {
    position: absolute;
    top: 40px;
    display: inline-block;
    margin-bottom: 20px;
    width: 12px;
    height: 6px;
    background: url(${arrow}) no-repeat;
    background-color: $fff;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
    cursor: pointer;
  }
`;
const SearchFrom = styled.form`
  margin-bottom: 16px;
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
  font-size: 16px;
  color: #383838;
  opacity: 0.64;
  background: url(${shape}) no-repeat 16px 13px;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export default () => (
  <Header>
    <div className="container">
      <Row>
        <Col lg={1} md={1} xs={2}>
          <a href="/">
            <Logo alt="Logo" src={logo} />
            <Humburger />
          </a>
        </Col>
        <Col lg={5} md={7} xs={10}>
          <SearchFrom>
            <SearchInput
              type="text"
              name="search"
              placeholder="Try &quot;Miami&quot;"
            />
          </SearchFrom>
        </Col>
        <Col lg={6} md={6}>
          <Navigation />
        </Col>
      </Row>
    </div>
  </Header>
);
