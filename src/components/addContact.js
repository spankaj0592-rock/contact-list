import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

// Add Contact Function

function AddContact() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    phone: "",
    website: "",
    name: "",
    catchPhrase: "",
    bs: "",
  });

  // Submit Contact details on Api Dummy

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        username: data.username,
        email: data.email,
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        lat: data.lat,
        lng: data.lang,
        phone: data.phone,
        website: data.website,
        name: data.name,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  //  Handle Event to hande  input value

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <Container>
      <FormGroupMain onSubmit={(e) => submit(e)}>
        {/* main Content */}
        {
          <>
            <Label htmlFor="label">Name</Label>
            <Input id="name" onChange={(e) => handle(e)} value={data.name} />
            <Label htmlFor="label">UserName</Label>
            <Input
              id="username"
              onChange={(e) => handle(e)}
              value={data.username}
            />
            <Label htmlFor="label">Email</Label>
            <Input id="email" onChange={(e) => handle(e)} value={data.email} />
          </>
        }

        {/* address */}
        <FormGroup>
          <Label htmlFor="label">Street</Label>
          <Input id="street" onChange={(e) => handle(e)} value={data.street} />
          <Label htmlFor="label">Suite</Label>
          <Input id="suite" onChange={(e) => handle(e)} value={data.suite} />
          <Label htmlFor="label">City</Label>
          <Input id="city" onChange={(e) => handle(e)} value={data.city} />
          <Label htmlFor="label">Zipcode</Label>
          <Input
            id="zipcode"
            onChange={(e) => handle(e)}
            value={data.zipcode}
          />

          {/* geo */}
          <FormGroup>
            <Label htmlFor="label">Lat</Label>
            <Input id="lat" onChange={(e) => handle(e)} value={data.lat} />
            <Label htmlFor="label">Lang</Label>
            <Input id="lng" onChange={(e) => handle(e)} value={data.lang} />
          </FormGroup>
        </FormGroup>
        {/* Phone */}
        <Label htmlFor="label">Phone</Label>
        <Input id="phone" onChange={(e) => handle(e)} value={data.phone} />
        <Label htmlFor="label">website</Label>
        <Input id="website" onChange={(e) => handle(e)} value={data.website} />

        <FormGroup>
          {/* Company */}
          <Label htmlFor="label">Company Name</Label>
          <Input id="name" onChange={(e) => handle(e)} value={data.name} />
          <Label htmlFor="label">Company catch Phrase</Label>
          <Input
            id="catchPhrase"
            onChange={(e) => handle(e)}
            value={data.catchPhrase}
          />
          <Label htmlFor="label">Company bs</Label>
          <Input id="bs" onChange={(e) => handle(e)} value={data.bs} />
        </FormGroup>
        <button>Submit</button>
      </FormGroupMain>
    </Container>
  );
}

export default AddContact;

// Custom Styled Components

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
