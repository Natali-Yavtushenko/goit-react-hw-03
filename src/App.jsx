import { useEffect, useState } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';

import SearchBox from './Components/SearchBox/SearchBox'

function App() {
  const [contacts, setContacts] = useState(
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
    
  );

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    setContacts(JSON.parse(savedContacts));
  }  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const [filter, setFilter] = useState('');

  const addContact = (newContact) =>  {
    setContacts((prevContact) => {
      return [...prevContact, newContact]
    })
  };

  const deleteContact =(contactId) => {
   setContacts((prevContact) => {
    return prevContact.filter((contact) => contact.id !== contactId);
   });

  };

  const visibleContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact = {addContact} />
  <SearchBox value = {filter} setFilter= {setFilter}/>
  <ContactList contacts = {visibleContact} deleteContact = {deleteContact}
  />
</div>

    
      
    
  )
}

export default App
