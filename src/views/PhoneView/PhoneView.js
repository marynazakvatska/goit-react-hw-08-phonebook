
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  contactsSelectors from '../../redux/contacts-selectors';
import operations   from '../../auth/authOperations';
import Filter from '../../components/Filter/Filter';
import ContactsList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";



export default function PhoneView() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts)


    useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

        
        return (
            <div>
             <h1 title="Phonebook">
        <ContactForm />
      </h1>
      {contacts.length > 0 && (
        <h2 title="Contacts">
          <Filter />
          <ContactsList />
        </h2>
      )}
            </div>
        )
}

