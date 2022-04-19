import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/' + userId;

  useEffect(() => {
    console.log({ userId });
    axios.get(API_URL).then((resp) => {
      setUser(resp.data);
    });
  }, [userId]);

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
      <main className='container'>
        <h1>Edit User</h1>

        {user ? (
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

            <button type='submit'>Edit User</button>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default EditUser;
