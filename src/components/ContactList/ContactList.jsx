import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => (
  <ContactListStyled>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}:<span>{contact.number}</span>
        <button
          id={contact.id}
          type="button"
          onClick={() => onClick(contact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ContactListStyled>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onClick: PropTypes.func,
};
