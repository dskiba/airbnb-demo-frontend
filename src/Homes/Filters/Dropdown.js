import React from 'react';
import styled from 'styled-components';
import closeIcon from './plus.svg';

export const BtnContainer = styled.div`
  display: inline-block;
`;

export const Filter = styled.button`
  margin-right: 12px;
  padding: 7px 16px;
  display: ${props => (props.showLg ? 'inline-block' : 'none')};
  background-color: ${props => (props.isOpen || props.isActive ? '#008489' : '#fff')};
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.isOpen || props.isActive ? '#fff' : '#383838')};
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  @media screen and (min-width: 991px) {
    display: flex;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  margin-top: 8px;
  width: 100%;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  z-index: 111;

  border-top: 1px solid #dbdbdb;
  @media screen and (min-width: 576px) {
    border-top: none;
    bottom: 0;
    border: none;
    box-shadow: none;
    justify-content: space-between;
    position: relative;
  }
`;

export const Header = styled.header`
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #fff;
  border: none;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
`;

export const Clear = styled.button`
  border: none;
  background-color: #fff;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #0f7276;
`;

export const Button = styled.button`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    margin-top: 8px;
    width: 110px;
    height: 64px;
    box-sizing: border-box;
    font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 18px;
    background-color: #fff;
    border: none;
    color: ${props => (props.isPrimary ? '#008489' : '#636363')};
  }
`;

const Apply = Button.extend``;
const Cancel = Button.extend``;
const Reset = Button.extend``;

export const MobileButton = styled.button`
  position: fixed;
  bottom: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 304px;
  font-family: 'Circular Air Bold', Helvetica Neue, Helvetica, Arial, sans-serif;
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

const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 61;
  @media screen and (min-width: 576px) {
    position: absolute;
    top: 100%;
    right: auto;
    left: auto;
    bottom: auto;
    background-color: #fff;
    display: inline-block;
    background: #ffffff;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

export const Overflow = styled.div`
  position: absolute;
  height: 100vh;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 1;
`;

export default function (props) {
  return (
    <BtnContainer>
      <Filter
        onClick={props.onClick}
        isOpen={props.isOpen}
        isActive={props.isActive}
        showLg={props.showLg}
        showSm={props.showSm}
      >
        {props.activeTitle && props.isActive ? props.activeTitle : props.name}
      </Filter>
      {props.isOpen && (
        <div>
          <Overflow onClick={props.onClick} />
          <DropDownWrapper>
            <Header>
              <Close onClick={props.onClick} />
              <Title>{props.name}</Title>
              <Clear onClick={props.onClick}>{props.clearTitle || 'Reset'}</Clear>
            </Header>
            {props.children}
            <Footer>
              {props.isCancelOrReset ? (
                <Cancel onClick={props.onClick}>Cancel</Cancel>
              ) : (
                <Reset onClick={props.onReset}>Reset</Reset>
              )}

              <Apply onClick={props.onApply} isPrimary>
                Apply
              </Apply>
              <MobileButton onClick={props.onApply}>Save</MobileButton>
            </Footer>
          </DropDownWrapper>
        </div>
      )}
    </BtnContainer>
  );
}
