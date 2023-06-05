import { ContactForm, ContactList, Filter } from '../index';
import { AppContainer } from './App.styled';

export const App = () => {
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
