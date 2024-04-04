import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

import Add from '@mui/icons-material/Add';
import { Card } from "../../components/Card";
const Employee = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1 '>


                <div className="align-middle inline-block min-w-full shadow overflow-hidden dark:bg-[#343338] shadow-dashboard px-8 pt-3  rounded-lg pb-3">
                    <h1 className='font-bold text-2xl mb-8 mt-2 text-white'>All Employees </h1>

                    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3 class="truncate text-sm font-medium text-gray-900">Yahya sinwar</h3>
                                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">head leader</span>
                                    </div>
                                    <p class="mt-1 truncate text-sm text-gray-500">Leader</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">hassan@gmail.com</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">+21297566736</p>
                                </div>
                                <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/231015-Yahya-Sinwar-Hamas-mb-0731-95501d.jpg" alt="" />
                            </div>
                            <div>
                                <div class="flex justify-center items-center content-center p-3">

                                    <div class=" flex w-0 flex-1">
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                startDecorator={<Add />}
                                                onClick={() => setOpen(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>assign task</span>
                                            </button>
                                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Assign new task</h1>
                                                    <div className="max-w-md mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="number" placeholder="Quantity" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                    Stock
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="number" placeholder="Stock" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                    Type
                                                                </label>
                                                                <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type">
                                                                    <option>Select Type</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                                                    Image
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="image" type="file" accept="image/*" />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3 class="truncate text-sm font-medium text-gray-900">Yahya sinwar</h3>
                                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">head leader</span>
                                    </div>
                                    <p class="mt-1 truncate text-sm text-gray-500">Leader</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">hassan@gmail.com</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">+21297566736</p>
                                </div>
                                <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/231015-Yahya-Sinwar-Hamas-mb-0731-95501d.jpg" alt="" />
                            </div>
                            <div>
                                <div class="flex justify-center items-center content-center p-3">

                                    <div class=" flex w-0 flex-1">
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                startDecorator={<Add />}
                                                onClick={() => setOpen(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>assign task</span>
                                            </button>
                                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Assign new task</h1>
                                                    <div className="max-w-md mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="number" placeholder="Quantity" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                    Stock
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="number" placeholder="Stock" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                    Type
                                                                </label>
                                                                <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type">
                                                                    <option>Select Type</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                                                    Image
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="image" type="file" accept="image/*" />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3 class="truncate text-sm font-medium text-gray-900">Yahya sinwar</h3>
                                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">head leader</span>
                                    </div>
                                    <p class="mt-1 truncate text-sm text-gray-500">Leader</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">hassan@gmail.com</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">+21297566736</p>
                                </div>
                                <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/231015-Yahya-Sinwar-Hamas-mb-0731-95501d.jpg" alt="" />
                            </div>
                            <div>
                                <div class="flex justify-center items-center content-center p-3">

                                    <div class=" flex w-0 flex-1">
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                startDecorator={<Add />}
                                                onClick={() => setOpen(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>assign task</span>
                                            </button>
                                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Assign new task</h1>
                                                    <div className="max-w-md mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="number" placeholder="Quantity" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                    Stock
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="number" placeholder="Stock" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                    Type
                                                                </label>
                                                                <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type">
                                                                    <option>Select Type</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                                                    Image
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="image" type="file" accept="image/*" />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3 class="truncate text-sm font-medium text-gray-900">Yahya sinwar</h3>
                                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">head leader</span>
                                    </div>
                                    <p class="mt-1 truncate text-sm text-gray-500">Leader</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">hassan@gmail.com</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">+21297566736</p>
                                </div>
                                <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/231015-Yahya-Sinwar-Hamas-mb-0731-95501d.jpg" alt="" />
                            </div>
                            <div>
                                <div class="flex justify-center items-center content-center p-3">

                                    <div class=" flex w-0 flex-1">
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                startDecorator={<Add />}
                                                onClick={() => setOpen(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>assign task</span>
                                            </button>
                                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Assign new task</h1>
                                                    <div className="max-w-md mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="number" placeholder="Quantity" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                    Stock
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="number" placeholder="Stock" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                    Type
                                                                </label>
                                                                <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type">
                                                                    <option>Select Type</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                                                    Image
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="image" type="file" accept="image/*" />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                            <div class="flex w-full items-center justify-between space-x-6 p-6">
                                <div class="flex-1 truncate">
                                    <div class="flex items-center space-x-3">
                                        <h3 class="truncate text-sm font-medium text-gray-900">Yahya sinwar</h3>
                                        <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">head leader</span>
                                    </div>
                                    <p class="mt-1 truncate text-sm text-gray-500">Leader</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">hassan@gmail.com</p>
                                    <p class="mt-1 truncate text-sm text-gray-500">+21297566736</p>
                                </div>
                                <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-10/231015-Yahya-Sinwar-Hamas-mb-0731-95501d.jpg" alt="" />
                            </div>
                            <div>
                                <div class="flex justify-center items-center content-center p-3">

                                    <div class=" flex w-0 flex-1">
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                startDecorator={<Add />}
                                                onClick={() => setOpen(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>assign task</span>
                                            </button>
                                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Assign new task</h1>
                                                    <div className="max-w-md mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                                    Name
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                                    Quantity
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="number" placeholder="Quantity" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                    Stock
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="number" placeholder="Stock" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                    Type
                                                                </label>
                                                                <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type">
                                                                    <option>Select Type</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                                                    Image
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="image" type="file" accept="image/*" />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Employee
