import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <div className="hero my-20">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-green-950 text-center mt-2 mb-5">SignUp now!</h1>
                    <form>
                        <fieldset className="fieldset">
                            {/* Email Field */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input w-full" placeholder="Name" />
                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />
                            {/* Email Field */}
                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input w-full" placeholder="Photo URL" />
                            {/* Password Field */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>
                            <button className="btn bg-green-800 text-white mt-4">Sign Up</button>
                        </fieldset>
                    </form>
                    <p className='mt-2'>Already have an Account? Please <Link className='underline text-green-800 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;