import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../auth/authSelectors'


const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};


const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
  <nav className="nav nav-pills">
      <NavLink
      
        to="/"
         exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>


      {isLoggedIn && (
      <NavLink
          to="/contacts"
          exact
        style={styles.link}
          activeStyle={styles.activeLink}
      >
        Phonebook
      </NavLink>
     )}
    </nav> 

)

}

export default Navigation;