import { useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

// function for Update And Edit Contact List Details targetting id

function UpdateContact() {
  const id = useLocation().pathname.split("/")[2];

  const [useredit, updateUser] = useState({
    name: "",
    username: "",
  });


  // Get a contact by using id

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const myContact = response.data;
        updateUser(myContact);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, [id]);

  // handle event to target inpur values

  function handle(e) {
    updateUser({ ...useredit, [e.target.id]: e.target.value });
  }

  // function for update user on Submit

  const updateUserNew = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      useredit
    );
  
    // alert('Updated');
    console.log(res);

  };

  return (
    <Container>
      <FormGroupMain onSubmit={updateUserNew}>
        {/* main Content */}
        {
          <>
          
            <Label htmlFor="label">Name</Label>
            <Input
              id="name"
              onChange={(e) => handle(e)}
              value={useredit.name}
            />
            <Label htmlFor="label">UserName</Label>
            <Input
              id="username"
              onChange={(e) => handle(e)}
              value={useredit.username}
            />
            <Label htmlFor="label">Email</Label>
            <Input
              id="email"
              onChange={(e) => handle(e)}
              value={useredit.email}
            />
          </>
        }

        {/* address */}
        {/* <FormGroup>
      <Label htmlFor="label">Street</Label>
      <Input id="street" onChange={(e)=>handle(e)} value ={useredit.street} />
      <Label htmlFor="label">Suite</Label>
      <Input id="suite" onChange={(e)=>handle(e)} value ={useredit.suite} />
      <Label htmlFor="label">City</Label>
      <Input id="city" onChange={(e)=>handle(e)} value ={useredit.city} />
      <Label htmlFor="label">Zipcode</Label>
      <Input id="zipcode" onChange={(e)=>handle(e)} value ={useredit.zipcode}/> */}

        {/* geo */}
        {/* <FormGroup>
      <Label htmlFor="label">Lat</Label>
      <Input id="lat" onChange={(e)=>handle(e)} value ={useredit.lat}/>
      <Label htmlFor="label">Lang</Label>
      <Input id="lng" onChange={(e)=>handle(e)} value ={useredit.lang}/>
      </FormGroup>
</FormGroup> */}
        {/* Phone */}
        {/* <Label htmlFor="label">Phone</Label>
      <Input id="phone" onChange={(e)=>handle(e)} value ={useredit.phone}/>
      <Label htmlFor="label">website</Label>
      <Input id="website" onChange={(e)=>handle(e)} value ={useredit.website}/> */}

        <FormGroup>
          {/* Company */}
          {/* <Label htmlFor="label">Company Name</Label>
      <Input id="name" onChange={(e)=>handle(e)} value ={useredit.name}/>
      <Label htmlFor="label">Company catch Phrase</Label>
      <Input id="catchPhrase" onChange={(e)=>handle(e)} value ={useredit.catchPhrase}/>
      <Label htmlFor="label">Company bs</Label>
      <Input id="bs" onChange={(e)=>handle(e)} value ={useredit.bs}/> */}
        </FormGroup>
        <button>Submit</button>
      </FormGroupMain>
    </Container>
  );
}

export default UpdateContact;

// Coustom Styled componets

const Container = styled.div`
  border: 1px solid black;
  background-color: lightblue;
`;

export const FormGroupMain = styled.form`
  color: pink;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const FormGroup = styled.form`
  color: pink;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: Blue;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;
