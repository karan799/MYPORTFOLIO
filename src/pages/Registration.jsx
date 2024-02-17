// RegistrationForm.js
import React, { useState } from 'react';
import {auth } from '../config/firebase'; // Import your Firebase configuration
import bcrypt from 'bcryptjs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [checklogin, setchecklogin] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    setError(null);
    e.preventDefault();

    // Check email and password length
    if (formData.email.length < 6 || formData.password.length < 6) {
      setError('Email and password must be at least 6 characters long.');
      return;
    }

    try {
      // Hash the password with bcrypt before registration
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // Register user with Firebase authentication
      await createUserWithEmailAndPassword(auth,formData.email, hashedPassword);

      // Additional logic, if needed
      setError("user registered");
      console.log('Registration successful');
      setchecklogin(true)
    } catch (error) {
      console.error('Registration error:', error.message);
      setError('Registration failed. Please try again.');
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8">
    
    <form onSubmit={handleRegistration} className="max-w-md  text-white ">
      <div className="mb-4">
        <label htmlFor="firstName" className="block">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block0">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Register
      </button>
      <br></br><br></br>
     { checklogin &&  <button
        type="submit"
        onClick={()=>{ navigate('/login')}}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
      }
    </form>
  </div>
  );
};

export default RegistrationForm;
