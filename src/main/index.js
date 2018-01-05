import React from "react";
import styled from "styled-components";

import Explore from "./Explore";
import Experiences from "./Experiences";

const Main = styled.main``;

export default () => {
  return (
    <Main>
      <div className="container">
        <Explore />
        <Experiences />
      </div>
    </Main>
  );
};
