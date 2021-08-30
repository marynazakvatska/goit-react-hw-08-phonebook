import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from './contactsOperations';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    isLoading: false,
    filter: '',
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;

    },

    [addContacts.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    },

    [deleteContacts.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
      state.isLoading = false;
      state.error = null;
    },
    [deleteContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      
    },
  },
});
export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;