import { createSlice } from '@reduxjs/toolkit';

const contactInfoInitialState =
  JSON.parse(localStorage.getItem('contacts')) ?? [];

const contactListSlice = createSlice({
  name: 'contacts',
  initialState: contactInfoInitialState,
  reducers: {
    addContact(state, action) {
      return [action.payload, ...state];
    },
    deleteContact(state, action) {
      return [
        ...state.filter(contact => {
          return contact.id !== action.payload;
        }),
      ];
    },
  },
});
export const contactList = contactListSlice.reducer;
export const { addContact, deleteContact } = contactListSlice.actions;
