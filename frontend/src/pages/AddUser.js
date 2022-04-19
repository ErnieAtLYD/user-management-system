import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const AddUser = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_SERVER_URL + '/api/v1/users/', user)
      .then((resp) => {
        navigate('/');
      })
      .catch((e) => {});
  };

  return (
    <>
      <Header />
      <main className='container'>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className='grid'>
            <label htmlFor='first_name'>
              First name
              <input
                type='text'
                id='first_name'
                name='first_name'
                placeholder='First name'
                value={user.first_name}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor='last_name'>
              Last name
              <input
                type='text'
                id='last_name'
                name='last_name'
                placeholder='Last name'
                value={user.last_name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email address'
            value={user.email}
            onChange={handleChange}
            required
          />
          <label htmlFor='avatar'>Avatar</label>
          <input
            type='avatar'
            id='avatar'
            name='avatar'
            placeholder='Avatar URL'
            value={user.avatar}
            onChange={handleChange}
          />

          <button type='submit'>Add User</button>
        </form>
      </main>
    </>
  );
};

export default AddUser;
