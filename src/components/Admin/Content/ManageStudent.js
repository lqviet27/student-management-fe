import ModalCreateStudent from "./ModalCreateStudent";
import ModalViewStudent from "./ModalViewStudent";
import ModalUpdateStudent from "./ModalUpdateStudent";
import './ManageStudent.scss';
import TableStudent from "./TableStudent";
import { useEffect, useState } from "react";
import {getAllStudents, getAllStudentsWithPaginate} from "../../../services/ApiService";
import ModalDeleteStudent from "./ModalDeleteStudent";
import TableStudentPaginate from "./TableStudentPaginate";
import { set } from "lodash";

const ManageStudent = (props) => {
    const LIMIT_Student = 5
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)


    const [showModalCreateStudent, setShowModalCreateStudent] = useState(false);
    const [showModalViewStudent, setShowModalViewStudent] = useState(false);
    const [showModalUpdateStudent, setShowModalUpdateStudent] = useState(false);
    const [showModalDeleteStudent, setShowModalDeleteStudent] = useState(false);
    const [infoStudent, setInfoStudent] = useState({});

    const [listStudents, setListStudents] = useState([]);

    useEffect( () => {
        // fetchListStudents()
        fetchListStudentsWithPaginate(1)
    },[])

    const fetchListStudents = async () => {
        let res =  await getAllStudents()
        // console.log(res)
        if (res.data && res.data.ec === 0){
            setListStudents(res.data.data)
        }
    }

    const fetchListStudentsWithPaginate = async (page) => {
        let res =  await getAllStudentsWithPaginate(page, LIMIT_Student)
        console.log(res)
        if (res.data && res.data.ec === 0){
            setListStudents(res.data.data.students)
            setPageCount(res.data.data.totalPages)
        }
    }

    const handleClickBtnView = (dataStudent) =>{
        setShowModalViewStudent(true)
        setInfoStudent(dataStudent)
    }

    const handleClickBtnUpdate = (dataStudent) =>{
        setShowModalUpdateStudent(true)
        setInfoStudent(dataStudent)
    }

    const handleClickBtnDelete = (dataStudent) =>{
        setShowModalDeleteStudent(true)
        setInfoStudent(dataStudent)
    }

    const resetInfoStudent = () => {
        setInfoStudent({})
    }
    return (
        <div className="manage-student-container">
            <div className="title">
                Manage Student
            </div>
            <div className="students-content">
                <div className="btn-add-students">
                    <button 
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateStudent(true)}
                    >
                        Add new student</button>
                </div>
                <div className="table-students-container">
                    <TableStudentPaginate
                        listStudents={listStudents} 
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListStudentsWithPaginate={fetchListStudentsWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateStudent 
                    show={showModalCreateStudent}
                    setShow={setShowModalCreateStudent}
                    fetchListStudents={fetchListStudents}
                    fetchListStudentsWithPaginate={fetchListStudentsWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
                <ModalViewStudent 
                    show={showModalViewStudent}
                    setShow={setShowModalViewStudent}
                    infoStudent={infoStudent}
                />
                <ModalUpdateStudent
                    show={showModalUpdateStudent}
                    setShow={setShowModalUpdateStudent}
                    studentUpdate={infoStudent}
                    resetUpdateStudent={resetInfoStudent}
                    fetchListStudents={fetchListStudents}
                    fetchListStudentsWithPaginate={fetchListStudentsWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
                <ModalDeleteStudent
                    show={showModalDeleteStudent}
                    setShow={setShowModalDeleteStudent}
                    studentDelete={infoStudent}
                    fetchListStudents={fetchListStudents}
                    fetchListStudentsWithPaginate={fetchListStudentsWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                />
            </div>
        </div>
    );
}

export default ManageStudent;