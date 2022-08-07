
import React, { useEffect, useState } from "react";
import styled from 'styled-components'




function Details() {
 

    const [contact, setContact] = useState([]);
    
    // const[id,setID] =useState();
    const getContacts = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      
       setContact(await response.json());
        setID(await response.json());
};
  
    useEffect(() => {

      getContacts();
    
    },[]);
    // console.log(id);
    const[id,setID] =useState(2);
  return (
      
<Container>
      <Card  value={id} onChange ={e=>setID(e.target.value)}>
          <span>UserName:{contact.name}</span><br/>
            <span>Email:{contact.email}</span><br/>
            <span>Phone:{contact.phone}</span><br/>
            <span>website:{contact.website}</span><br/>
            {/* <span>City:{contact.address.city}</span><br/> */}
            {/* <span>Street:{contact.address.street}</span><br/>  */}
            {/* <span>suit:{contact.address.suit}</span><br/> */}
            {/* <span>Zipcode:{contact.zipcode}</span> */}
           
          </Card>

    
          
       
 
    </Container>
  )
}

export default Details


const Container =styled.div`
margin-left:400px;
height:auto;
width:500px;
background-color:lightblue; 
`
const Card =styled.div`

height: 100%;
width: 100%;
background-color:lightblue;


box-shadow: rgb(25 25 25 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  
  }

  &:span{
   text-size: 30px;
    
  }
`

