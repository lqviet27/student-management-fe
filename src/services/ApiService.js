import axios from "../utils/axiosCustumize";

const postCreateStudent =  (email, hoDem, ten, gender, dateOfBirth, phone, address, facebook, avatarFile) => {
    const data = new FormData()
    data.append('hoDem', hoDem)
    data.append('ten', ten)
    data.append('email', email)
    data.append('studentDetail.gender',gender)
    data.append('studentDetail.dateOfBirth', dateOfBirth)
    data.append('studentDetail.phoneNum', phone)
    data.append('studentDetail.address', address)
    data.append('studentDetail.facebook', facebook)
    if (avatarFile) {
        data.append('imageFile', avatarFile);
    }
    return axios.post('/api/student', data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const getAllStudents = () => {
    return axios.get('/api/student/all',
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const getAllStudentsWithPaginate = (page, limit) => {
    return axios.get(`/api/student?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}


const putUpdateStudent =  (id, email, hoDem, ten, gender, dateOfBirth, phone, address, facebook, avatarFile) => {
    const data = new FormData()
    data.append('hoDem', hoDem)
    data.append('ten', ten)
    data.append('email', email)
    data.append('studentDetail.gender',gender)
    data.append('studentDetail.dateOfBirth', dateOfBirth)
    data.append('studentDetail.phoneNum', phone)
    data.append('studentDetail.address', address)
    data.append('studentDetail.facebook', facebook)
    if (avatarFile) {
        data.append('imageFile', avatarFile);
    }
    return axios.put(`/api/student/${id}`, data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const deleteStudent = (id) => {
    return axios.delete(`/api/student/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const postLogin = (userName, password) => {
    const data = new FormData()
    data.append('userName', userName)
    data.append('password', password)
    return axios.post('/api/auth/signin', data)
    // return axios.post('/api/auth/signin', {userName, password}) // {userName: userName, password: password} sử dụng www-form-urlencoded
}

const postSignup = (userName, password) => {
    const data = new FormData()
    data.append('userName', userName)
    data.append('password', password)
    return axios.post('/api/auth/signup', data)
    // return axios.post('/api/auth/signin', {userName, password}) // {userName: userName, password: password} sử dụng www-form-urlencoded
}

const postLogout = (username) =>{
    return axios.post(`/api/user/logout/${username}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}
const getAllUsersWithPaginate = (page, limit) => {
    return axios.get(`/api/user?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const postCreateUser = (username, password, role) => {
    const data = new FormData()
    data.append('userName', username)
    data.append('password', password)
    data.append('role', ("ROLE_" + role))


    for (let pair of data.entries()) {
        console.log(pair[0] + ': ' + pair[1])
    }

    return axios.post(`/api/user`, data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const putUpdateUser =  (id, username, password, role) => {
    const data = new FormData()
    data.append('userName', username)
    data.append('password', password)
    data.append('role', ("ROLE_" + role))

    return axios.put(`/api/user/${id}`, data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const deleteUser = (id) => {
    return axios.delete(`/api/user/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

const putChangePassword = (username, oldPassword, newPassword) => {
    const data = new FormData()
    data.append('oldPassword', oldPassword)
    data.append('newPassword', newPassword)

    return axios.put(`/api/user/change-password/${username}`, data,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}

export {
    postCreateStudent,
    getAllStudents, 
    putUpdateStudent,
    deleteStudent,
    getAllStudentsWithPaginate,
    postLogin,
    postSignup,
    postLogout,
    getAllUsersWithPaginate,
    postCreateUser,
    putUpdateUser,
    deleteUser,
    putChangePassword
}