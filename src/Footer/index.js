import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Nav, NavTitle, Link, Copyright } from "./styled";
import logo from "./logo.svg";
import Language from "./LanguageForm";
import Currency from "./CurrencyForm";
import SideNav from "./SideNav";

const Footer = styled.footer`
  margin-top: 64px;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  border-bottom: 1px solid #eee;
`;

const SecondFooter = styled.footer`
  border-top: 1px solid #eee;
  padding-top: 34px;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 20.5px;
  height: 22px;
  fill: #dadada;
  margin-right: 12.5px;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Row>
          <Col lg={3} md={3} xs={12}>
            <Row>
              <Col lg={12} md={12} xs={6}>
                <Language />
              </Col>
              <Col lg={12} md={12} xs={6}>
                <Currency />
              </Col>
            </Row>
          </Col>

          <Col lgOffset={1} lg={2} mdOffset={1} md={2}>
            <Nav>
              <NavTitle>Airbnb</NavTitle>
              <Link href="/">About us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Press</Link>
              <Link href="/">Policies</Link>
              <Link href="/">Help</Link>
              <Link href="/">Diversity & Belonging</Link>
            </Nav>
          </Col>
          <Col lgOffset={1} lg={2} mdOffset={1} md={2}>
            <Nav>
              <NavTitle>Discover</NavTitle>
              <Link href="/">Trust & Safety</Link>
              <Link href="/">Travel Credit</Link>
              <Link href="/">Gift Cards</Link>
              <Link href="/">Airbnb Citizen</Link>
              <Link href="/">Business Travel</Link>
              <Link href="/">Guidebooks</Link>
              <Link href="/">Airbnbmag</Link>
            </Nav>
          </Col>
          <Col lgOffset={1} lg={2} mdOffset={1} md={2}>
            <Nav>
              <NavTitle>Hosting</NavTitle>
              <Link href="/">Why Host</Link>
              <Link href="/">Hospitality</Link>
              <Link href="/">Responsible Hosting</Link>
              <Link href="/">Community Center</Link>
            </Nav>
          </Col>
        </Row>
      </div>
      <SecondFooter>
        <div className="container">
          <Row>
            <Col lg={2} md={3} sm={3}>
              <Copyright href="/">
                <Logo alt="Logo" src={logo} />
                © Airbnb Inc.
              </Copyright>
            </Col>
            <Col lgOffset={6} lg={4} sm={7} smOffset={1} md={8}>
              <SideNav />
            </Col>
          </Row>
        </div>
      </SecondFooter>
    </Footer>
  );
};
