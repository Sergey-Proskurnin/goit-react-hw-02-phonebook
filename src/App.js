import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    number: "",
    filter: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();
  filterInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, contacts } = this.state;
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    contacts.push(contact);
    this.reset();
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

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h2 className="title">Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className="lable">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId} className="lable">
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.numberInputId}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <label htmlFor={this.filterInputId}>
          Find contacts by name and number
          <input
            type="text"
            value={filter}
            onChange={this.changeFilter}
            id={this.filterInputId}
          />
        </label>

        <h2 className="title">Contacts</h2>
        <ul>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
