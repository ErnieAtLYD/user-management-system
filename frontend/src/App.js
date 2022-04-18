import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import EditUser from './pages/EditUser';
import NotFound from './pages/NotFound';
import AddUser from './pages/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user/add' element={<AddUser />} />
        <Route path='user/:userId' element={<User />} />
        <Route path='user/:userId/edit' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
