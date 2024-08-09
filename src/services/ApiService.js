import axios from "../utils/axiosCustumize";

const postCreateUser =  (email, hoDem, ten, gender, dateOfBirth, phone, address, facebook, avatarFile) => {
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
    return axios.post('/api/student', data)
}

const getAllUsers = () => {
    return axios.get('/api/student/all')
}

const getAllUsersWithPaginate = (page, limit) => {
    return axios.get(`/api/student?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
}


const putUpdateUser =  (id, email, hoDem, ten, gender, dateOfBirth, phone, address, facebook, avatarFile) => {
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
    return axios.put(`/api/student/${id}`, data)
}

const deleteUser = (id) => {
    return axios.delete(`/api/student/${id}`)
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


export {postCreateUser, getAllUsers, putUpdateUser, deleteUser, getAllUsersWithPaginate, postLogin,postSignup}