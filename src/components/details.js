import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import Contacthooks from "./contacthooks";

// Function For grt Contact list details

// Using Id  by Using A loop method

function Details() {
  const [contacts] = Contacthooks();
  const id = useLocation().pathname.split("/")[2];

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].id == id) {
      const contact = contacts[i];
      console.log(contact.name);
      return (
        <Container>
          <Card>
            <p>Name : {contact.name}</p>
            <p>UserName : {contact.username}</p>
            <p>Email : {contact.email}</p>
            <p>Street : {contact.address.street}</p>
            <p>Suits : {contact.address.suite}</p>
            <p>city : {contact.address.city}</p>
            <p>Zipcode : {contact.address.zipcode}</p>
            <p> Lat : {contact.address.geo.lat}</p>
            <p>Lang : {contact.address.geo.lang}</p>
            <p>Phone : {contact.phone}</p>
            <p>Website : {contact.website}</p>
            <p> Name : {contact.company.name}</p>
            <p>CatchPhrase : {contact.company.catchPhrase}</p>
            <p>Bs : {contact.company.bs}</p>


 <NavLink to={`/updatecontact/${contact.id}`}>
            <Button>Edit</Button>
          </NavLink>

          </Card>
         
        </Container>
      );
    } else {
      console.log("error");
    }
  }
}
export default Details;

// Custom styled components


const Button = styled.button`
  color: green;
  display: flex;
  margin-top: 5px;
  margin-left: 200px;
  height: auto;
  width: auto;
  font-size: 30px;
  display: flex;
  border: 1px solid;
  border-radius: 5px;
 
`


const Container = styled.div`
  margin-left: 400px;
  height: auto;
  width: 500px;
  background-color: lightblue;

`;
const Card = styled.div`
  text-align: center;
  cursor: pointer;
  border: 5px solid;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: lightblue;

  box-shadow: rgb(25 25 25 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &: span {
    text-align: center;
    text-size: 30px;
  }
`;
