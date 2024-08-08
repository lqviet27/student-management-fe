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
    return axios.get(`/api/student?page=${page}&limit=${limit}`)
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
export {postCreateUser, getAllUsers, putUpdateUser, deleteUser, getAllUsersWithPaginate}