import styled from "styled-components";
import arrow from "./arrow.svg";

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  top: 0;
  left: 0;

  width: 100%;
  height: 48px;
`;

export const SelectButton = styled.button`
  display: absolute;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  text-align: left;
  background-color: #fff;
  background-image: url(${arrow});
  background-size: 15px 8px;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  opacity: 0;
  z-index: 1;
`;

export const Option = styled.option``;
