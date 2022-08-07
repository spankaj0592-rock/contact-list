import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContactApi = () => {
   
  const [contact, setContact] = useState([]);

  const getContacts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    setContact(await response.json());
  };

  useEffect(() => {
    getContacts();
  }, []);

  
  return (
    <Container>
      {contact &&contact.map((contact,index) => (
       
          <Card >
            <h5><a href="./details">{contact.name}</a></h5>
          </Card>
       
      ))}
    </Container>
  );
};

export default ContactApi;

const Container = styled.div`
height:100%;
background:lightblue;
  display:grid;
margin-top: 20px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
 
`

const Card = styled.div`
background-color:white;


box-shadow: rgb(25 25 25 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  
  }



 



`

