import { useEffect } from "react";
import "./ContactList.module.css";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "../../redux/contacts-selectors";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import * as contactsSelectors from '../../redux/contacts-selectors';
import * as contactsOperations  from '../../redux/contactsOperations';
/* import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/contactsApi"; */

const ContactList = () => {
   const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  // const stateContact = useSelector(contactsSelectors.selectAll); //new

  // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  // const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <>
      
      <ul className={s.contactList}>
         {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactItem}>
              <p className={s.contactDescription}>
                {name}: {number}
              </p>
              <button
                className={s.deleteBtn}
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContacts(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
