import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Div } from './Container/Container';
import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContacts = newContact => {
    const isExist = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = DeleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== DeleteId),
    }));
  };
  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };
  render() {
    return (
      <Div>
        <Title title="Phonebook" />
        <ContactForm onAdd={this.addContacts} />
        <Filter filter={this.state.filter} find={this.onFilter} />
        <Title title="Contacts" />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
          filterContacts={this.onFilterContacts}
        />
        <GlobalStyle />
      </Div>
    );
  }
}
