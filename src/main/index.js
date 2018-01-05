import React from "react";
import styled from "styled-components";

import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Resevations from "./Reservations";

const Main = styled.main``;

export default () => {
  return (
    <Main>
      <div className="container">
        <Explore />
        <Experiences />
        <Homes />
        <Resevations />
      </div>
    </Main>
  );
};
