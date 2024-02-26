import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        date: '',
        userEmail: '',
        userPassword: '',
        passwordConfirmation: '',
    })

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        navigate('/home');
    }

    return(
        <div className="login">
            <h1>Signup</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleInputChange}
                    value={formData.firstName}
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    onChange={handleInputChange}
                    value={formData.lastName}
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                />
                <input 
                    type="email"
                    onChange={handleInputChange}
                    value={formData.userEmail}
                    placeholder="Email"
                    name="userEmail"
                    id="userEmail"
                />
                <input 
                    type="password"
                    onChange={handleInputChange}
                    value={formData.userPassword}
                    placeholder="Password"
                    name="userPassword"
                    id="userPassword"
                />
                <input 
                    type="password"
                    onChange={handleInputChange}
                    value={formData.passwordConfirmation}
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                />
                <input id="loginSubmitBtn" type="submit" value="Sign Up"/>
            </form>
            <Link className="menuLink" to="/">Already have an account?</Link>
        </div>
    );
}

export default Signup;
