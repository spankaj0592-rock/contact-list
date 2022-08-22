import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Headers>
        <Link href="/">ContactList</Link>
      </Headers>
    </Container>
  );
}

export default Header;

const Headers = styled.div`
  border: 1px solid;
  border-radius: 5px;

  width: 100%;
  height: auto;
  font-size: 50px;
  text-align: center;
`;
const Container = styled.div`
  height: auto;
  overflow: hidden;
  width: 100%;
  ${"" /* background-color: gray; */}
  display: inline-block;
`;

const Link = styled.a`
  display: flex;
  margin-top: auto;
  margin-left: 550px;
  text-decoration: none;
`;
