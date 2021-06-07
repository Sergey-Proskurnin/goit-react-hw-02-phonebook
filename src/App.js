import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import contactsTest from "data/contactsTest.json";

class App extends Component {
  state = {
    contacts: contactsTest,
    filter: "",
  };

  formAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formAddContact} />

        <h2 className="title">Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
