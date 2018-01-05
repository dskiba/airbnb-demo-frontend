import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  align-items: center;
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-family: CircularAir;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
`;

export const Card = styled.div``;

export const Link = styled.a`
  display: block;
  text-decoration: none;
`;

export const Slider = styled.div``;

export const SeeAll = styled.a`
  display: inline-block;
  padding-top: 48px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  text-decoration: none;

  ::after {
    content: ">";
    padding-left: 8px;
    vertical-align: bottom;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`;
