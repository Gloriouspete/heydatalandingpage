import React, { useState } from 'react';
import './media.css';
import './style.css';


import { Header } from '../header/header';
import { MdLock, MdMail } from 'react-icons/md';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');


    const handleSubmit = () =>{
        
    }
    return (
        <>
            <Header />
            <div className='loginmain'>
                <div className='loginbox'>
                    <p className='loginbig'>Login</p>
                    <p className='please'>Please sign in to continue.</p>

                    <div className='formbox'>
                        <div className='boxcont'>
                            <MdMail size={22} color='grey' />
                            <input type='email' placeholder='Enter Email' value={email}  className='inputstyle' />

                        </div>
                        <div className='boxcont'>
                            <MdLock size={22} color='grey' />
                            <input type='password' placeholder='Input Password' value={password}  className='inputstyle' />

                        </div>

                        <button className='buttonstyle' onClick={() => handleSubmit} >Login</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;