import { Link, NavLink } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <header className='container'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <strong>User Management System</strong>
            </NavLink>
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
                <Link to='protected'>Protected Page</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </>
          ) : (
            <>
              {/* Show logged out navigation bar  */}
              <li>
                <Link to='protected'>Protected Page</Link>
              </li>
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
