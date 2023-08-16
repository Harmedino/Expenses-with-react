import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { auth } from "../Firebase";

function RegisterPage() {
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setIsLoading(true);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result);
            setIsLoading(false);
            history('/'); 
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
        }
    };

    return (
        <div className="body">
            <div className="login">
                <h1>Register</h1>
                <form>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            placeholder="Enter your username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            placeholder="johndoe@gmail.com"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            placeholder="********"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="submit-button"
                        type="submit"
                        onClick={handleFormSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;