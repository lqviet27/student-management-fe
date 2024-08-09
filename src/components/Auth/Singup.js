import { toast } from 'react-toastify';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from "react-bootstrap";

import {postSignup} from '../../services/ApiService'
import BackgroundImage from "../../assets/background.png";
import Logo from "../../assets/logo.png";
import './Signup.scss'



const Signup = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
  

    const navigate = useNavigate();

  
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputUsername,inputPassword)
        let res = await postSignup(inputUsername,inputPassword)
        console.log(res)
        if (res.data && res.data.ec ==0 ){
            toast.success(res.data.em)
            localStorage.setItem("token", res.data.data.token)
            navigate("/login")
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)
        }
    };
  



    return (
        <div className="signup-container">
            <div className="signup-header">
                <span>Already have an account?</span>
                <button className='btn btn-primary' onClick={() => navigate("/login")}>Log in</button>
            </div>
            <div className="signup-content-form">
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
                    <div className="h4 mb-2 text-center">Sign Up</div>
                    

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

                    <Button className="w-100" variant="primary" type="submit" >
                        Create my free account
                    </Button>
                    <div className="form-footer">
                        <Button
                            className="text-muted px-0"
                            variant="link"
                            onClick={() => navigate("/")}
                        >
                            &#60;&#60; Go to Homepage
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

export default Signup;