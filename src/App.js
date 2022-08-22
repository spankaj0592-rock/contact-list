import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import AddContact from './components/addContact';
import ContactApi from './components/contactApi';
import Header from './components/Header';
import Details from './components/details';
import UpdateContact from './components/updatecontact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path="/" element={<ContactApi/>}/>
         <Route path="/addContact" element={<AddContact/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/updatecontact/:id" element={<UpdateContact/>}/>
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
