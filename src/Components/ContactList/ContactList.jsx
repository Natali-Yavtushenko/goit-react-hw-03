import React from 'react';
import Contact from '../Contact/Contact';
import s from './List.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li className={s.item} key={contact.id}>
            <Contact
              id={contact.id} 
              name={contact.name}
              number={contact.number}
              deleteContact={deleteContact} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
