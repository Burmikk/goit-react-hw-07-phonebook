import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: payload => ({
        payload: {
          id: nanoid(2),
          ...payload,
        },
      }),
    },
    deleteContact: (store, { payload }) => {
      return store.filter(item => item.id !== payload);
    },
  },
});

export default contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
