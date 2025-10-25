import { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {

    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more then 5 character");
            return;
        }
        else {
            setNameError("");
        }
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Validate Password 
        const validatePassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        //  Check if password matches
        if (!validatePassword.test(password)) {
            setPasswordError("Opps! Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter");
            return
        }

        // reset status: success or error 
        setPasswordError('');

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate(location.state || '/');
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });
                toast.success("User Sign up Successfully")
                form.reset();
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }


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
                    <form onSubmit={handleSignUp}>
                        <fieldset className="fieldset">
                            {/* Email Field */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input w-full" placeholder="Name" required />
                            {/* Email Field */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" required />
                            {/* Email Field */}
                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input w-full" placeholder="Photo URL" required />
                            {/* Password Field */}
                            <label className="label">Password</label>
                            <div className='flex items-center relative'>
                                <input name='password' type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" required />
                                <button onClick={handleShowPassword} className='absolute top-2 right-5 text-2xl'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                            </div>
                            <button type='submit' className="btn bg-green-800 text-white hover:bg-green-700 mt-4">Sign Up</button>
                        </fieldset>
                        {
                            passwordError && <div>
                                <p className='text-red-500 text-center'>{passwordError}</p>
                            </div>
                        }
                        {
                            nameError && <div>
                                <p className='text-red-500 text-center'>{nameError}</p>
                            </div>
                        }
                    </form>
                    <p className='mt-2'>Already have an Account? Please <Link className='underline text-green-800 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;