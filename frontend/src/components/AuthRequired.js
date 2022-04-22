import { Navigate, useLocation } from 'react-router-dom';

// Redirect the user to the login page if they are not logged in;
// by wrapping multiple page components you can leave the business logic
// out of the page components.

const AuthRequired = ({ children }) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    // more about location state:
    // https://reactrouter.com/docs/en/v6/getting-started/concepts#location-state

    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
