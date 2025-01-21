import React from 'react';

const Register = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="username" className="block">Username:</label>
          <input type="text" id="username" className="border rounded p-2 w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" className="border rounded p-2 w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block">Password:</label>
          <input type="password" id="password" className="border rounded p-2 w-full" />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white rounded p-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
