import React, { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import axios from "axios";
import TableUser from "./TableUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-users">
                    <button 
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        Add new users</button>
                </div>
                <div className="table-users-container">
                    <TableUser/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    );
}

export default ManageUser;