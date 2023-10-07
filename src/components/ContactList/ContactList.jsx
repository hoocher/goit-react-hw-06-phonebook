import ContactListItem from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { remContact } from 'redux/actions';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(remContact(id));
  };

  const filteredName = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    );
  };

  return (
    <ul>
      {filteredName().map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
