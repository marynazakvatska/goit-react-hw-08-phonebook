
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { contactSelector } from '../../redux/slice'; */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import * as contactsSelectors from '../../redux/contacts-selectors';
import * as contactsOperations  from '../../redux/contactsOperations';

 function Phonebook() {
  
     const contacts = useSelector(contactsSelectors.getContacts);
   const dispatch = useDispatch();
   
   useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
   
    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />

            <h2 className={s.title_contact}>Contacts</h2>
        {contacts.length > 0 && (
          <>
        <Filter />
        <ContactList />
            <ToastContainer />
                 </>
)}
      </div>
    );
}

export default Phonebook