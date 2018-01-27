import React from 'react';
import styled from 'styled-components';
import checkOn from './checked.svg';

const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  ${Input}:checked ~ & {
    background-color: #008489;
  }
`;

const Icon = styled.img``;

const Wrapper = styled.div`
  position: relative;
  align-self: flex-start;
`;

export default function (props) {
  const onChange = () => props.handleChange({ [props.name]: !props.isChecked });

  return (
    <Wrapper>
      <Input checked={props.isChecked} onChange={onChange} />
      <Checkbox onChange={onChange}>
        <Icon src={checkOn} />
      </Checkbox>
    </Wrapper>
  );
}
