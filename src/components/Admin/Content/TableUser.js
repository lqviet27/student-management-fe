import { useEffect, useState } from "react";
import axios from "axios";
import {getAllUsers} from "../../../services/ApiService";


const TableUser = (props) => {
    const [list, setList] = useState([]);

    //khong code theo cach nay
    /*
    useEffect(async () => {
        let res = await getAllUsers()
        console.log(res)
    },[])
    */
    useEffect( () => {
        fetchList()
    },[])

    const fetchList = async () => {
        let res =  await getAllUsers()
        console.log(res)
        if (res.data && res.data.ec === 0){
            setList(res.data.data)
        }
    }

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Họ đệm</th>
            <th scope="col">Tên</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            {list && list.length > 0 &&
                list.map( (item,index) => {
                    return (
                        <tr key={`table-users-${index}`}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.hoDem}</td>
                            <td>{item.ten}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-secondary">Xem</button>
                                <button className="btn btn-warning mx-3">Cập nhật</button>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    )
                })
            }
            {
                list && list.length === 0 &&
                <tr>
                    <td colSpan="4" className="text-center">No data</td>
                </tr>
            }
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
