import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/' + userId;

  const cancelModal = () => {
    // like we were pressing the back button
    navigate(-1);
  };

  const handleModal = () => {
    axios
      .delete(API_URL)
      .then((resp) => {
        navigate('/');
      })
      .catch((e) => {});
  };

  return (
    <>
      <dialog open>
        <article>
          <h3>Delete User</h3>
          <p>This will delete the user. Are you sure?</p>
          <footer>
            <a
              href='#cancel'
              onClick={cancelModal}
              role='button'
              class='secondary'
            >
              Cancel
            </a>
            <a href='#confirm' onClick={handleModal} role='button'>
              Confirm
            </a>
          </footer>
        </article>
      </dialog>
    </>
  );
};

export default DeleteUser;
