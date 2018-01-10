import React from "react";
import styled from "styled-components";
import star from "./star.svg";

const Stars = styled.div`
  display: inline-block;
  margin-right: 8px;
`;

const Star = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-image: url(${star});
  background-size: cover;
`;

export default () => {
  return (
    <Stars>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Stars>
  );
};
