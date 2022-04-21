import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import User from './pages/User';
import EditUser from './pages/EditUser';
import NotFound from './pages/NotFound';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';
import Login from './pages/Login';
import Header from './components/Header';
import Protected from './pages/Protected';
import AuthRequired from './components/AuthRequired';

/**
 * The component will have the following states:
 * - user (default: null)
 * - hasFailedAuth (default: false)
 *
 * STRATEGY
 * Run this immediately:
 * 1. Is there a sessionStorage item named "token"?
 *    - no? well, that was easy; they're not logged in. We're done - set hasFailedAuth to true.
 *    - If so, we'll have to continue.
 * 2. We're going to call /api/v1/users/current.
 */
function App() {
  const [user, setUser] = useState(null); // the current user logged in
  const [hasFailedAuth, setFailedAuth] = useState(false);
  const API_URL = process.env.REACT_APP_SERVER_URL + '/api/v1/users/current';

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return setFailedAuth(true);
    }
    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setFailedAuth(true);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} hasFailedAuth={hasFailedAuth} />
      <Routes>
        <Route path='/' element={<Home loggedInUser={user} />} />
        <Route path='login' element={<Login />} />
        <Route
          path='protected'
          element={
            <AuthRequired>
              <Protected />
            </AuthRequired>
          }
        />
        <Route
          path='user/add'
          element={
            <AuthRequired>
              <AddUser />
            </AuthRequired>
          }
        />
        <Route path='user/:userId' element={<User />} />
        <Route
          path='user/:userId/edit'
          element={
            <AuthRequired>
              <EditUser />
            </AuthRequired>
          }
        />
        <Route
          path='user/:userId/delete'
          element={
            <AuthRequired>
              <DeleteUser />
            </AuthRequired>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
