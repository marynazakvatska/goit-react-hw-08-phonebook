import { createSelector } from '@reduxjs/toolkit';


export const getContacts = state => state.phoneBook.contacts;

export const getIsLoading = state => state.phoneBook.isLoading;

export const getFilter = state => state.phoneBook.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedContacts = filter.toLowerCase();
   
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedContacts) ||
        contact.number.includes(filter),
    );
  },
);