import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import LanguageForm from "./LanguageForm";
import CurrencyForm from "./CurrencyForm";

const Footer = styled.footer`
  margin-top: 64px;
  background-color: #fff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Row>
          <Col lg={3}>
            <LanguageForm />
            <CurrencyForm />
          </Col>
        </Row>
      </div>
    </Footer>
  );
};
