import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterContacts } from "../../redux/filterReducer";


import * as contactsSelectors from '../../redux/contacts-selectors';
import * as contactsOperations  from '../../redux/contactsOperations';
import { changeFilter } from "../../redux/slice";

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter );
  const dispatch = useDispatch();

  return (
    <label className={s.label_filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </label>
  );
};

export default Filter;

