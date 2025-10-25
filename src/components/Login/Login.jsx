import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero my-20">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-green-950 text-center mt-2 mb-5">Login now!</h1>
                    <form>
                        <fieldset className="fieldset">
                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />
                            {/* Password Field */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-green-800 text-white mt-4 hover:bg-green-700">Login</button>
                        </fieldset>
                    </form>
                    <button className='btn btn-outline w-full text-green-800 hover:bg-green-700 hover:text-white'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
                    <p className='mt-2'>New to our Website? Please <Link className='underline text-green-800 font-bold' to="/signup">SignUp</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;