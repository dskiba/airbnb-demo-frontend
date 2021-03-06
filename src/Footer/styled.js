import styled from 'styled-components';
import arrow from '../assets/arrow.svg';

export const Form = styled.form`
  margin-top: 16px;
  margin-bottom: 20px;
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
  font-family: "Circular Air Light", Helvetica Neue, Helvetica, Arial,
    sans-serif;

  color: #383838;

  font-size: 12px;
  line-height: 14px;
  height: 40px;
  @media (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
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
  font-family: "Circular Air Bold", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 14px;

  margin-bottom: 16px;
  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 8px;
  color: #636363;
  font-size: 12px;
  line-height: 14px;
  &:last-child {
    margin-bottom: 48px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Copyright = styled.a`
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;
  color: #636363;
  margin-bottom: 35px;
  font-size: 12px;
  line-height: 14px;
  margin-right: 20px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    margom-right: 0;
  }
`;
