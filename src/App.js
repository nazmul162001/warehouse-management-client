import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import LogOut from './components/LogOut/LogOut';
import ManageItem from './components/ManageItem/ManageItem';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import { ToastContainer, toast, Flip, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<LogOut></LogOut>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/manage" element={<ManageItem></ManageItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Zoom}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
