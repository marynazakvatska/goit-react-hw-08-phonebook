import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";

import operations  from '../../auth/authOperations';


const style = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};


const LoginView = () => {
      const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
        
            default:
                return;
        }
    }
  

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');

    }

    return (
        <div>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit} style={style.form} autoComplete="off" >
                <label style={style.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label style={style.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button className={style.btnsubmit} type="submit">
                    Enter
                </button>

            </form>
        </div>
    )
}

export default LoginView