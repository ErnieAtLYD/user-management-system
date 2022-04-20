import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserTable from '../components/UserTable';

const Home = ({ loggedInUser }) => {
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
      <main className='container'>
        <h1>User List</h1>
        <UserTable userList={userList} loggedInUser={loggedInUser} />

        {loggedInUser && (
          <Link to='user/add' style={{ width: '100%' }} role='button'>
            Add a user
          </Link>
        )}
      </main>
    </div>
  );
};

export default Home;
