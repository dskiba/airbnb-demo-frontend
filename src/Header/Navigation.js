import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: none;
  @media (min-width: 991px) {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkWrap = styled.li`
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
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: center;
`;

export default () => (
  <Navigation>
    <Links>
      <LinkWrap>
        <Link href="/become-a-host">Become a host</Link>
      </LinkWrap>
      <LinkWrap>
        <Link href="/help">Help</Link>
      </LinkWrap>
      <LinkWrap>
        <Link href="/sign-up">Sign Up</Link>
      </LinkWrap>
      <LinkWrap>
        <Link href="/login">Login</Link>
      </LinkWrap>
    </Links>
  </Navigation>
);
