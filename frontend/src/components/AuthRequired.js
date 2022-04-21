import { Navigate, useLocation } from 'react-router-dom';

// The idea is to redirect the user to the login page if they are not logged in;
// by wrapping multiple page components you can leave the authentication logic
// out of the page components themselves.

const AuthRequired = ({ loggedInUser, children }) => {
  const location = useLocation();
  if (!loggedInUser) {
    // more about location state:
    // https://reactrouter.com/docs/en/v6/getting-started/concepts#location-state

    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
