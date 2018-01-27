import React from 'react';
import styled from 'styled-components';
import checkOn from '../../../assets/checkOn.svg';
import plus from '../plus.svg';

const RadioButton = styled.button`
  position: relative;
  min-width: 64px;
  width: 64px;
  height: 42px;
  background-color: ${props => (props.isChecked ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  border: 1px solid
    ${props => (props.isChecked ? 'rgba(0, 132, 137, 0.3)' : 'rgba(72, 72, 72, 0.3)')};
  border-radius: 24px;
  transition: all 0.3s;
  cursor: pointer;
  margin-left: 30px;
`;

const Check = styled.div`
  position: absolute;
  top: -1px;
  left: ${props => (props.isChecked ? '23px' : '-1px')};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${props => (props.isChecked ? '#008489' : 'rgba(72, 72, 72, 0.3)')};
  border-radius: 50%;
  transition: all 0.3s;
`;

const Icon = styled.img``;

export default function (props) {
  return (
    <RadioButton onClick={props.onChange} isChecked={props.isChecked}>
      <Check isChecked={props.isChecked}>
        {props.isChecked ? <Icon src={checkOn} /> : <Icon src={plus} />}
      </Check>
    </RadioButton>
  );
}
