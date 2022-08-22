import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Contacthooks from "./contacthooks";

const ContactApi = () => {
  const id = useLocation().pathname.split("/")[2];
  const [contacts] = Contacthooks();

  //  Function for deleting any contact values and shows using alert

  const deleteContact = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        // alert("deleted");
       console.log(result.data);
      });
  };

  return (
    // Link for Add Contact page and Show Our Contact list on Home Page
    <>
      <Button>
        <Link href="../addContact"> AddContact</Link>
      </Button>

      <Container>
        {contacts.map((contact, id) => (
          <Card key={contact.id}>
            <NavLink to={`./details/${contact.id}`}>{contact.name} </NavLink>
           
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ContactApi;

// Our Custom Styled components



const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 30px;
  display: flex;
  border: 1px solid;
  border-radius: 5px;
`;
const Link = styled.a`
  display: flex;
  margin-top: auto;
  margin-left: 600px;
  text-decoration: none;
`;

const Container = styled.div`
  height: 100%;
  background: lightblue;
  display: grid;
  margin-top: 20px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Card = styled.div`
  text-align: center;
  height: 50px;
  width: auto;
  background-color: white;

  box-shadow: rgb(25 25 25 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
