import React from 'react';
import styled from 'styled-components';

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    margin-right: 0px;
  }
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
`;

const Num = styled.span`
  width: 38px;
  margin-left: 19px;
  margin-right: 19px;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
`;

export default function (props) {
  return (
    <Counter>
      <Button disabled={props.value == props.min} onClick={() => props.onClick(props.name, -1)}>
        <span>-</span>
      </Button>
      <Num>
        {props.value} {props.value > 1 ? '+' : ''}
      </Num>
      <Button onClick={() => props.onClick(props.name, +1)}>
        <span>+</span>
      </Button>
    </Counter>
  );
}
