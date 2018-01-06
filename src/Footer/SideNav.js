import React from "react";
import styled from "styled-components";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const SideNav = styled.nav`
  display: inline-block;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  font-size: 15px;
  text-align: right;
  line-heigh: 18px;
  color: #636363;
  margin-right: 16px;

  text-decoration: none;
`;

const SocialIcon = styled.a`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-left: 0.75rem;
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
