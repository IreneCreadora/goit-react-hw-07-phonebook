import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contactsSlice';
import { deleteContact } from 'redux/operations';

import propTypes from 'prop-types';
import { ContactItemStyled, Wrapper, DeleteBtn } from '../Component.styled';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ContactItemStyled>
      <Wrapper>
        <p>{name}</p>
        <p>{number}</p>
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </Wrapper>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
};

export default ContactItem;
