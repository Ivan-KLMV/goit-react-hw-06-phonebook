import { FormStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactListSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target[0].value,
      number: e.target[1].value,
    };

    if (contacts.map(contact => contact.name).includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
    e.target.reset();
    [...e.currentTarget].map(item => item.nodeName === 'INPUT' && item.blur());
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={handleChange}
          // value={name}
        />
      </label>
      <label>
        number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={handleChange}
          // value={number}
        />
      </label>
      <button type="submit">add contact</button>
    </FormStyled>
  );
};
