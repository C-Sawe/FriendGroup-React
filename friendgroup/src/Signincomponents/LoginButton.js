import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect();
    // Check if user is authenticated and has a specific role
    if (isAuthenticated && user && user['https://your-app/role']) {
      const role = user['https://your-app/role']; // Replace with your custom claim
      if (role === 'tutor') {
        navigate('/tutordash');
      } else if (role === 'student') {
        navigate('/studentdash');
      }
    } else {
     // Redirect to home page or handle as needed
    }
  };

  return (
    <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;
