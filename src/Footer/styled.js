import styled from "styled-components";
import arrow from "./arrow.svg";

export const Form = styled.form`
  margin-top: 48px;
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

export const Select = styled.select`
  appearance: none;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  padding: 0.5em 3.5em 0.5em 1em;
  background-image: url(${arrow});
  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-repeat: no-repeat;

  padding-left: 16px;
  font-family: "Circular_Air-Light";
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    height: 40px;
  }
`;

export const Option = styled.option``;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavTitle = styled.h4`
  margin-top: 48px;
  font-family: "Circular_Air-Bol";
  line-height: 18px;
  font-size: 15px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  line-height: 18px;
  margin-bottom: 8px;
  color: #636363;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }

  &:last-child {
    margin-bottom: 48px;
  }
`;

export const Copyright = styled.a`
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    margin-right: 20px;
  }
`;
