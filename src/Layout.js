import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageStudent from './components/Admin/Content/ManageStudent';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Singup';
import PrivateRoute from './routes/PrivateRoute';


const Layout = () => {
    return (
        <>
        <Routes>

            <Route path="/" element={<App />}> 
                <Route index element={<HomePage />} />
                <Route path="/users" 
                    element=
                    {
                        <PrivateRoute>
                            <User />
                        </PrivateRoute>
                    } 
                />
            </Route>

            <Route path="/admins" 
                element=
                {
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } 
            >
                <Route index element={<DashBoard />} />
                <Route path="manage-students" element={<ManageStudent />} />
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