import { FETCH_USER_LOGIN_SUCCESS, FETCH_USER_LOGOUT_SUCCESS } from "../action/userAction";

const INTIAL_STATE = {
    account: {
        token: '',
        user_name: '',
        role:''
    },
    isAuthenticated: false,
}
const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log(action)
            return {
                ...state,
                account: {
                    token: action?.payload?.data?.token,
                    user_name: action?.payload?.data?.user_name,
                    role: action?.payload?.data?.role
                },
                isAuthenticated: true
            }
        case FETCH_USER_LOGOUT_SUCCESS:
            console.log(action)
            return {
                ...state,
                account: {
                    token: '',
                    user_name: '',
                    role: ''
                },
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default userReducer;