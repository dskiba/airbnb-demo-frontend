import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import logo from "./logo.svg";

const Img = styled.img`
  margin-top: 9px;
  height: 32px;
  width: 32px;
`;

const Link = styled.a`
  display: inline-block;
  text-align: center;
`;

const Humburger = styled.button`
  position: absolute;
  top: 40px;
  display: inline-block;
  margin-left: 7px;
  margin-bottom: 20px;
  width: 12px;
  height: 7px;
  background: url(${arrow}) no-repeat;
  background-color: $fff;
  background-cover: cover;
  background-position: center center;
  border: none;
  cursor: pointer;
  @media (min-width: 991px) {
    display: none;
  }
`;

export default () => (
  <Link href="/">
    <Img alt="Logo" src={logo} />
    <Humburger />
  </Link>
);
