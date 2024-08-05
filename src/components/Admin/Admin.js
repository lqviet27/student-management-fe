import SideBar from "./SideBar.js";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {Outlet} from 'react-router-dom';
import './Admin.scss';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars size={30} onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Admin;