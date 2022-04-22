import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// We need to explicitly bring in the setUser function from
// the App component so the App knows to rerender when the
// user logs out
const Logout = ({ setLoggedInUser }) => {
  useEffect(() => {
    sessionStorage.removeItem('token');
    setLoggedInUser(null);
  });
  return <Navigate to='/' />;
};

export default Logout;
