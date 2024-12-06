import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { supabase } from '../supabaseClient';
import nightBkt from '../images/street.avif';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    middleName: '',
    surname: '',
    username: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmitFunction(event) {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Validation checks
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      // Signup with Supabase
      const { user, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signupError) {
        setErrorMessage(signupError.message);
        return;
      }

      // Insert user details into the "profile" table
      const { error: dbError } = await supabase.from('user_profile').insert([
        {
          name: formData.name,
          middle_name: formData.middleName,
          surname: formData.surname,
          username: formData.username,
          gender: formData.gender,
          address: formData.address,
          phone_number: formData.phoneNumber,
          email: formData.email,
        },
      ]);

      if (dbError) {
        setErrorMessage('Error saving profile details. Please try again.');
        console.error(dbError.message);
        return;
      }

      setSuccessMessage('Signup successful! Check your email for verification.');
      console.log('Signup and profile creation successful!');
    } catch (error) {
      setErrorMessage('An unexpected error occurred.');
      console.error('Unexpected error:', error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen relative">
      {/* Background Image with Full Screen Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${nightBkt})`,
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      ></div>

      {/* Content Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>
        <form onSubmit={handleSubmitFunction} className="grid grid-cols-1 gap-6">
          {/* Name Fields */}
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              required
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Username */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="p-2 border border-gray-300 rounded-md"
          />

          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Address */}
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="p-2 border border-gray-300 rounded-md"
          />

          {/* Phone Number */}
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="p-2 border border-gray-300 rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-2 border border-gray-300 rounded-md"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="p-2 border border-gray-300 rounded-md"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
        )}

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-sm mt-4">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;
