import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Singup';


const Layout = () => {
    return (
        <>
        <Routes>

            <Route path="/" element={<App />}> 
                <Route index element={<HomePage />} />
                <Route path="/users" element={<User />} />
            </Route>

            <Route path="/admins" element={<Admin />} >
                <Route index element={<DashBoard />} />
                <Route path="manage-users" element={<ManageUser />} />
            </Route>  

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>

        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transitio={Bounce}
        />
        </> 
    )
}

export default Layout;