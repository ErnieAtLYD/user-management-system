import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, hasFailedAuth }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };
  return (
    <header className='container'>
      <nav>
        <ul>
          <li>
            <strong>User Management System</strong>
          </li>
        </ul>
        <ul>
          {user ? (
            <>
              {/* Show logged in navigation bar  */}
              <li>
                Welcome, <strong>{user.username}</strong>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              {/* Show logged out navigation bar  */}
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
