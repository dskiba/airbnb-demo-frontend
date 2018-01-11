import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Resevations from "./Reservations";
import Featured from "./Featured";
import Footer from "../Footer";

const Main = styled.main``;

export default () => {
  return (
    <React.Fragment>
      <Main>
        <Grid>
          <Explore />
          <Experiences />
          <Homes />
          <Resevations />
          <Featured />
        </Grid>
      </Main>
      <Footer />
    </React.Fragment>
  );
};
