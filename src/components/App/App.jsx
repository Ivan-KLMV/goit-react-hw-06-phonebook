// import { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '../index';
import { AppContainer } from './App.styled';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const getContacts = state => state.contacts;
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <AppContainer>
      <h1>phonebook</h1>
      <ContactForm />
      <h2>contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
