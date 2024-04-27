import { React, useState } from 'react'
import HomeNav from '../../components/HomeNav'
import Footer from '../../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../store/UserSlice';


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});
    const handleNameInput = (e) => setName(e.target.value);
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);
    const handleRoleInput = (e) => setRole(e.target.value);

    const { loading, error } = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validate = () => {
        let tempErrors = {};
        tempErrors.name = name ? "" : "Name is required.";
        tempErrors.email = email ? (/\S+@\S+\.\S+/.test(email) ? "" : "Email is not valid.") : "Email is required.";
        tempErrors.password = password ? (password.length > 7 ? "" : "Password must be at least 8 characters long.") : "Password is required.";
        tempErrors.role = role ? "" : "Role is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };



    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        let userCredential = { name, email, password, role };
        dispatch(RegisterUser(userCredential))
            .then((result) => {
                if (result.payload) {
                    setName('');
                    setEmail('');
                    setPassword('');
                    navigate('/login');
                }
            });
    };


    return (
        <div>
            <HomeNav />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div
                    className=" flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
                >
                    <form className="flex flex-col justify-center px-8 md:p-14"

                        onSubmit={ handleRegister }>
                        <span className="mb-3 text-6xl text-center font-bold">Register</span>
                        <span className="font-light text-gray-400 mb-8 text-center">
                            Welcom ! Please enter your details
                        </span>




                        { error &&
                            <div className="hover:red-yellow-500 w-full mb-2 select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium"> Invalide !</div>
                        }
                        <div className="py-4">
                            <span className="mb-2 text-md">Name</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="name"
                                id="name"
                                onChange={ handleNameInput }
                                value={ name }

                            />
                            { errors.name && <p className="text-red-500 text-xs mt-1">{ errors.name }</p> }
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Email</span>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                                onChange={ handleEmailInput }
                                value={ email }

                            />
                            { errors.email && <p className="text-red-500 text-xs mt-1">{ errors.email }</p> }
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Role</span>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name='role'
                                onChange={ handleRoleInput }
                                value={ role }
                            >
                                <option value="" disabled>Select your role</option>
                                <option value="Technician">Technician</option>
                                <option value="Magazinier">Magazinier</option>
                            </select>
                            { errors.role && <p className="text-red-500 text-xs mt-1">{ errors.role }</p> }
                        </div>


                        <div className="py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                onChange={ handlePwdInput }
                                value={ password }

                            />
                            { errors.password && <p className="text-red-500 text-xs mt-1">{ errors.password }</p> }
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                                <span className="text-md">Remember for 30 days</span>
                            </div>
                            <span className="font-bold text-md">Forgot password</span>
                        </div>
                        <button
                            className="w-full bg-green-900 text-white p-2 rounded-lg mb-6 hover:bg-green-800 hover:text-white hover:border hover:border-gray-300"
                        >
                            { loading ? 'Loading... ' : 'Register' }

                        </button>

                        <div className="flex justify-center text-center text-gray-400">
                            have an account?
                            <Link to='/login' className="mx-3 font-bold text-black">Login now</Link>
                        </div>
                    </form>
                    <div className="relative">
                        <img
                            src="https://img.freepik.com/free-photo/herd-black-white-cows-grassland_53876-146257.jpg?w=740"
                            alt="img"
                            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                        />
                        <div
                            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                        >
                            <span className="text-white text-xl"
                            >We've been uesing Untitle to kick"<br />start every new project
                                and can't <br />imagine working without it."
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
