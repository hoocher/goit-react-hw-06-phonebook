const initialState = {
  contacts: [
    { id: 0, name: 'Piter', number: '380938034433' },
    { id: 1, name: 'Anna', number: '380938034422' },
    { id: 2, name: 'Master React', number: '380938034419' },
    { id: 3, name: 'Queen', number: '380938034418' },
    { id: 4, name: 'Beezz', number: '380938034417' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/remContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
      };
    }
    case 'filter/changeFilter': {
      return {
        ...state,
        filter: action.payload.filteredName,
      };
    }
    default:
      return state;
  }
};
