import React from "react";
import styled from "styled-components";
import Filters from "./Filters/index";
import Cards from "./Cards/index";
import Header from "../Header";
import Helmet from "react-helmet";

const Homes = styled.main``;

export default () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Airbnb Homes Page</title>
      </Helmet>
      <Header placeholder="Anywhere  ·  Homes" />
      <Filters />
      <Homes>
        <Cards />
      </Homes>
    </React.Fragment>
  );
};
