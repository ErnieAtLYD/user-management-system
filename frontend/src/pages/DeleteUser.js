const DeleteUser = () => {
  return (
    <>
      <dialog open>
        <article>
          <h3>Delete User</h3>
          <p>This will delete. Are you sure?</p>
          <footer>
            <a href='#cancel' role='button' class='secondary'>
              Cancel
            </a>
            <a href='#confirm' role='button'>
              Confirm
            </a>
          </footer>
        </article>
      </dialog>
    </>
  );
};

export default DeleteUser;
