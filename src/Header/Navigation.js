import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
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
    <LinkList>
      <LinkItem>
        <Link href="/become-a-host">Become a host</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/help">Help</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/sign-up">Sign Up</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/login">Login</Link>
      </LinkItem>
    </LinkList>
  </Navigation>
);
