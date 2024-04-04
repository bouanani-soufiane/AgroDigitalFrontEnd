import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const HomeNav = () => {
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Register', link: '/register' },
        { id: 3, text: 'Login', link: '/login' },


    ];

    return (
        <div className='bg-green-800 flex justify-between items-center h-24  mx-auto px-4 text-white'>

            <h1 className='w-full text-3xl mx-5 font-bold text-[#FFF]'>AGRIDIGITAL.</h1>


            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:bg-green-900 font-semibold text-xl rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
                    >
                        <Link
                            to={item.link}
                        >
                            {item.text}
                        </Link>


                    </li>
                ))}
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >

                <h1 className='w-full text-2xl font-bold text-[#FFF] m-4'>AGRIDIGITAL.</h1>

                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

        </div>
    );

}

export default HomeNav
