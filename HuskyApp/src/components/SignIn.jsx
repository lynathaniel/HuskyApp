import '../App.css';
import React, { useState } from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    // Add your sign-in logic here, e.g., send the data to a server for authentication.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSubmit = async (e) => {
    alert('Fuck you pussy ass bitch, you stink');
  }

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
  )
}

export default SignIn;
