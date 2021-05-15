import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    // setContacts([...contacts, contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>)}  />
          <Route path="/add" exact render={(props) => (<AddContact {...props} addContactHandler={addContactHandler}/>)}  />
          <Route path="/contact/:id" exact render={(props) => (<ContactDetails {...props} />)}  />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

// <Header />
// <AddContact addContactHandler={addContactHandler} />
// <h2>Contact List</h2>
// <ContactList contacts={contacts} getContactId={removeContactHandler} />
