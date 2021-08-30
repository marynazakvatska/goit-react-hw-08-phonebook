import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { toast } from 'react-toastify';
import s from './Form.module.css';

const FormHooks = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const nameInlist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const numberInList = contacts.find(contact => contact.number === number);
    if (nameInlist) {
      toast.error(`'${name}' is already in your list`);
      reset();
      return;
    }
    if (numberInList) {
      toast.error(`'${number}' is already in your list`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContacts({ name, number }));
    toast.success(`'${name}' added to phonebook`);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <input
            className={s.formInput}
            placeholder="Name"
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, an apostrophe, a dash and spaces."
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor={numInputId}>
          <input
            className={s.formInput}
            placeholder="Tel"
            id={numInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must consist of digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormHooks;