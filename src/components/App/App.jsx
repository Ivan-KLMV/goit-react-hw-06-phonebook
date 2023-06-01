import { useState, useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '../index';
import { AppContainer } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    setContacts(contacts => [contact, ...contacts]);
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const deleteConact = id => {
    setContacts([...contacts.filter(contact => contact.id !== id)]);
  };

  const visibleContacts = handleFilterContact();

  return (
    <AppContainer>
      <h1>phonebook</h1>
      <ContactForm onSubmitProp={addContact} contactsProp={contacts} />
      <h2>contacts</h2>
      <Filter filterValue={filter} onChange={filterHandler} />
      <ContactList contacts={visibleContacts} onClick={deleteConact} />
    </AppContainer>
  );
};
