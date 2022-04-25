import { Link } from 'react-router-dom';
import { IUser } from '../utils/interfaces';

const UserTable = ({ userList }: { userList: IUser[] }) => {
  return (
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
          userList.map((user: IUser) => (
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
                <Link
                  to={`/user/${user.id}/delete`}
                  className='secondary outline'
                  role='button'
                >
                  Delete
                </Link>
              </td>
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
