import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import AddContact from './components/addContact';
import ContactApi from './components/contactApi';
import Header from './components/Header';
import Details from './components/details';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path="/" element={<ContactApi/>}/>
         <Route path="/addContact" element={<AddContact/>}/>
        <Route path="/details/" element={<Details/>}/>
  
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
