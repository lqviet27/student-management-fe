import { Modal } from "bootstrap";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const TableUserPaginate = (props) => {
    const {listUsers, handleClickBtnView, handleClickBtnUpdate, handleClickBtnDelete, fetchListUsersWithPaginate, pageCount} = props;

    const handlePageClick = (event) => {
        fetchListUsersWithPaginate(+event.selected+1)
        props.setCurrentPage(+event.selected+1)
        console.log(
          `User requested page number ${event.selected+1}`
        );
      };


      
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Họ đệm</th>
            <th scope="col">Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {listUsers && listUsers.length > 0 &&
                listUsers.map( (item,index) => {
                    return (
                        <tr key={`table-users-${index}`}>
                            <th scope="row">{item.id}</th>
                            <td>{item.hoDem}</td>
                            <td>{item.ten}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={() => handleClickBtnView(item)}>Xem</button>
                                <button className="btn btn-warning mx-3" onClick={() => handleClickBtnUpdate(item)}>Cập nhật</button>
                                <button className="btn btn-danger" onClick={() => handleClickBtnDelete(item)}>Xóa</button>
                            </td>
                        </tr>
                    )
                })
            }
            {
                listUsers && listUsers.length === 0 &&
                <tr>
                    <td colSpan="4" className="text-center">No data</td>
                </tr>
            }
        </tbody>
      </table>
      <div className="student-pagination">
        <ReactPaginate
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            forcePage={props.currentPage-1}
        />
      </div>
      
    </>
  );
};

export default TableUserPaginate;
