import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

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

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, contacts } = this.state;

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

        <h2 className="title">Contacts</h2>
        <ul>
          {contacts.map(({ name, number, id }) => {
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
