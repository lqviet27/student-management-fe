import SideBar from "./SideBar.js";
import './Admin.scss';

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar/>
            </div>
            <div className="admin-content">
                day la content neeeeeeeeeeeee
            </div>
        </div>
    );
}

export default Admin;