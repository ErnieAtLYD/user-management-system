import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Login = ({ setLoggedInUser }) => {
  const [user, setUser] = useState({});
  const [hasFailedAuth, setFailedAuth] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/login';
  const from = location.state?.from?.pathname || '/';

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(API_URL, user)
      .then((resp) => {
        sessionStorage.setItem('token', resp.data.token);
        setLoggedInUser(resp.data.user);

        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setFailedAuth(true);
      });
  };

  return (
    <>
      <main className='container'>
        {from === '/' ? (
          <h1>Login</h1>
        ) : (
          <hgroup>
            <h1>Login</h1>
            <h2>You must log in to view the page at {from}</h2>
          </hgroup>
        )}

        {hasFailedAuth && <div className='err'>ERROR!</div>}

        <form
          style={{ margin: '0 auto', maxWidth: '25rem' }}
          onSubmit={handleSubmit}
        >
          <FormInput
            name='username'
            defaultVal={user.username}
            label='Username'
            onChange={handleChange}
            required={true}
          />
          <FormInput
            name='password'
            type='password'
            defaultVal={user.password}
            label='Password'
            onChange={handleChange}
            required={true}
          />

          <button type='submit'>Login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
