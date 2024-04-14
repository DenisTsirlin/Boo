import React, { useState } from 'react';
import LoginFc from '../components/LoginFc';

export default function Login() {
  const [users] = useState([]);

  // Function to handle the login process
  const handleLogin = (user) => {
  };

  return (
    <LoginFc users={users} onLogin={handleLogin} />
  );
}
