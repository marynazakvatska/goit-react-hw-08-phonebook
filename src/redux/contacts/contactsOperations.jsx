import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const items = await contactsApi.addContact(contact);
      return items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.dltContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);