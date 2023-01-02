import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from './contactItem';
import { ContactListStyled } from '../Component.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterAvailableContacts = () => {
    const normalizeFilter = filter.value.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  };

  const availableContacts = filterAvailableContacts();
  return (
    <ContactListStyled>
      {availableContacts.map(
        ({
          id,
          name,
          number,
          notes = '',
          birthDate = '',
          importantContact = false,
          relation = '',
        }) => {
          return (
            <ContactItem
              contact={{
                id,
                name,
                number,
                notes,
                birthDate,
                importantContact,
                relation,
              }}
              key={id}
            />
          );
        }
      )}
    </ContactListStyled>
  );
};

export default ContactList;
