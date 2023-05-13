import PropTypes from 'prop-types';
import {
  Button,
  Wrapper,
  ContactsText,
  ContactSpan,
} from './ContactList.styled';
export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <Wrapper>
      {filterContacts.map(contact => (
        <ContactsText key={contact.id}>
          <ContactSpan>
            {contact.name}: {contact.number}
          </ContactSpan>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </Button>
        </ContactsText>
      ))}
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
  filterContacts: PropTypes.func,
};
