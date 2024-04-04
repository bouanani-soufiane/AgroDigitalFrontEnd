import React from 'react'

const Profile = () => {
    return (

        <>
            <div className="">


                <div class="h-full">

                    <div class=" block md:flex relative ">

                        <div class=" rounded-lg w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white dark:hover:bg-[#343338] dark:bg-[#2B2A2F] shadow-md">
                            <div class="flex justify-between">
                                <span class="text-xl font-semibold block dark:text-white">Admin Profile</span>
                            </div>
                            <div class="w-full pt-4 mx-2 flex gap-4">
                                <img id="showImage" class="rounded-lg  items-center " src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="" />
                                <div className=''>
                                    <div className=''>
                                        <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            <i class="fas fa-heart"></i>  10 task pending
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button class="bg-indigo-950 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            10 task copleted
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class=" rounded-lg w-full md:w-3/5 p-8  dark:hover:bg-[#343338] bg-green-950 dark:bg-[#2B2A2F] text-white lg:ml-4 shadow-md">
                            <a href="#" class="absolute right-0 top-0 text-md font-bold dark:bg-gray-800 dark:hover:bg-gray-700  text-white bg-green-800 hover:bg-green-700  px-5 py-2 ">Edit</a>

                            <div class="rounded-lg dark:bg-[#343338] shadow p-6">
                                <div class="pb-6 rounded-lg">
                                    <label for="name" class=" rounded-lg font-semibold text-gray-100 block pb-1">Name</label>
                                    <div class="flex  rounded-lg bg-green-950 dark:bg-slate-900">
                                        <input disabled id="username" class="border-1  rounded-lg rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
                                    </div>
                                </div>
                                <div class="pb-4">
                                    <label for="about" class="font-semibold  text-gray-100 block pb-1">Email</label>
                                    <input disabled id="email" class="border-1   rounded-lg rounded-r px-4 py-2 w-full  dark:bg-slate-600" type="email" value="example@example.com" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>



    )
}

export default Profile
