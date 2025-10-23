import React from 'react';

const Login = () => {
    return (
        <div className="hero my-20">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-green-950 text-center mt-2 mb-5">Login now!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-green-800 text-white mt-4">Login</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;