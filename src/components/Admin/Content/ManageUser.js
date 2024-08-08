import ModalCreateUser from "./ModalCreateUser";
import ModalViewUser from "./ModalViewUser";
import ModalUpdateUser from "./ModalUpdateUser";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import {getAllUsers} from "../../../services/ApiService";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [infoUser, setInfoUser] = useState({});

    const [listUsers, setListUsers] = useState([]);

    useEffect( () => {
        fetchListUsers()
    },[])

    const fetchListUsers = async () => {
        let res =  await getAllUsers()
        // console.log(res)
        if (res.data && res.data.ec === 0){
            setListUsers(res.data.data)
        }
    }

    const handleClickBtnView = (dataUser) =>{
        setShowModalViewUser(true)
        setInfoUser(dataUser)
    }

    const handleClickBtnUpdate = (dataUser) =>{
        setShowModalUpdateUser(true)
        setInfoUser(dataUser)
    }

    const handleClickBtnDelete = (dataUser) =>{
        setShowModalDeleteUser(true)
        setInfoUser(dataUser)
    }

    const resetInfoUser = () => {
        setInfoUser({})
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
                    <TableUser 
                        listUsers={listUsers} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalViewUser 
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    infoUser={infoUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userUpdate={infoUser}
                    resetUpdateUser={resetInfoUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    userDelete={infoUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    );
}

export default ManageUser;