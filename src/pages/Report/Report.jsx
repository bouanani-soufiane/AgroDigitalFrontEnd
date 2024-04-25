import React, { useEffect, useState } from 'react'
import { employeeTask, markAsDone, markAsCancelled } from "../../feature/TaskSlice";
import { fetchReport } from "../../feature/ReportSlice";
import { Card } from "../../components/Card";
import Box from '@mui/material/Box';
import { NoData } from '../../components/NoData';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseISO, formatDistanceToNow } from 'date-fns';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Report = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [report, setReport] = useState();

  const dispatch = useDispatch();
  const { loading, ReportList, error, response } = useSelector(
    (state) => state.Report
  );

  useEffect(() => {
    dispatch(fetchReport());
  }, [dispatch]);


  const handleOpenReport = (reportdata) => {
    setReport(reportdata);
    setOpen(true);

  }

  // ReportList.data.map((e) => {
  // console.log('hi', ReportList.data.length);
  // })

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
            <h1 className='font-bold text-2xl  dark:text-white'>All Reports </h1>

          </div>

        </div>
        <NoData name="Reports" />
        {
          // ReportList.data.length > 0 &&


          <div class="w-full dark:bg-[#343338] shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar p-8">

          <div class="flex-1 px-2" >
            <div class="h-16 flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="flex items-center space-x-2">
                    <button title="Archive" class=" px-2 py-1 border border-gray-300 rounded-lg shadow bg-gray-200 transition duration-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                      </svg>
                    </button>

                    <button title="Delete" class=" px-2 py-1 border border-gray-300 rounded-lg shadow bg-gray-200 transition duration-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                  <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                  <div class="flex items-center space-x-2">
                    <button title="Add Star" class=" px-2 py-1 border border-gray-300 rounded-lg shadow bg-gray-200 transition duration-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div >

            </div >
            <div>
              <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={ style }>

                  {
                    report && <div class="mb-6">
                      <h4 class="text-lg text-gray-800 font-bold pb-2 mb-4 border-b-2">
                        <span className='font-bold underline mr-2'>Subject </span> :  { report.subject }!


                      </h4>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <img src="https://vojislavd.com/ta-template-demo/assets/img/message3.jpg" class="rounded-full w-8 h-8 border border-gray-500" />
                          <div class="flex flex-col ml-2">
                            <span class="text-sm font-semibold">{ report.task.employee.name }</span>
                            <span class="text-xs text-gray-400">{ report.task.employee.role }</span>
                          </div>
                        </div>
                        <span x-show="!messageHover" className="text-sd text-gray-500">
                          { report.updated_at ? formatDistanceToNow(parseISO(report.updated_at), { addSuffix: true }) : "No date" }
                        </span>
                      </div>
                      <div class="py-6 pl-2 text-gray-900 ">

                        <p><span className='font-bold text-lg underline mr-2'>Task </span># { report.task.id } - { report.task.name }</p>
                        <p class="mt-4">Content:</p>
                        <p class="mt-4 mx-5">{ report.content }</p>

                      </div>
                      {
                        ReportList.data.map((ListProducts) => {
                          console.log('here', ListProducts.products);
                          ListProducts.products &&

                            ListProducts.products.map((p) =>
                              <div class="py-1 pl-2 text-gray-900 ">
                                <p class="">products:</p>
                                <p class="mt-4 mx-5">
                                  <span>{ p.name }</span>
                                </p>

                              </div>
                            )


                        })
                      }

                      <div className='flex gap-24'>
                        {
                          report.disease && <div class="py-1 pl-2 text-gray-900 ">
                            <p class="">Disease:</p>
                            <p class="mt-4 mx-5">
                              <span>{ report.disease.name }</span>
                            </p>

                          </div>
                        }
                        {
                          report.products &&
                          <div class="py-1 pl-2 text-gray-900 ">
                            <p class="">Products:</p>
                            { report.products.map((p) => (
                              <ul class="mt-4 mx-5">
                                <li>{ p.name }</li>
                              </ul>

                            )) }
                          </div>


                        }

                      </div>


                      {
                        report.image &&
                        <div class="border-t-2 flex space-x-4 py-4">
                          <div class="w-70 flex items-center py-2.5 px-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
                            <div class="flex items-center">
                              <div class="w-40 flex items-center justify-center">
                                <img src={ report.image.path } alt="image" />
                              </div>

                            </div>

                          </div>

                        </div>
                      }

                    </div>
                  }


                </Box>
              </Modal>
            </div>
            <div class="dark:bg-[#343338] mb-6">
              <ul>
                { ReportList.data && ReportList.data.map((report) => (
                  <li class="flex items-center border-b hover:bg-gray-400 text-black  hover:text-black px-2">
                    <input type="checkbox" class="focus:ring-0 border-1 border-gray-800 hover:text-black" />

                    <div class="w-full flex items-center justify-between p-1 my-1 cursor-pointer"
                      onClick={ () => handleOpenReport(report) }

                    >
                      <div class="flex items-center dark:text-white hover:text-black">

                        <span class="w-56 pr-2 truncate">By : <span className='underline font-semibold text-md'>{ report.task.employee.name }</span></span>
                        <span class="w-64 truncate">{ report.subject }</span>
                        <span class="mx-1">-</span>
                        <span class="w-96 dark:text-gray-400 text-sm font-light truncate">{ report.content }</span>
                      </div>
                      <div class="w-32 flex items-center justify-end">

                        <span x-show="!messageHover" className="text-sd text-gray-500">
                          { formatDistanceToNow(parseISO(report.updated_at)) }
                        </span>

                      </div>
                    </div>
                  </li>
                )) }

              </ul >
            </div >
          </div >
        </div > }
      </div>
    </div>


  )
}


export default Report
