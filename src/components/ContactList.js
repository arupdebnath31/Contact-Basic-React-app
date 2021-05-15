import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("Props from contcact list page", props.contacts);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };


  const renderConatctList = props.contacts.map((contact) => {
    console.log("Map Fn call", { contact });
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  // console.log(renderConatctList);
  return (
    <div className="main">
      <h2> <br/><br></br>
        Contact List
        <Link to="/add">
          <button className="ui button blue left">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderConatctList} </div>
    </div>
  );
};

export default ContactList;
