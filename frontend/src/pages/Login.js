import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/';

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(API_URL, user)
      .then((resp) => {
        navigate('/');
      })
      .catch((e) => {});
  };

  return (
    <>
      <Header />
      <main className='container'>
        <h1>Login</h1>

        <form
          style={{ margin: '0 auto', maxWidth: '25rem' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor='username'>Username</label>
          <input
            type='username'
            id='username'
            name='username'
            placeholder='Username'
            value={user.username}
            onChange={handleChange}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type='submit'>Login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
