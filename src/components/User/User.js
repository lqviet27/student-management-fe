import { ToastContainer, toast,Bounce } from "react-toastify";

const User = (props) => {
    return (
        <div>
            <h1 onClick={()=>{toast.info("xin chao")}}>User</h1>
        </div>
    );
}

export default User;