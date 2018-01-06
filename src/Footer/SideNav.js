import React from "react";
import styled from "styled-components";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const SideNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 15px;
  text-align: right;
  line-height: 18px;
  vertical-align: bottom;
  color: #636363;
  margin-right: 16px;

  text-decoration: none;

  padding-top: 3px;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 991px) {
    font-size: 15px;
    line-height: 18px;
    padding-top: 0;
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-top: -3px;
  margin-left: 12px;
  background-size: cover;
`;

const Facebook = SocialIcon.extend`
  background-image: url(${facebook});
`;
const Twitter = SocialIcon.extend`
  background-image: url(${twitter});
`;
const Instagram = SocialIcon.extend`
  background-image: url(${instagram});
`;

export default () => {
  return (
    <SideNav>
      <Link href="/">Terms</Link>
      <Link href="/">Privacy</Link>
      <Link href="/">Site map</Link>

      <Facebook href="facebook.com" />
      <Twitter href="twitter.com" />
      <Instagram href="instagram.com" />
    </SideNav>
  );
};
