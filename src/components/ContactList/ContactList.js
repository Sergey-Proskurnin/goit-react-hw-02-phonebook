import React from "react";

import ElementContactList from "components/ElementContactList";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <ElementContactList contacts={contacts} deleteContact={deleteContact}/>
    </ul>
  );
};

export default ContactList;
