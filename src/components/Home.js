import { useState, useEffect } from "react"
import Table from './UserTable'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userName = 'viet'
        const password = '123'

        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(userName + ":" + password));

        fetch("http://localhost:666/api/students",{
            method: 'GET',
            headers: headers
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
        .catch(()=>{
            console.log('error')
        })
    },[])

    console.log(users)

    return(
        <Table users={users}/>
    )
}

export default Home