import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { useDispatch, useSelector } from "react-redux";
import Add from '@mui/icons-material/Add';
import { Card } from "../../components/Card";
import { addDisease, fetchDisease, removeDisease } from '../../feature/DiseaseSlice';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Maladie = () => {
    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();
    const { loading, DiseaseList, error, response } = useSelector(
        (state) => state.Disease
    );

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        dispatch(fetchDisease());
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(
            addDisease({
                name: name,
                description: description,
                type: type,
            })
        );
        setName("");
        setDescription("");
        setType("");
        setOpen(false);
    };

    const deleteDisease = (id) => {
        dispatch(removeDisease(id));
        dispatch(fetchDisease());
    };


    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <ToastContainer />
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1 rounded-lg '>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden dark:bg-[#343338] shadow-dashboard px-8 pt-3  rounded-lg pb-3">
                    <div className='flex justify-between mb-6 mt-2'>
                        <h1 className='font-bold text-2xl  text-white'>All Maladies </h1>
                        <React.Fragment>
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-900"
                                variant="outlined"
                                color="neutral"
                                onClick={ () => setOpen(true) }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Add Maladie</span>
                            </button>
                            <Modal open={ open } onClose={ () => setOpen(false) } className='container mx-auto bg'>
                                <ModalDialog className=' dark:bg-[#343338]'>
                                    <h1 className='text-center font-bold text-4xl text-white'>Add New Maladie</h1>
                                    <div className="max-w-md mx-auto">
                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                    Name
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="name" type="text" placeholder="Product Name"

                                                    value={ name }
                                                    onChange={ (e) => {
                                                        setName(e.target.value);
                                                    } }

                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
                                                    Description
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="quantity" type="text" name="description" placeholder="description"


                                                    value={ description }
                                                    onChange={ (e) => {
                                                        setDescription(e.target.value);
                                                    } }
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                    Type
                                                </label>
                                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type"

                                                    value={ type }
                                                    onChange={ (e) => {
                                                        setType(e.target.value);
                                                    } }>
                                                    <option value="" disabled>Select Type</option>
                                                    <option value="biotique">Option 1</option>
                                                    <option value="abiotique">Option 2</option>
                                                    <option value="ravaguer">Option 3</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={ (e) => { handleClick(e) } }
                                                >
                                                    Create Product
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </ModalDialog>
                            </Modal>
                        </React.Fragment>
                    </div>
                    <table className="w-full dark:bg-[#343338]">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 dark:text-white tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Name</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Description</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Type</th>

                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Status</th>

                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Action</th>

                            </tr>
                        </thead>
                        <tbody className="w-full">

                            { loading ? <p> Loading... </p> : null }
                            { !loading && DiseaseList.length === 0 && (
                                <div className="w-full mx-auto">
                                    <p className="text-center text-gray-500 font-bold">No Diseases Found</p>
                                </div>
                            ) }

                            { !loading && error ? <p> { error } </p> : null }
                            {
                                DiseaseList.map((item, index) => (
                                    <tr key={ item.id }>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-900 dark:text-white">{ item.id }</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-900 dark:text-white">{ item.name }</div>
                                                </div>
                                            </div>
                                        </td>



                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 dark:text-white text-sm leading-5">{ item.description }</td>


                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 dark:text-white text-sm leading-5">{ item.type } </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-100 leading-tight">
                                                <span aria-hidden className="absolute inset-0 bg-green-500 opacity-50 rounded-full"></span>
                                                <span className="relative text-xs">normal</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-900 ml-3"
                                                onClick={ () => deleteDisease(item.id) }

                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>


                                            </button>
                                        </td>
                                    </tr>

                                )) }
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default Maladie
