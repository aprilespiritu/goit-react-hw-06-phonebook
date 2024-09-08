import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
    { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
    { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
    { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
  ];

  const [contacts, setContacts] = useState(() => {
    //Check if contacts are stored in localStorage
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  }); 

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} contacts={contacts} />
        
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList
          filterContact={filterContact}
          deleteContact={deleteContact}
          contacts={contacts}
        />
      </div>
    );
};

  

 

  

  

