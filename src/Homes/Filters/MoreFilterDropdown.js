import React from 'react';
import styled from 'styled-components';

import { Grid, Col } from 'react-flexbox-grid';
import {
  BtnContainer,
  Filter,
  Overflow,
  Header,
  Close,
  Clear,
  Title,
  MobileButton,
} from './Dropdown';

const ConfirmButton = styled.button`
  display: none;
  @media screen and (min-width: 576px) {
    padding: 12px 28px;
    display: block;
    background-color: #008489;
    font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  display: none;
  @media screen and (min-width: 576px) {
    margin-right: 8px;
    padding: 12px 8px;
    display: block;
    font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #383838;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 991px) {
    bottom: 8;
    padding-top: 32px;
    margin-bottom: 8px;
    justify-content: flex-end;
  }
`;

const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  overflow: auto;
  z-index: 5;
  @media screen and (min-width: 576px) {
    top: 136px;
  }
  @media screen and (min-width: 991px) {
  }
`;

export default function (props) {
  return (
    <BtnContainer>
      <Filter
        onClick={props.onClick}
        isOpen={props.isOpen}
        isActive={props.isActive}
        showLg={props.showLg}
      >
        {props.activeTitle && (props.isOpen || props.isActive) ? props.activeTitle : props.name}
      </Filter>
      {props.isOpen && (
        <div>
          <Overflow onClick={props.onClick} />

          <DropDownWrapper>
            <Grid>
              <Col xs={12} lg={8}>
                <Header>
                  <Close onClick={props.onClick} />
                  <Title>All filters (0)</Title>
                  <Clear onClick={props.onClick}>Clear All</Clear>
                </Header>
                {props.children}
                <Footer>
                  <CancelButton onClick={props.onClick}>Cancel</CancelButton>
                  <ConfirmButton onClick={props.onApply} isPrimary>
                    See homes
                  </ConfirmButton>
                  <MobileButton onClick={props.onApply}>See homes</MobileButton>
                </Footer>
              </Col>
            </Grid>
          </DropDownWrapper>
        </div>
      )}
    </BtnContainer>
  );
}
