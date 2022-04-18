import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const User = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    console.log({ userId });
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/api/v1/users/' + userId)
      .then((resp) => {
        setUser(resp.data);
      });
    // FIXME: error handling
  }, [userId]);
  return (
    <>
      <Header />
      <main className='container'>
        {user ? (
          <>
            <h1>View User #{user.id}</h1>
            <ul>
              <li>First name: {user.first_name}</li>
              <li>Last name: {user.last_name}</li>
              <li>Email: {user.email}</li>
              <li>
                Avatar:{' '}
                <img src={user.avatar} alt={`Avatar for ${user.first_name}`} />
              </li>
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default User;
