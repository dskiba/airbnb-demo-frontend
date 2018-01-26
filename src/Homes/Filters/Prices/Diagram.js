import React from 'react';
import styled from 'styled-components';

const Diagram = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Line = styled.div`
  width: 6px;
  padding-top: ${props => props.height}px;
  background-color: #d8d8d8;
`;

export default function () {
  return (
    <Diagram>
      <Line height={0} />
      <Line height={0} />
      <Line height={0} />
      <Line height={0} />
      <Line height={3} />
      <Line height={6} />
      <Line height={14} />
      <Line height={20} />
      <Line height={14} />
      <Line height={32} />
      <Line height={42} />
      <Line height={56} />
      <Line height={69} />
      <Line height={79} />
      <Line height={69} />
      <Line height={69} />
      <Line height={69} />
      <Line height={56} />
      <Line height={42} />
      <Line height={42} />
      <Line height={35} />
      <Line height={32} />
      <Line height={20} />
      <Line height={10} />
      <Line height={14} />
      <Line height={20} />
      <Line height={6} />
      <Line height={1} />
      <Line height={0} />
      <Line height={0} />
      <Line height={0} />
    </Diagram>
  );
}
