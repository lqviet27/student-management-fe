import { useEffect, useState } from "react";
import TableUserPaginate from "./TableUserPaginate";
import {getAllUsersWithPaginate }from "../../../services/ApiService"
import { Modal } from "bootstrap";
import './ManageUser.scss'
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
    const LIMIT_USER = 5;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    const [listUsers, setListUsers] = useState([]);
    const [showModalUpdateUser,setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser,setShowModalDeleteUser] = useState(false);
    const [showModalCreateUser,setShowModalCreateUser] = useState(false);
    const [infoUser, setInfoUser] = useState({});

    useEffect( () => {
        fetchListUsers(1);
    },[])

    const fetchListUsers = async (page) => {
        let res = await getAllUsersWithPaginate(page,LIMIT_USER)
        if(res.data && res.data.ec === 0) {
            setListUsers(res.data.data.users)
            setPageCount(res.data.data.totalPages)
        }
    }
    const handleClickBtnCreate = () => {
        setShowModalCreateUser(true);
    }

    const handleClickBtnUpdate = (dataUser) => {
        setShowModalUpdateUser(true);
        setInfoUser(dataUser);
    }

    const handleClickBtnDelete = (dataUser) => {
        console.log("delete");
        setShowModalDeleteUser(true);
        setInfoUser(dataUser);
    }


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="content">
                <div className="btn-add-user">
                    <button 
                        className="btn btn-primary"
                        onClick={handleClickBtnCreate}
                    >
                        Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUserPaginate
                        listUsers={listUsers}
                        setListUsers={setListUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsers={fetchListUsers}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    showModalCreateUser={showModalCreateUser}
                    setShowModalCreateUser={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    showModalUpdateUser={showModalUpdateUser}
                    setShowModalUpdateUser={setShowModalUpdateUser}
                    updateUser={infoUser}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalDeleteUser
                    showModalDeleteUser={showModalDeleteUser}
                    setShowModalDeleteUser={setShowModalDeleteUser}
                    deleteUser={infoUser}
                    fetchListUsers={fetchListUsers}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </div>
        </div>
    );
}

export default ManageUser;