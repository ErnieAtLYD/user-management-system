import { Link } from 'react-router-dom';

const UserTable = ({ userList, loggedInUser }) => {
  return (
    <table role='grid'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          {loggedInUser && <th scope='col'>Actions</th>}
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
              {loggedInUser && (
                <td>
                  <Link to={`/user/${user.id}/edit`} role='button'>
                    Edit
                  </Link>
                  <Link
                    to={`/user/${user.id}/delete`}
                    className='secondary outline'
                    role='button'
                  >
                    Delete
                  </Link>
                </td>
              )}
            </tr>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
