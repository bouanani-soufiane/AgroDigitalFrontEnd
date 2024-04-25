import { React, useState } from 'react'
import HomeNav from '../../components/HomeNav'
import Footer from '../../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../store/UserSlice';


const Register = () => {
    //states

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const handleNameInput = (e) => setName(e.target.value);
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);
    const handleRoleInput = (e) => setRole(e.target.value);

    //redux state
    const { loading, error } = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault()
        let userCredential = {
            name, email, password, role
        }
        dispatch(RegisterUser(userCredential))
            .then((result) => {
                if (result.payload) {
                    setName('');
                    setEmail('');
                    setPassword('');
                    navigate('/login');
                }
            })
    }


    return (
        <div>
            <HomeNav />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div
                    className=" flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
                >
                    <form className="flex flex-col justify-center px-8 md:p-14"

                        onSubmit={handleRegister}>
                        <span className="mb-3 text-6xl text-center font-bold">Register</span>
                        <span className="font-light text-gray-400 mb-8 text-center">
                            Welcom ! Please enter your details
                        </span>
                        {error &&
                            <div className="hover:red-yellow-500 w-full mb-2 select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium"> Invalide Credential!</div>
                        }
                        <div className="py-4">
                            <span className="mb-2 text-md">Name</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="name"
                                id="name"
                                onChange={handleNameInput}
                                value={name}

                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Email</span>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                                onChange={handleEmailInput}
                                value={email}

                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Role</span>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name='role'
                                onChange={handleRoleInput}
                                value={role}
                            >
                                <option value="" disabled>Select your role</option>
                                <option value="Technician">Technician</option>
                                <option value="Magazinier">Magazinier</option>
                            </select>
                        </div>


                        <div className="py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input
                                type="password"
                                name="password"
                                id="pass"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                onChange={handlePwdInput}
                                value={password}

                            />
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
                            {loading ? 'Loading... ' : 'Register'}

                        </button>
                        <button
                            className="flex justify-center  w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span className='mx-3'>Sign in with Google
                            </span>
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
