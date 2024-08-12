import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css';

const TableUserPaginate = (props) => {
 
    const {listUsers, setListUsers} = props;


    const handlePageClick = (event) => {
        props.fetchListUsers(+event.selected+1)
        props.setCurrentPage(+event.selected+1)
        console.log(
          `Student requested page number ${event.selected+1}`
        );
    };

    return (
        <>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">UserName</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {listUsers && listUsers.length > 0 &&
                  listUsers.map( (item,index) => {
                      return (
                          <tr key={`table-user-${index}`}>
                              <th scope="row">{item.id}</th>
                              <td>{item.username}</td>
                              <td>{item.role}</td>
                              <td>
                                  <button className="btn btn-warning mx-3" onClick={() => props.handleClickBtnUpdate(item)}>Cập nhật</button>
                                  <button className="btn btn-danger" onClick={() => props.handleClickBtnDelete(item)}>Xóa</button>
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

        <div className="user-pagination">
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
                pageCount={props.pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage-1}
            />
      </div>
      </>
    )
}


export default TableUserPaginate;