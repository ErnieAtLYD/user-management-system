import { Link } from 'react-router-dom';

const Header = () => (
  <header className='container'>
    <nav>
      <ul>
        <li>
          <strong>User Management System</strong>
        </li>
      </ul>
      <ul>
        {/* <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li> */}
        <li>
          <Link to='login' role='button'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
