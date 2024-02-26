import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
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
            <h1>Login</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
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
                <input type="submit" value="Login"/>
                <br />
                <p>OR</p>
                <br />
            </form>
            <Link className="menuLink" to="/signup">Sign Up</Link>
        </div>
    );
}

export default Login;
