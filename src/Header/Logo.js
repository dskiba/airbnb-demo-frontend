import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';
import logo from './logo.svg';

const Logo = styled.div`
  display: inline-block;
  margin-left: 6px;
`;

const Img = styled.img`
  margin-top: 8px;
  height: 32px;
  width: 32px;
`;

const Link = styled(RouteLink)`
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
  <Logo>
    <Link to="/">
      <Img alt="Logo" src={logo} />
      <Humburger />
    </Link>
  </Logo>
);
