import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';

const MoreOptions = styled.div`
  @media screen and (min-width: 576px) {
    width: 60%;
  }
`;

const Title = styled.h3`
  margin: 0 0 4px 0;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

export default function (props) {
  return (
    <MoreOptions>
      <Title>More options</Title>
      <Filter
        name="Instant Book"
        annotation="Secure a reservation instantly."
        isChecked={props.instantBook}
        onChange={value => props.onChange('instantBook', value)}
        hideLg
      />
      <Filter
        name="Superhost"
        annotation="Stay with recognized hosts."
        isChecked={props.superhost}
        onChange={value => props.onChange('superhost', value)}
      />
    </MoreOptions>
  );
}
