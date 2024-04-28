import React, { useEffect, useState } from 'react'
import { Card } from "../../components/Card";
import { fetchTask, removeTask, UpdateTask } from "../../feature/TaskSlice";
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { fetchUser } from '../../store/UserSlice';
import { NoData } from '../../components/NoData';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Statistics } from '../../components/statistics';


const Task = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    const [name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [DateStart, setDateStart] = useState("");
    const [DateEnd, setDateEnd] = useState("");
    const [Status, setStatus] = useState("Pending");
    const [employee_id, setEmployee_id] = useState("");
    const [TypeTask, setTypeTask] = useState("");
    const [errors, setErrors] = useState({});


    const handleUpdateTaskClick = (id, task) => {
        setName(task.name)
        setDescription(task.Description)
        setDateStart(task.DateStart)
        setDateEnd(task.DateEnd)
        setStatus(task.Status)
        setEmployee_id(task.employee.id)
        setTypeTask(task.TypeTask)
        setId(id)
        console.log(task);
        setOpen(true);
    }


    const formatDate = (date) => {
        let year = date.getFullYear();
        let month = (`0${date.getMonth() + 1}`).slice(-2);
        let day = (`0${date.getDate()}`).slice(-2);
        let hours = (`0${date.getHours()}`).slice(-2);
        let minutes = (`0${date.getMinutes()}`).slice(-2);
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const today = new Date();
    const minDate = formatDate(today);


    const validate = () => {
        let tempErrors = {};
        let now = new Date();
        tempErrors.name = name ? "" : "Name is required";
        if (!Description) tempErrors.Description = "Description is required";

        let startDate = new Date(DateStart);
        let endDate = new Date(DateEnd);

        if (!DateStart || startDate < now) tempErrors.DateStart = "DateStart is invalid";

        if (!DateEnd || endDate < now) tempErrors.DateEnd = "DateEnd is invalid";

        if (!TypeTask) tempErrors.TypeTask = "TypeTask is required";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    }



    const handleUpdateTask = () => {
        console.log(errors);
        if (!validate()) return;
        dispatch(UpdateTask({
            id: id,
            name: name,
            Description: Description,
            DateStart: DateStart,
            DateEnd: DateEnd,
            Status: Status,
            TypeTask: TypeTask,
            employee_id: employee_id,
        })).then(toast.success('Task added successfully!'))
        setOpen(false);

    }


    const taskList = useSelector(state => state.Task);
    const UserList = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTask())
        dispatch(fetchUser())

    }, []);
    const deleteTask = (id) => {
        dispatch(removeTask(id));
        dispatch(fetchTask());
    };

    return (
        <>
            <Statistics />
            <ToastContainer />
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1 rounded-lg '>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden dark:bg-[#343338] shadow-dashboard px-8 pt-3  rounded-lg pb-3">
                    <h1 className='font-bold text-2xl mb-8 mt-2 dark:text-white'>All Tasks </h1>
                    <div style={ { maxHeight: '400px', overflowY: 'auto' } }>
                        <table className="w-full dark:bg-[#343338]">
                            {
                                taskList.TaskList?.length > 0 &&

                                <thead>
                                    <tr>


                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 dark:text-white tracking-wider">ID</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Title</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Assigned To</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Description</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Date Start</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Date end</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Status</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Actions</th>

                                    </tr>
                                </thead> }
                            <tbody className="w-full">

                                {
                                    taskList.TaskList.map((task) => (
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
                                                        <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.employee.name }</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-sm leading-5 text-gray-900 dark:text-white">{ task.Description }</div>
                                                    </div>
                                                </div>
                                            </td>
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
                                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-900 ml-3"
                                                    onClick={ () => deleteTask(task.id) }

                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>


                                                </button>
                                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-900 ml-3"
                                                    onClick={ () => handleUpdateTaskClick(task.id, task) }

                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>



                                                </button>

                                                <React.Fragment>
                                                    <Modal open={ open } onClose={ () => setOpen(false) } className='container mx-auto bg'>
                                                        <ModalDialog className='w-[700px] dark:bg-[#343338]'>
                                                            <h1 className='text-center font-bold text-4xl dark:text-white'>Update task</h1>
                                                            <div className="w-full mx-auto">
                                                                <form className="dark:bg-[#343338] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="Title">
                                                                            Title
                                                                        </label>
                                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="Title" type="text" placeholder="Title"
                                                                            value={ name }
                                                                            name="name" onChange={ (e) => {
                                                                                setName(e.target.value);
                                                                            } }


                                                                        />


                                                                        { errors.name && <p className="text-red-500 text-xs mt-1"> { errors.name }</p> }
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="Description">
                                                                            Description
                                                                        </label>
                                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="Description" type="text"
                                                                            value={ Description }
                                                                            placeholder="Description" name="Description" onChange={ (e) => {
                                                                                setDescription(e.target.value);
                                                                            } } />

                                                                        { errors.Description && <p className="text-red-500 text-xs mt-1"> { errors.Description }</p> }
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                            Date Start
                                                                        </label>
                                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="date" name="DateStart"

                                                                            value={ DateStart }

                                                                            min={ minDate }
                                                                            placeholder="date start" onChange={ (e) => {
                                                                                setDateStart(e.target.value);
                                                                            } } />
                                                                        { errors.DateStart && <p className="text-red-500 text-xs mt-1"> { errors.DateStart }</p> }
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="stock">
                                                                            Date End
                                                                        </label>
                                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="stock" type="date" name="DateEnd"
                                                                            min={ minDate }
                                                                            placeholder="date end" onChange={ (e) => {
                                                                                setDateEnd(e.target.value);
                                                                            } } />

                                                                        { errors.DateEnd && <p className="text-red-500 text-xs mt-1"> { errors.DateEnd }</p> }
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                            Type
                                                                        </label>
                                                                        <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type" name="TypeTask" onChange={ (e) => {
                                                                            setTypeTask(e.target.value);
                                                                        } }  >
                                                                            <option value="" disabled>Select Type</option>
                                                                            <option value="Traitement">Traitement</option>
                                                                            <option value="Surviance">Surviance</option>
                                                                            <option value="Irrigation">Irrigation</option>
                                                                            <option value="Fertigation">Fertigation</option>
                                                                        </select>
                                                                        { errors.TypeTask && <p className="text-red-500 text-xs mt-1"> { errors.TypeTask }</p> }
                                                                    </div>


                                                                    <div className="mb-4">
                                                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
                                                                            Employee
                                                                        </label>
                                                                        <select className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white" id="type" name="Employee_id" onChange={ (e) => {
                                                                            setEmployee_id(e.target.value);
                                                                        } }  >
                                                                            <option value="" disabled>Select Employee</option>

                                                                            { UserList.UserList.map((user) => (
                                                                                <option value={ user.id }>{ user.name }</option>

                                                                            )) }

                                                                        </select>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ (e) => handleUpdateTask(e) }
                                                                        >
                                                                            Assign task
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                        </ModalDialog>
                                                    </Modal>
                                                </React.Fragment>
                                            </td>
                                        </tr>

                                    ))
                                }




                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex'>
                    {
                        taskList.TaskList?.length <= 0 && (<NoData name="Task" />)
                    }
                </div>

            </div>
        </>
    )
}

export default Task
