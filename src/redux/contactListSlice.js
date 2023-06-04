import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactListSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [action.payload, ...state.contacts] };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        }),
      };
    },
  },
});

export const contactList = contactListSlice.reducer;
export const { addContact, deleteContact } = contactListSlice.actions;
