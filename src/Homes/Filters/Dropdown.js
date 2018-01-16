import React from "react";
import styled from "styled-components";
import closeIcon from "./plus.svg";
import arrow from "./arrow.svg";

const Filter = styled.button`
  margin-right: 12px;
  padding: 7px 16px;
  display: ${props => (props.showLg ? "none" : "inline-block")};
  background-color: ${props =>
    props.isOpen || props.isActive ? "#008489" : "#fff"};
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.isOpen || props.isActive ? "#fff" : "#383838")};
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  width: 100%;
  @media screen and (min-width: 576px) {
    justify-content: space-between;
    position: relative;
  }
`;

const Header = styled.header`
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const Close = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #fff;
  border: none;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
`;

const Clear = styled.button`
  border: none;
  background-color: #fff;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #0f7276;
`;

const ConfirmButton = styled.button`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    box-sizing: border-box;
    padding: 30px 40px;
    font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 18px;
    background-color: #fff;
    border: none;
    color: ${props => (props.isPrimary ? "#008489" : "#636363")};
  }
`;

const MobileButton = styled.button`
  padding: 12px 132px;
  font-family: "Circular Air Bold", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  background-color: #ff5a5f;
  border: none;
  border-radius: 4px;
  color: #fff;
  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const Input = styled.input`
  font-weight: 200;
  font-size: 18px;
  border: none;
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  color: ${props => (props.isActive ? "#0F7276" : "#636363")};
`;
const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  @media screen and (min-width: 576px) {
    position: absolute;
    top: 100%;
    right: auto;
    left: auto;
    bottom: auto;
    background-color: #fff;
    padding: 24px 16px 0 16px;
    display: inline-block;
    background: #ffffff;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

const Overflow = styled.div`
  position: absolute;
  height: 100vh;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.75);
`;

export default function(props) {
  return (
    <div>
      <Filter
        onClick={props.onClick}
        isOpen={props.isOpen}
        isActive={props.isActive}
        showLg={props.showLg}
      >
        {props.activeTitle && (props.isOpen || props.isActive)
          ? props.activeTitle
          : props.name}
      </Filter>
      {props.isOpen && (
        <div>
          <Overflow />
          <DropDownWrapper>
            <Header>
              <Close onClick={props.onClick} />
              <Title>{props.name}</Title>
              <Clear onClick={props.onClick}>
                {props.clearTitle || "Reset"}
              </Clear>
            </Header>
            {props.children}
            <Footer>
              {props.isReset ? (
                <ConfirmButton onClick={props.onClick}>Cancel</ConfirmButton>
              ) : (
                <ConfirmButton onClick={props.onReset}>Reset</ConfirmButton>
              )}

              <ConfirmButton onClick={props.onApply} isPrimary>
                Apply
              </ConfirmButton>
              <MobileButton onClick={props.onApply}>Save</MobileButton>
            </Footer>
          </DropDownWrapper>
        </div>
      )}
    </div>
  );
}
