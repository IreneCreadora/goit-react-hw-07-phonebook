import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import { Layout } from './Layout';

import ContactForm from './ContactForm/contactForm';
import Notification from './Notification/notification';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

import { Container, Phonebook, Contacts, Section } from './Component.styled';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
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
