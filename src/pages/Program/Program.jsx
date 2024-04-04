import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from "react-icons/io";

import Add from '@mui/icons-material/Add';
import { Card } from "../../components/Card";
import TextField from '@mui/material/TextField';

const Program = () => {
    const [open, setOpen] = React.useState(false);
    const [formStage, setFormStage] = React.useState([{ name: "" }])
    const [formAttribute, setformAttribute] = React.useState([{ name: "" }])
    const handleChange = (type, i, e) => {
        if (type === "stage") {
            const newFormStage = [...formStage];
            newFormStage[i][e.target.name] = e.target.value;
            setFormStage(newFormStage);
        } else if (type === "attribute") {
            const newFormAttribute = [...formAttribute];
            newFormAttribute[i][e.target.name] = e.target.value;
            setformAttribute(newFormAttribute);
        }
    };

    const addFormFields = (type) => {
        if (type === "stage") {
            setFormStage([...formStage, { name: "" }]);
        } else if (type === "attribute") {
            setformAttribute([...formAttribute, { name: "" }]);
        }
    };

    const removeFormFields = (type, i) => {
        if (type === "stage") {
            const newFormStage = [...formStage];
            newFormStage.splice(i, 1);
            setFormStage(newFormStage);
        } else if (type === "attribute") {
            const newFormAttribute = [...formAttribute];
            newFormAttribute.splice(i, 1);
            setformAttribute(newFormAttribute);
        }
    };


    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1'>
                <div className="lg:w-full  rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
                    <div className="container  mx-auto">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div>
                                <div className="flex items-center gap-x-3">
                                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Program</h2>
                                </div>
                            </div>

                            <div className="flex items-center mt-4 gap-x-3">
                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3098_154395)">
                                            <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                    <span>Import</span>
                                </button>
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
                                            <form
                                                onSubmit={(event) => {
                                                    event.preventDefault();
                                                    setOpen(false);
                                                }}
                                                className='w-full'
                                            >
                                                <div className='gap-12 mx-auto flex sm:flex-nowrap flex-wrap'>

                                                    <div className='lg:w-100 md:w-1/2 sm:w-1/2 my-3'>
                                                        <TextField variant="standard" label="Name" className="w-full rounded-md border border-gray-300 dark:border-gray-700" />

                                                    </div>
                                                    <div className='lg:w-100 md:w-1/2 sm:w-1/2 my-3'>
                                                        <TextField variant="standard" label="Culture" className="w-full rounded-md border border-gray-300 dark:border-gray-700" />

                                                    </div>
                                                </div>
                                                <hr className='border-1 mt-4' />
                                                <div className='gap-12 mx-auto flex sm:flex-nowrap flex-wrap'>
                                                    <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                        <h1 className='font-bold'>Stages</h1>
                                                        {formStage.map((element, i) => (
                                                            <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3" key={i}>
                                                                <TextField variant="standard" label="Stage" className="w-full rounded-md border border-gray-300 dark:border-gray-700" onChange={(e) => handleChange("stage", i, e)} />
                                                                {i ? (
                                                                    <IoIosRemoveCircleOutline className='my-3 ' onClick={() => removeFormFields("stage", i)} />
                                                                ) : null}
                                                            </div>
                                                        ))}
                                                        <div className="mt-3">
                                                            <IoIosAddCircleOutline onClick={() => addFormFields("stage")} />
                                                        </div>
                                                    </div>

                                                    <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                        <h1 className='font-bold'>Attributes</h1>
                                                        {formAttribute.map((element, i) => (
                                                            <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3" key={i}>
                                                                <TextField variant="standard" label="Attribute" className="w-full rounded-md border border-gray-300 dark:border-gray-700" onChange={(e) => handleChange("attribute", i, e)} />
                                                                {i ? (
                                                                    <IoIosRemoveCircleOutline className='my-3 ' onClick={() => removeFormFields("attribute", i)} />
                                                                ) : null}
                                                            </div>
                                                        ))}
                                                        <div className="mt-3">
                                                            <IoIosAddCircleOutline onClick={() => addFormFields("attribute")} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mx-auto mt-4 '>

                                                    <button type="submit" class="bg-green-900 text-white dark:bg-[#343338] hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center text-lg dark:hover:bg-green-900 dark:focus:ring-blue-800 w-[100%] ">Submit</button>
                                                </div>
                                            </form>
                                        </ModalDialog>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </div>
                        <Tabs variant='soft-rounded' colorScheme='green'>
                            <TabList>
                                <Tab className='font-semibold bg-green-200 py-2 px-4 rounded-full' >Raspberry</Tab>
                                <Tab className='font-semibold mx-4 bg-red-200 py-2 px-4 rounded-full'>Myrtille</Tab>
                                <Tab className='font-semibold mx-4 bg-red-200 py-2 px-4 rounded-full'>x</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div className="mt-6">
                                        <div className="overflow-x-auto  rounded-lg shadow">
                                            <table className="w-full whitespace-nowrap">
                                                <thead>
                                                    <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b dark:border-gray-700 bg-green-900 text-white  dark:text-gray-400 dark:hover:text-gray-900 dark:bg-[#343338] dark:hover:bg-gray-50">
                                                        <th className="px-4 py-3">Stage</th>
                                                        <th className="px-4 py-3">days</th>
                                                        <th className="px-4 py-3">MgO</th>
                                                        <th className="px-4 py-3">K2O</th>
                                                        <th className="px-4 py-3">N_Total</th>
                                                        <th className="px-4 py-3">Zn</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-[#343338] dark:hover:bg-gray-50 ">
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 1</td>
                                                        <td className="px-4 py-3">15</td>
                                                        <td className="px-4 py-3">1.3</td>
                                                        <td className="px-4 py-3">2.2</td>
                                                        <td className="px-4 py-3">2.4</td>
                                                        <td className="px-4 py-3">2.6</td>
                                                    </tr>
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 1</td>
                                                        <td className="px-4 py-3">15</td>
                                                        <td className="px-4 py-3">1.3</td>
                                                        <td className="px-4 py-3">2.2</td>
                                                        <td className="px-4 py-3">2.4</td>
                                                        <td className="px-4 py-3">2.6</td>
                                                    </tr>
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 1</td>
                                                        <td className="px-4 py-3">15</td>
                                                        <td className="px-4 py-3">1.3</td>
                                                        <td className="px-4 py-3">2.2</td>
                                                        <td className="px-4 py-3">2.4</td>
                                                        <td className="px-4 py-3">2.6</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="mt-6">
                                        <div className="overflow-x-auto  rounded-lg shadow">
                                            <table className="w-full whitespace-nowrap">
                                                <thead>
                                                    <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b dark:border-gray-700 bg-green-900 text-white  dark:text-gray-400 dark:hover:text-gray-900 dark:bg-[#343338] dark:hover:bg-gray-50">
                                                        <th className="px-4 py-3">Stage</th>
                                                        <th className="px-4 py-3">days</th>
                                                        <th className="px-4 py-3">Fe</th>
                                                        <th className="px-4 py-3">K2O</th>
                                                        <th className="px-4 py-3">N_Total</th>
                                                        <th className="px-4 py-3">Zn</th>
                                                        <th className="px-4 py-3">Zn</th>
                                                        <th className="px-4 py-3">Zn</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-[#343338] dark:hover:bg-gray-50 ">
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 2</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                    </tr>
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 2</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                    </tr>
                                                    <tr className="text-gray-700 dark:bg-gray-700 dark:text-gray-100  bg-green-100  dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                        <td className="px-4 py-3">Stage 2</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                        <td className="px-4 py-3">0</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='bg-white my-3 '>another</div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Program
