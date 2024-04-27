import { React, useState } from 'react'
import HomeNav from '../../components/HomeNav'
import Footer from '../../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../store/UserSlice';

const Login = () => {

    //states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);

    //redux state
    const { loading, error } = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault()
        let userCredential = {
            email, password
        }
        await dispatch(LoginUser(userCredential))
            .then((result) => {
                // console.log(result);
                if (result.payload) {
                    // console.log(result.payload);
                    setEmail('');
                    setPassword('');
                    navigate('/');
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
                    <form className="flex flex-col justify-center p-8 md:p-14"
                        onSubmit={handleLogin}
                    >
                        <span className="mb-3 text-4xl font-bold">Welcome back</span>
                        <span className="font-light text-gray-400 mb-8">
                            Welcom back! Please enter your details
                        </span>
                        {error &&
                            <div class="hover:red-yellow-500 w-full mb-2 select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium">{error }</div>
                        }
                        <div className="py-4">
                            <span className="mb-2 text-md">Email</span>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                value={email}
                                onChange={handleEmailInput}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                onChange={handlePwdInput}
                                required
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
                            {loading ? 'Loading... ' : ' Sign in'}
                        </button>

                        <div className="flex justify-center text-center text-gray-400">
                            Dont'have an account?
                            <Link to='/register' className="mx-3 font-bold text-black">Sign up for free</Link>
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

export default Login
