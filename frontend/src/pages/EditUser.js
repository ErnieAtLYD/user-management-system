import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

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
              <FormInput
                name='first_name'
                defaultVal={user.first_name}
                label='First name'
                onChange={handleChange}
                required={true}
              />
              <FormInput
                name='last_name'
                defaultVal={user.last_name}
                label='Last name'
                onChange={handleChange}
                required={true}
              />
            </div>
            <FormInput
              name='email'
              type='email'
              defaultVal={user.email}
              label='Email address'
              onChange={handleChange}
              required={true}
            />
            <FormInput
              name='avatar'
              type='avatar'
              defaultVal={user.avatar}
              label='Avatar URL'
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
