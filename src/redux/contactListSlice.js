import { createSlice } from '@reduxjs/toolkit';

const contactListSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const getContacts = state => state.contacts.contacts;
export const contactList = contactListSlice.reducer;
export const { addContact, deleteContact } = contactListSlice.actions;
