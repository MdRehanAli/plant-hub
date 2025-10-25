import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn, googleSignIn, resetPassword } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef();   // ✅ Add this


    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Login Successfully!");
                form.reset();
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(location.state || '/')
                toast.success("Login Successfully!");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Please enter your email address first!");
            return;
        }
        resetPassword(email)
            .then(() => {
                toast.success("Password reset email sent!");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero my-20">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-green-950 text-center mt-2 mb-5">Login now!</h1>
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" ref={emailRef} />
                            {/* Password Field */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>
                            <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn bg-green-800 text-white mt-4 hover:bg-green-700">Login</button>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-green-800 hover:bg-green-700 hover:text-white'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
                    <p className='mt-2'>New to our Website? Please <Link className='underline text-green-800 font-bold' to="/signup">SignUp</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;