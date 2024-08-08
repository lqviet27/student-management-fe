import ModalCreateUser from "./ModalCreateUser";
import ModalViewUser from "./ModalViewUser";
import ModalUpdateUser from "./ModalUpdateUser";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import {getAllUsers, getAllUsersWithPaginate} from "../../../services/ApiService";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { set } from "lodash";

const ManageUser = (props) => {
    const LIMIT_USER = 5
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)


    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [infoUser, setInfoUser] = useState({});

    const [listUsers, setListUsers] = useState([]);

    useEffect( () => {
        // fetchListUsers()
        fetchListUsersWithPaginate(1)
    },[])

    const fetchListUsers = async () => {
        let res =  await getAllUsers()
        // console.log(res)
        if (res.data && res.data.ec === 0){
            setListUsers(res.data.data)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res =  await getAllUsersWithPaginate(page, LIMIT_USER)
        console.log(res)
        if (res.data && res.data.ec === 0){
            setListUsers(res.data.data.students)
            setPageCount(res.data.data.totalPages)
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
                    {/* <TableUser 
                        listUsers={listUsers} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

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
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    userDelete={infoUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
            </div>
        </div>
    );
}

export default ManageUser;