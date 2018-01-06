import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  line-height: 1.5rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkList = styled.li`
  display: inline-block;
  vertical-align: top;
  fonzt-size: 16px;
  line-height: 20px;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 5px;
  padding: 5px 10px;
  text-decoration: none;
  color: #383838;
  line-height: 24px;
  font-family: "CircularAir";
  font-size: 14px;
  text-align: center;
`;

export default () => (
  <Navigation>
    <Links>
      <LinkList>
        <Link href="/become-a-host">Become a host</Link>
      </LinkList>
      <LinkList>
        <Link href="/help">Help</Link>
      </LinkList>
      <LinkList>
        <Link href="/sign-up">Sign Up</Link>
      </LinkList>
      <LinkList>
        <Link href="/login">Login</Link>
      </LinkList>
    </Links>
  </Navigation>
);
