import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';


export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {

    e.preventDefault(); // Prevent the form from submitting by default

   if (email.trim() === '' || password.trim() === '') {
    // Display an error message or take appropriate action for empty fields
    alert('Please fill in both email and password fields');
    return;
  }
    // Add your sign-in logic here, e.g., send the data to a server for authentication.
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/App');


  };

  const handleSubmit = async (e) => {
    alert('Your sign-in logic here'); // Change this alert message to suit your application.
  };

  return (
    <div className="signin-form">
      <h2 className='bouncing-text'>
        Join ShareCampus📍
      </h2>
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div class="email">
          <label>Email: </label>
          <input
            type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="password">
          <label>Password: </label>
          <input
            type="password"
            placeholder='Enter Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="button"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
