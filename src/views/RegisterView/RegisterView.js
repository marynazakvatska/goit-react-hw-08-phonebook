import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations  from '../../auth/authOperations';



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

const RegisterView = () => {
     const dispatch = useDispatch();
       const [name, setName] = useState('');
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
              case 'name':
                return setName(value);
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
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');

    }

    return (
        <div>
            <h1>Registration page</h1>

            <form onSubmit={handleSubmit} style={style.form} autoComplete="off" >
                <label style={style.label}>
                    Name
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
               
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
                    Registration
                </button>

            </form>
        </div>
    )
}

export default RegisterView