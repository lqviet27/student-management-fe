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
    data.append('imageFile', avatarFile)
    console.log(data)
    return axios.post('/api/student', data)
}

const getAllUsers = () => {
    return axios.get('/api/student/all')
}

export {postCreateUser, getAllUsers}