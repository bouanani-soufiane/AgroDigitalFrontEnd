import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

import Add from '@mui/icons-material/Add';
import { Card } from "../../components/Card";

const Product = () => {
    const [open, setOpen] = React.useState(false);;
    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1 rounded-lg '>

                <div className="align-middle inline-block min-w-full shadow overflow-hidden dark:bg-[#343338] shadow-dashboard px-8 pt-3  rounded-lg pb-3">
                    <div className='flex justify-between mb-6 mt-2'>
                        <h1 className='font-bold text-2xl  text-white'>All Products </h1>
                        <React.Fragment>
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-900"
                                variant="outlined"
                                color="neutral"
                                startDecorator={<Add />}
                                onClick={() => setOpen(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Add program</span>
                            </button>
                            <Modal open={open} onClose={() => setOpen(false)} className='container mx-auto bg'>
                                <ModalDialog className='w-full '>
                                    <h1 className='text-center font-bold text-4xl'>Create new Program</h1>

                                </ModalDialog>
                            </Modal>
                        </React.Fragment>
                    </div>
                    <table className="w-full dark:bg-[#343338]">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 dark:text-white tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Name</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Quantity</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Stock</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Type</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Action</th>

                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 dark:text-white">#1</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 dark:text-white">lanch traitement</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 dark:text-white">Hassan Jaraf</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-100 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-500 opacity-50 rounded-full"></span>
                                        <span className="relative text-xs">active</span>
                                    </span>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 dark:text-white">Normal</div>
                                        </div>
                                    </div>
                                </td>



                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 dark:text-white text-sm leading-5">Sep 12 - Sep 13 </td>
                            </tr>


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Product
