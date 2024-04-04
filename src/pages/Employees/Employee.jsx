import React from 'react'
import { Card } from "../../components/Card";

const Employee = () => {
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
                    <table className="min-w-full dark:bg-[#343338]">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-900 dark:text-white tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Fullname</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Phone</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Status</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white tracking-wider">Hired At</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-900 dark:text-white ">Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-900 dark:text-white">#1</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="text-sm leading-5 text-gray-900 dark:text-white">Damilare Anjorin</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">+2348106420637</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 dark:text-white border-gray-500 text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-100 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-500 opacity-50 rounded-full"></span>
                                        <span className="relative text-xs">active</span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-gray-900 dark:text-white text-sm leading-5">September 12</td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button className="px-5 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none font-semibold">assign task</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default Employee
