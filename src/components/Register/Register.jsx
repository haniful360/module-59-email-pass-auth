import React, { useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const auth = getAuth(app);
    const handleRegister = (event) => {
        setSuccess('')
        setError('')
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please at least 1 upper case letter')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Assert a string has at least two number')
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('please add at least one special character.')
            return;
        }
        else if (password.length < 6) {
            setError('please add at least 6 characters in your password')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                form.reset()
                setSuccess('user has created successfully')
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setSuccess('')
            })

    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" />
                <input type="submit" value="register" />
                <p>{error}</p>
                <p>{success}</p>
            </form>

        </div>
    );
};

export default Register;