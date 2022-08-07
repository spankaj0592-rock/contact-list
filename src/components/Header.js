import React from "react";
import styled from "styled-components";



function Header() {



  
  return (
    <Container>
      <Headers>
      
      ContactList
      </Headers>
      
      <Button >
      <Link href="../addContact" > AddContact</Link>
    </Button>
      
   

  
    </Container>
  );
}

export default Header;

const Headers = styled.div`
border:1px solid;
border-radius:5px;

  width: 100%;
  height: auto;
  font-size: 30px;
  text-align: center;
`
const Container = styled.div`
  height: auto;
  overflow: hidden;
  width: 100%;
  ${'' /* background-color: gray; */}
  display: inline-block;
  
`
const Button =styled.button`
width:100%;
  height: 50px;
  font-size: 30px;
  display: flex;
  border:1px solid;
  border-radius:5px;
  
`
const Link =styled.a`
display:flex;
margin-top:auto;
margin-left:600px;
text-decoration: none;

`