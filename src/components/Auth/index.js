// Every logged in user has a JWT token in localStorage
// If it doesn't exist, redirect to /login

// This is just a general check if user has access
// Further checks will be during API connections, with Authentication headers

import axios from 'axios';

const Auth = ({ history }) => {
   const token = localStorage.getItem('user_token');

   if (!token) {
      history.push('/login');
   }

   // Set default Authorization header for axios
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

   return null;
};

export default Auth;