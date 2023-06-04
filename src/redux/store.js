import { contactList } from './contactListSlice';
import { contactsFilter } from './contactsFilterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: contactList, filter: contactsFilter },
});
