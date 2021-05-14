import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveContacts) setContacts(retriveContacts);
  },[]);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className="ui container">
      <React.Fragment>
        <Header />
        <h2></h2>
        <AddContact addContactHandler={addContactHandler} />
        <h2>Contact List</h2>
        <ContactList contacts={contacts} />
      </React.Fragment>
    </div>
  );
}

export default App;
