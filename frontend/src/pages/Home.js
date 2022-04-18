import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/api/v1/users')
      .then((resp) => {
        setUserList(resp.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <div>
      <Header />
      <main className='container'>
        <h1>User List</h1>
        <table role='grid'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList ? (
              userList.map((user) => (
                <tr key={user.id}>
                  <th scope='row'>{user.id}</th>
                  <td>
                    <Link to={`/user/${user.id}`}>
                      {user.first_name} {user.last_name}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/user/${user.id}/edit`} role='button'>
                      Edit
                    </Link>
                    <a className='secondary outline' role='button'>
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </tbody>
        </table>

        <Link to='user/add' style={{ width: '100%' }} role='button'>
          Add a user
        </Link>
      </main>
    </div>
  );
};

export default Home;
