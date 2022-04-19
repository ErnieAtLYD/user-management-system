import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Login = () => {
  const [user, setUser] = useState({});
  const [hasFailedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/login';

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
        setIsSuccessful(true);
        setIsLoading(false);
        navigate('/');
      })
      .catch((e) => {
        setFailedAuth(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <main className='container'>
        <h1>Login</h1>

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
