import axios from "axios";
import { useEffect, useState } from "react";

// Contact hooks function

// To get the contact details using hooks and share with other components

const Contacthooks = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const myContact = response.data;
        setContact(myContact);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return [contacts];
};

export default Contacthooks;
