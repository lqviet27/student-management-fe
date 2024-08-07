import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import axios from "axios";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import {getAllUsers} from "../../../services/ApiService";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    useEffect( () => {
        fetchListUsers()
    },[])

    const fetchListUsers = async () => {
        let res =  await getAllUsers()
        console.log(res)
        if (res.data && res.data.ec === 0){
            setListUsers(res.data.data)
        }
    }

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
                    <TableUser listUsers={listUsers} setListUsers={setListUsers}/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    );
}

export default ManageUser;