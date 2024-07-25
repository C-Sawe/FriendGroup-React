import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const SignInSignUp = () => {
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [isTutor, setIsTutor] = useState(false);
    const { isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated and has the custom claim
        if (isAuthenticated && user) {
            const role = user['https://your-app/role']; // Custom claim namespace

            // Redirect based on the user's role
            if (role === 'tutor') {
                navigate('/tutordash');
            } else if (role === 'student') {
                navigate('/studentdash');
            }
        }
    }, [isAuthenticated, user, navigate]);

    const toggleSignInSignUp = () => {
        setIsSigningIn(!isSigningIn);
    };

    const toggleRole = () => {
        setIsTutor(!isTutor);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="form-group text-center mb-3">
                    <label className="mr-2">{isTutor ? 'Tutor' : 'Student'}</label>
                    <div className="custom-control custom-switch d-inline-block">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="roleSwitch" 
                            checked={isTutor} 
                            onChange={toggleRole} 
                        />
                        <label className="custom-control-label" htmlFor="roleSwitch"></label>
                    </div>
                </div>
                <h3 className="text-center mb-3">
                    {isSigningIn ? (isTutor ? 'Tutor Sign In' : 'Student Sign In') : (isTutor ? 'Tutor Sign Up' : 'Student Sign Up')}
                </h3>
                <form>
                    {!isSigningIn && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    {isSigningIn ? (
                        <LoginButton />
                    ) : (
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    )}
                </form>
                {isSigningIn && (
                    <div className="text-center mt-3">
                        <p>Don't have an account? <button className="btn btn-link" onClick={toggleSignInSignUp}>Sign up here</button></p>
                        <p><button className="btn btn-link">Forgot Password?</button></p>
                    </div>
                )}
                {!isSigningIn && (
                    <div className="text-center mt-3">
                        <p>Already have an account? <button className="btn btn-link" onClick={toggleSignInSignUp}>Sign in here</button></p>
                    </div>
                )}
                {isAuthenticated && <LogoutButton />}
            </div>
        </div>
    );
};

export default SignInSignUp;
