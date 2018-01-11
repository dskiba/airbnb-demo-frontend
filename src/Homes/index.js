import React from "react";
import styled from "styled-components";
import Filters from "./Filters";
import Cards from "./Cards/index";

const Homes = styled.main``;

export default () => {
  return (
    <React.Fragment>
      <Homes>
        <Filters />
        <Cards />
      </Homes>
    </React.Fragment>
  );
};
