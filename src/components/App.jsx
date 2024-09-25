import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

const retrievedInitialContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  if (savedContacts && savedContacts.length > 0) {
    return savedContacts;
  }
  console.log('Loading default contacts');
  return [
    { id: 'id-1', name: 'Elijah Montefalco', number: '459-12-56' },
    { id: 'id-2', name: 'Klaire Ty', number: '443-89-12' },
    { id: 'id-3', name: 'Jaxon Riego', number: '665-17-79' },
    { id: 'id-4', name: 'Amber Sevilla', number: '783-51-90' },
  ];
};

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const duplicateContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (duplicateContact) {
      alert(`${newContact.name} is already in your contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  }

  const filteredContacts = contacts.filter(contact =>    
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} contacts={contacts} />
        
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={handleSetFilter} />
        <ContactList deleteContact={handleDeleteContact} contacts={contacts}/>
      </div>
    );
};

  

 

  

  

