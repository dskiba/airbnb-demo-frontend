import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import shape from "./shape.png";
import Navigation from "./Navigation";

const Header = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-top: 24px;
  height: 32px;
`;

const SearchBar = styled.input`
  width: 392px;
  height: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 51px;
  margin-right: auto;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  opacity: 0.64;
  padding-left: 55px;
  background: url(${shape}) no-repeat 16px 13px;
`;

export default () => (
  <header>
    <Header className="container">
      <a href="/">
        <Logo alt="Logo" src={logo} />
      </a>
      <SearchBar
        type="text"
        name="search"
        placeholder="Try &quot;Miami&quot;"
      />
      <Navigation />
    </Header>
  </header>
);
