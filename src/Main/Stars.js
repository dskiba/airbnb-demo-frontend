import React from "react";
import styled from "styled-components";
import star from "./star.png";

const StarsList = styled.span`
  display: inline-block;
  margin-right: 0.25rem;
`;

const Star = styled.span`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
  background-image: url(${star});
  background-size: cover;
`;

export default () => {
  return (
    <StarsList>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </StarsList>
  );
};
