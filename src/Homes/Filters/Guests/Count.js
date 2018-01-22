import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 19px;
  margin-right: 19px;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
`;

export default function(props) {
  return (
    <Counter>
      <Button>
        <span>-</span>
      </Button>
      <Num>0</Num>
      <Button>
        <span>+</span>
      </Button>
    </Counter>
  );
}
