import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import LanguageForm from "./LanguageForm";

const Footer = styled.footer`
  background-color: #fff;
  box-shadow: 0px -0.03rem 0 rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Row>
          <Col lg={3}>
            <LanguageForm />
          </Col>
        </Row>
      </div>
    </Footer>
  );
};
