import { ContactListStyled } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactListSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const handleFilterContact = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const visibleContacts = handleFilterContact();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:<span>{contact.number}</span>
          <button
            id={contact.id}
            type="button"
            onClick={() => dispatch(handleDelete(contact.id))}
          >
            delete
          </button>
        </li>
      ))}
    </ContactListStyled>
  );
};
