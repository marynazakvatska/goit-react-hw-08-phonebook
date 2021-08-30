import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';


const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  return (
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
  );
};

export default ContactsList;