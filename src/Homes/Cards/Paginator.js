import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./pagenext.svg";
import mapicon from "../../assets/mapIcon.svg";

const Pagination = styled.div`
  position: relative;
  margin-top: 45px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const Pages = styled.div``;

const Page = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 15px;
  padding-top: 5px;
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: ${props => (props.active ? "#fff" : "#0F7276")};
  background: ${props => (props.active ? "#008489" : "")};
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  border-radius: 50%;
  @media (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const NextPages = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #008489;
  border-radius: 50%;
  color: red;
  box-sizing: border-box;
  background: url(${arrow}) no-repeat;
  background-position: center center;
  vertical-align: middle;
`;

const TotalPages = styled.span`
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 24px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

const FullPrices = styled.p`
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const MapIcon = styled.button`
  display: flex;
  margin-left: auto;
  bottom: 24px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  background: url(${mapicon}) no-repeat center;
  background-size: 16px 20px;
  margin-top: 15px;
  margin-bottom: 24px;
  @media (min-width: 992px) {
    display: none;
  }
`;

export default props => {
  return (
    <Pagination>
      <Grid>
        <Pages>
          <Page href="" active>
            1
          </Page>
          <Page href="">2</Page>
          <Page href="">3</Page>
          <Page>...</Page>
          <Page href="">17</Page>
          <NextPages href="" />
        </Pages>
        <TotalPages>1 – 18 of 300+ Rentals</TotalPages>
        <FullPrices>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </FullPrices>
        <MapIcon />
      </Grid>
    </Pagination>
  );
};
