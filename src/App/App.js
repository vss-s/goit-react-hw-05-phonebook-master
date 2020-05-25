import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as helpers from '../helpers/helpers';
import Section from '../components/Section/Section';
import PhoneBookFields from '../components/PhoneBookFields/PhoneBookFields';
import PhoneBookList from '../components/PhoneBookList/PhoneBookList';
import PhoneBookSearchField from '../components/PhoneBookSearchField/PhoneBookSearchField';
import PhoneBookLogo from '../components/PhoneBookLogo/PhoneBookLogo';
import Notification from '../components/Notification/Notification';

export default class App extends Component {
  state = {
    filterQuery: '',
    contacts: [],
    error: false,
  };

  componentDidMount() {
    try {
      const persistedData = localStorage.getItem('contacts');
      if (persistedData)
        this.setState({ contacts: [...JSON.parse(persistedData)] });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;

    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit = submitedContactData => {
    const { contacts } = this.state;

    if (helpers.checkContactForUnique(contacts, submitedContactData)) {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 1000);
      return false;
    }

    const newContact = {
      id: uuidv4(),
      ...submitedContactData,
    };

    this.setState({
      contacts: [...this.state.contacts, newContact],
      error: false,
    });

    return true;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDelete = id => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(item => item.id !== id),
    });
  };

  render() {
    const { filterQuery, contacts, error } = this.state;
    const filteredContacts = helpers.filterContactList(contacts, filterQuery);

    return (
      <main>
        <Notification isActive={error} message="Contact is already exist" />
        <PhoneBookLogo title="PhoneBook" />
        <Section isActive>
          <PhoneBookFields onSubmit={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'} isActive={contacts.length > 0}>
          <PhoneBookSearchField
            isActive={contacts.length > 1}
            value={filterQuery}
            onChange={this.handleChange}
          />

          <PhoneBookList
            onDelete={this.handleDelete}
            contacts={filteredContacts}
          />
        </Section>
      </main>
    );
  }
}
