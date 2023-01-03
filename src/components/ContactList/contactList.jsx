import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import ContactItem from './contactItem';
import { ContactListStyled } from '../Component.styled';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{
              id,
              name,
              number,
            }}
            key={id}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
