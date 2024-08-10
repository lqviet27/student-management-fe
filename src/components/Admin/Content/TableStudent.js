import { Modal } from "bootstrap";

const TableStudent = (props) => {
    const {listStudents, handleClickBtnView, handleClickBtnUpdate, handleClickBtnDelete} = props;

    //khong code theo cach nay
    /*
    useEffect(async () => {
        let res = await getAllStudents()
        console.log(res)
    },[])
    */
    // const handleView = (studentDetail) => {
    //     console.log(studentDetail)
    // }

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
            {listStudents && listStudents.length > 0 &&
                listStudents.map( (item,index) => {
                    return (
                        <tr key={`table-students-${index}`}>
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
                listStudents && listStudents.length === 0 &&
                <tr>
                    <td colSpan="4" className="text-center">No data</td>
                </tr>
            }
        </tbody>
      </table>
    </>
  );
};

export default TableStudent;
