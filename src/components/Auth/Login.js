import './Login.scss'
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ImSpinner } from "react-icons/im";

import BackgroundImage from "../../assets/background.png";
import Logo from "../../assets/logo.png";
import {postLogin} from '../../services/ApiService'
import { doLogin } from '../../redux/action/userAction';
import { set } from 'lodash';



const Login = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
  

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        let res = await postLogin(inputUsername,inputPassword)
        if (res.data && res.data.ec === 0 ){
            dispatch(doLogin(res.data))
            toast.success(res.data.em)
            localStorage.setItem("token", res.data.data.token)
            setIsLoading(false)
            navigate("/")
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)
            setIsLoading(false)
        }

    };
  
    const handlePassword = () => {};



    return (
        <div className="login-container">
            <div className="login-header">
                <span>Don't have an account?</span>
                <button className='btn btn-primary' onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
            <div className="login-content-form">
                <div
                    className="sign-in__wrapper"
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                >
                {/* Overlay */}
                <div className="sign-in__backdrop"></div>
                {/* Form */}
                <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                    {/* Header */}
                    <img
                        className="img-thumbnail mx-auto d-block mb-2"
                        src={Logo}
                        alt="logo"
                    />
                    <div className="h4 mb-2 text-center">Sign In</div>
                    

                    <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value) }
                        required
                    />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={inputPassword}
                            placeholder="Password"
                            onChange={(e) => setInputPassword(e.target.value) }
                            required
                        />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit" disabled={isLoading} >
                        {isLoading && <ImSpinner className='loaderIcon'/>}
                        <span>Log In</span>
                    </Button>

                    <div className="form-footer">
                        <Button
                            className="text-muted px-0"
                            variant="link"
                            onClick={() => navigate("/")}
                        >
                            &#60;&#60; Go to Homepage
                        </Button>
                        <Button
                            className="text-muted px-0"
                            variant="link"
                            onClick={handlePassword}
                        >
                            Forgot password?
                        </Button>
                        
                    </div>
                </Form>
                {/* Footer */}
                <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
                    Made by tuitenvv | &copy;2024
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login;