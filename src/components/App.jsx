import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Layout } from './Layout';

import ContactForm from './ContactForm/contactForm';
import Notification from './Notification/notification';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

import { Container, Phonebook, Contacts, Section } from './Component.styled';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  return (
    <Layout>
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts>Contacts</Contacts>
        {contacts.length === 0 ? (
          <Notification message="Your contact book is empty, add your first contact!" />
        ) : (
          <Section>
            <Filter />
            <ContactList />
          </Section>
        )}
      </Container>
    </Layout>
  );
}
