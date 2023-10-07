import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 0, name: 'Piter', number: '380938034433' },
  { id: 1, name: 'Anna', number: '380938034422' },
  { id: 2, name: 'Master React', number: '380938034419' },
  { id: 3, name: 'Queen', number: '380938034418' },
  { id: 4, name: 'Beezz', number: '380938034417' },
];
const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'contacts/remContact': {
      return state.filter(contact => contact.id !== action.payload.id);
    }
    default:
      return state;
  }
};

const filtersInitialState = '';

const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter': {
      return `${action.payload.filteredName}`;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
