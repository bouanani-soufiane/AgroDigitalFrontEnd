import React, { useEffect, useState } from 'react'
import { employeeTask, markAsDone, markAsCancelled } from "../../feature/TaskSlice";
import { addReport } from "../../feature/ReportSlice";
import { fetchProduct } from "../../feature/ProductSlice";

import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { fetchDisease } from '../../feature/DiseaseSlice';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 10,
});

const Profile = () => {
    const userConnected = JSON.parse(localStorage.getItem('user'));
    // console.log(userConnected);

    const dispatch = useDispatch();
    const Task = useSelector(state => state.Task);
    const User = useSelector(state => state.user);
    const Product = useSelector(state => state.Product);

    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [task_id, setTaskId] = useState('');
    const [disease, setDisease] = useState('');
    const [product, setProduct] = useState([]);

    const [image, setImage] = useState('');
    const [type, setType] = useState('');


    const handleUpdateTaskClick = (id) => {
        setId(id)
        dispatch(markAsDone({
            id: id,
        })).then(toast.success('Task marked as done!'))
    }


    const handleCancelTaskClick = (id) => {
        setId(id)
        dispatch(markAsCancelled({
            id: id,
        })).then(toast.success('Task marked as cancelled!'))
    }


    const { loading, DiseaseList, error, response } = useSelector(
        (state) => state.Disease
    );
    useEffect(() => {
        dispatch(employeeTask());
        dispatch(fetchDisease());

    }, [dispatch]);


    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])

    const handleClickReport = (id, type) => {
        setOpen(true);
        setTaskId(id);
        setType(type);
    }


    const handleProductChange = (e) => {
        const selectedProducts = Array.from(e.target.selectedOptions, (option) => option.value);
        setProduct(selectedProducts);
    }
    const handleProvidekReport = () => {
        const formData = new FormData();

        formData.append("subject", subject);
        formData.append("content", content);
        formData.append("task_id", task_id);
        formData.append("disease_id", disease);
        formData.append("image", image);
        product.forEach(p => {
            formData.append("product_id[]", p);
        });

        // console.log(formData);
        dispatch(addReport({ formData: formData }))
            .then(toast.success('report added'));
        setOpen(false);


    }

    let pendingTask = 0;
    let doneTask = 0;

    Task.UserTask.forEach((usertask) => {
        if (usertask.Status === 'Pending') {
            pendingTask++;
        } else if (usertask.Status === 'Done') {
            doneTask++;
        }
    })


    console.log('pending', pendingTask);
    console.log('done', doneTask);





    return (

        <>
            <div className="">

                <ToastContainer />

                <div class="h-full">

                    <div class=" block md:flex relative ">

                        <div class=" rounded-lg w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white dark:hover:bg-[#343338] dark:bg-[#2B2A2F] shadow-md">
                            <div class="w-full pt-4 mx-2 justify-center flex gap-4 ">
                                <img id="showImage" class="rounded-lg  h-40 items-center " src="profile.jpg" alt="" />
                                <div className='flex align-middle items-center pt-8 flex-col justify-center gap-1 '>
                                    <div className=''>
                                        <button class="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            <i class="fas fa-heart"></i>  { pendingTask } task pending
                                        </button>
                                    </div>
                                    <div className=''>
                                        <button class="bg-indigo-950 text-white active:bg-teal-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            { doneTask } task copleted
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class=" rounded-lg w-full md:w-3/5 p-8  dark:hover:bg-[#343338] bg-green-50 dark:bg-[#2B2A2F] text-white lg:ml-4 shadow-md">


                            <div class="rounded-lg bg-green-100 dark:bg-[#343338] shadow p-6">
                                <div class="pb-6 rounded-lg">
                                    <label for="name" class=" rounded-lg font-semibold text-gray-900 block pb-1 dark:text-white">Name</label>
                                    <div class="flex  rounded-lg bg-green-950 dark:bg-slate-900">
                                        <input disabled id="username" class="border-1  bg-gray-950 dark:bg-slate-900 rounded-lg rounded-r px-4 py-2 w-full" type="text" value={ userConnected ? userConnected.name : "" } />
                                    </div>
                                </div>
                                <div class="pb-4 " >
                                    <label for="about" class="font-semibold  text-gray-900 block pb-1  dark:text-white">Position</label>
                                    <input disabled id="email" class="border-1 bg-gray-950   rounded-lg rounded-r px-4 py-2 w-full  dark:bg-slate-900" type="email" value={ userConnected ? userConnected.role : "" } />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="mt-12 align-middle inline-block min-w-full shadow overflow-hidden dark:bg-[#343338] shadow-dashboard px-8 pt-3  rounded-lg pb-3">
                    <h1 className='font-bold text-2xl mb-8 mt-2 dark:text-white'>My Tasks </h1>

                    <table className="w-full dark:bg-[#343338] mt-12 rounded">
                        <thead>

                            <tr>


                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 dark:text-white tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Title</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Description</th>


                                {
                                    User.user.role !== 'Magazinier' &&
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Task Type</th>
                                }

                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Estimate</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Start/end</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Status</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Actions</th>

                            </tr>

                        </thead>
                        <tbody className="w-full">
                            { Task.UserTask.map((task) => (
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.id }</div>

                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">

                                        <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.name }</div>

                                    </td>

                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.Description }</div>
                                            </div>
                                        </div>
                                    </td>

                                    {
                                        User.user.role !== 'Magazinier' &&

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.TypeTask }</div>
                                                </div>
                                            </div>
                                        </td>
                                    }

                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.DateStart }</div>
                                            </div>
                                        </div>
                                    </td>


                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 dark:text-white text-sm leading-5">{ task.DateEnd }</td>


                                    <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-gray-100 leading-tight">
                                            <span aria-hidden className={ `absolute inset-0 opacity-50 rounded-full ${task.Status === 'Done' ? 'bg-green-500' : task.Status === 'Pending' ? 'bg-gray-500' : task.Status === 'Cancelled' ? 'bg-red-500' : ''}` } ></span>
                                            <span className="relative text-xs">{ task.Status }</span>
                                        </span>

                                    </td>
                                    <td className="flex px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-900 ml-3"

                                            onClick={ () => handleUpdateTaskClick(task.id) }
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                                            </svg>

                                        </button>
                                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-900 ml-3"
                                            onClick={ () => handleCancelTaskClick(task.id) }

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>


                                        </button>
                                        <React.Fragment>
                                            <button className="flex items-center justify-center  px-5 py-2 mx-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none font-semibold"
                                                variant="outlined"
                                                color="neutral"
                                                onClick={ () => handleClickReport(task.id, task.TypeTask) }
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>
                                            </button>
                                            <Modal open={ open } onClose={ () => setOpen(false) } className='container mx-auto bg'>
                                                <ModalDialog className=' dark:bg-[#343338]  w-[1200px]'>
                                                    <h1 className='text-center font-bold text-4xl text-white'>Make new Report</h1>
                                                    <div className="w-full mx-auto">
                                                        <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data">
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                                                                    subject
                                                                </label>
                                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="subject" type="text" placeholder="subject" name="subject"

                                                                    onChange={ (e) => setSubject(e.target.value) }
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="content">
                                                                    Content
                                                                </label>
                                                                <textarea
                                                                    rows="12"
                                                                    cols="12"
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    id="content"
                                                                    placeholder="Enter content here..."
                                                                    name="content"
                                                                    onChange={ (e) => setContent(e.target.value) }
                                                                >
                                                                </textarea>
                                                            </div>

                                                            <div className="mb-4">

                                                                <div className="flex items-center justify-between space-x-4 w-full">

                                                                    { type === "Traitement" || type === "Surviance" ? (

                                                                        <select
                                                                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
                                                                            id="disease"
                                                                            name="disease_id"
                                                                            onChange={ (e) => setDisease(e.target.value) }
                                                                        >
                                                                            <option value="">Select disease</option>
                                                                            { DiseaseList.map((disease) => (
                                                                                <option key={ disease.id } value={ disease.id }>{ disease.name }</option>
                                                                            )) }
                                                                        </select>
                                                                    ) : null }



                                                                    { type === "Traitement" || type === "Irrigation" || type === "Fertigation" ? (

                                                                        <select
                                                                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
                                                                            id="disease"
                                                                            name="product_id[]"
                                                                            multiple
                                                                            onChange={ handleProductChange }                                                                        >
                                                                            <option value="">Select Product</option>
                                                                            { Product.productList.map((product) => (
                                                                                <option key={ product.id } value={ product.id }>{ product.name }</option>
                                                                            )) }
                                                                        </select>
                                                                    ) : null }





                                                                    <div className='w-full flex justify-end'>


                                                                        <Button
                                                                            component="label"
                                                                            role={ undefined }
                                                                            variant="contained"
                                                                            name="image" accept="image/*"
                                                                            tabIndex={ -1 }
                                                                            startIcon={ <CloudUploadIcon /> }
                                                                            onChange={ (e) => setImage(e.target.files[0]) }
                                                                        >
                                                                            Upload file
                                                                            <VisuallyHiddenInput type="file" />
                                                                        </Button>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                            <div className="flex items-center justify-between">
                                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                                                    onClick={ handleProvidekReport }
                                                                >
                                                                    provide report
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </ModalDialog>
                                            </Modal>

                                        </React.Fragment>

                                    </td>
                                </tr>

                            )) }


                        </tbody>
                    </table>







                </div>
            </div>
        </>



    )
}

export default Profile
