import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("Props from contcact list page" , props.contacts); 
  const renderConatctList = props.contacts.map((contact) => {
    console.log("Map Fn call" ,{contact});
    return <ContactCard contact={contact} />;
  
  });
  // console.log(renderConatctList);
  return <div className="ui celled list">{renderConatctList} </div>;
};

export default ContactList;
