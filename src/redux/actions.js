import { nanoid } from '@reduxjs/toolkit';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const remContact = id => {
  return {
    type: 'contacts/remContact',
    payload: {
      id,
    },
  };
};

export const changeFilter = filteredName => {
  return {
    type: 'filter/changeFilter',
    payload: {
      filteredName,
    },
  };
};
