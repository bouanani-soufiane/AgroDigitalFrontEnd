import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchProgram, addProgram } from '../../feature/ProgramSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from "react-redux";

import Add from '@mui/icons-material/Add';
import { Card } from "../../components/Card";
import TextField from '@mui/material/TextField';

const Program = () => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const { loading, ProgramList, error, response } = useSelector(
        (state) => state.Program
    );
    useEffect(() => {
        dispatch(fetchProgram());
    }, []);

    // if (ProgramList.length > 0) {
    //     ProgramList.forEach(program => {
    //         if (program.stage && program.stage.length > 0) {
    //             program.stage.forEach(stage => {
    //                 // console.log(stage.pivot);
    //             });
    //         }
    //     });
    // }
    const [open, setOpen] = useState(false);



    const [cultur_name, setCultur_name] = useState("");
    const [program_name, setProgram_name] = useState("");
    const [stage_name, setStage_name] = useState([]);
    const [attribute_name, setAttribute_name] = useState([]);
    const [attribute_value, setAttribute_value] = useState([]);


    const handleClick = (e) => {
        e.preventDefault();
        dispatch(
            addProgram({
                cultur_name: cultur_name,
                program_name: program_name,
                stage_name: stage_name,
                attribute_name: attribute_name,
                attribute_value: attribute_value,
            })
        );
        console.log("Attribute Value:", attribute_name);
        console.log("stage Value:", stage_name);
        setCultur_name("");
        setProgram_name("");
        setStage_name([]);
        setAttribute_name([])
        setAttribute_value([]);
        setOpen(false);
    };



    const [stageFrom, setFormStage] = useState([{ name: "" }]);
    const [attributeFrom, setFormAttribute] = useState([{ name: "" }]);



    const handleAddStage = () => {
        setFormStage([...stageFrom, { name: "" }]);
    }
    const handleRemoveStage = (i) => {
        const newStageFrom = [...stageFrom];
        newStageFrom.splice(i, 1);
        setFormStage(newStageFrom);
    }
    const handleAddAttribute = () => {
        setFormAttribute([...attributeFrom, { name: "" }]);
    }
    const handleRemoveAttribute = (i) => {
        const newAttributeFrom = [...attributeFrom];
        newAttributeFrom.splice(i, 1);
        setFormAttribute(newAttributeFrom);
    }



    return (
        <div className="">
            <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
                <Card title="Total get free campaigns" number="17" color="#83E8E1" />
                <Card title="Needs approval" number="4" color="#83E8E1" />
                <Card title="Disputes" number="5" color="#FFBA79" />
                <Card title="Messages" number="8" color="#FFB2D3" />
            </div>
            <ToastContainer />

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
                                        startDecorator={ <Add /> }
                                        onClick={ () => setOpen(true) }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Add program</span>
                                    </button>
                                    <Modal open={ open } onClose={ () => setOpen(false) } className='container mx-auto bg'>
                                        <ModalDialog className='w-full '>
                                            <h1 className='text-center font-bold text-4xl'>Create new Program</h1>
                                            <form
                                                className='w-full'
                                            >
                                                <div className='gap-12 mx-auto flex sm:flex-nowrap flex-wrap'>

                                                    <div className='lg:w-100 md:w-1/2 sm:w-1/2 my-3'>
                                                        <TextField variant="standard" label="Name" className="w-full rounded-md border border-gray-300 dark:border-gray-700" type='text' name='program_name'

                                                            value={ program_name }
                                                            onChange={ (e) => {
                                                                setProgram_name(e.target.value);
                                                            } }
                                                        />

                                                    </div>
                                                    <div className='lg:w-100 md:w-1/2 sm:w-1/2 my-3'>
                                                        <TextField variant="standard" label="Culture" className="w-full rounded-md border border-gray-300 dark:border-gray-700"
                                                            type='text' name='cultur_name'
                                                            value={ cultur_name }
                                                            onChange={ (e) => {
                                                                setCultur_name(e.target.value);
                                                            } }
                                                        />

                                                    </div>
                                                </div>
                                                <hr className='border-1 mt-4' />
                                                <div className='gap-12 mx-auto flex sm:flex-nowrap flex-wrap'>
                                                    <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                        <h1 className='font-bold'>Stages</h1>

                                                        <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                            { stageFrom.map((stage, i) => (
                                                                <div key={ i }>
                                                                    <TextField
                                                                        variant="standard"
                                                                        label="Stage"
                                                                        className="w-full rounded-md border border-gray-300 dark:border-gray-700"
                                                                        type="text"
                                                                        name="stage_name[]"
                                                                        value={ stage.name }
                                                                        onChange={ (e) => {
                                                                            const updatedStages = [...stageFrom];
                                                                            updatedStages[i].name = e.target.value;
                                                                            setFormStage(updatedStages);
                                                                            const stageNames = updatedStages.map((stage) => stage.name);
                                                                            setStage_name(stageNames);
                                                                        } }
                                                                    />

                                                                    <IoIosRemoveCircleOutline className="my-3" onClick={ () => handleRemoveStage(i) } />
                                                                </div>
                                                            )) }
                                                        </div>


                                                        <div className="mt-3">
                                                            <IoIosAddCircleOutline onClick={ handleAddStage } />
                                                        </div>
                                                    </div>


                                                    <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                        <h1 className='font-bold'>Attributes</h1>
                                                        <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                            { attributeFrom.map((attribute, i) => (
                                                                <div key={ i }>
                                                                    <TextField
                                                                        variant="standard"
                                                                        label="Attribute"
                                                                        className="w-full rounded-md border border-gray-300 dark:border-gray-700"
                                                                        type="text"
                                                                        name="attribute_name[]"
                                                                        value={ attribute.name }
                                                                        onChange={ (e) => {
                                                                            const updatedAttributes = [...attributeFrom];
                                                                            updatedAttributes[i].name = e.target.value;
                                                                            setFormAttribute(updatedAttributes);
                                                                            const attributeNames = updatedAttributes.map((attribute) => attribute.name);
                                                                            setAttribute_name(attributeNames);
                                                                        } }
                                                                    />

                                                                    <IoIosRemoveCircleOutline className="my-3" onClick={ () => handleRemoveAttribute(i) } />
                                                                </div>
                                                            )) }
                                                        </div>

                                                        <div className="mt-3">
                                                            <IoIosAddCircleOutline onClick={ handleAddAttribute } />
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="attribute_value[]" value={ attribute_value } />
                                                </div>
                                                <div className='mx-auto mt-4 '>

                                                    <button type="submit" className="bg-green-900 text-white dark:bg-[#343338] hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center text-lg dark:hover:bg-green-900 dark:focus:ring-blue-800 w-[100%] "

                                                        onClick={ (e) => {
                                                            handleClick(e);
                                                        } }

                                                    >Submit</button>
                                                </div>
                                            </form>
                                        </ModalDialog>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </div>
                        <Tabs variant='soft-rounded' colorScheme='green'>
                            <TabList>
                                { ProgramList.map(program => (
                                    <Tab className='font-semibold bg-green-200 py-2 px-4 rounded-full mr-4' >Raspberry</Tab>
                                )) }
                            </TabList>
                            <TabPanels>
                                { ProgramList.map(program => (
                                    <TabPanel>
                                        <div className="mt-6">
                                            <div className="overflow-x-auto  rounded-lg shadow">
                                                <table className="w-full whitespace-nowrap">
                                                    <thead>


                                                        <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-green-900 text-white dark:text-gray-400 dark:hover:text-gray-900 dark:bg-[#343338] dark:hover:bg-gray-50">
                                                            <th className="px-4 py-3">Stage</th>
                                                            <th className="px-4 py-3">days</th>

                                                            { program.stage && program.stage.length > 0 && (
                                                                [...new Set(program.stage.map(stage => stage.pivot.attribute_name))].map(attributeName => (
                                                                    <th key={ attributeName } className="px-4 py-3">{ attributeName }</th>
                                                                ))
                                                            ) }
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-[#343338] dark:hover:bg-gray-50">
                                                        { [...new Set(program.stage.map(stage => {
                                                            return stage.stage_name;
                                                        }))].map((stageName, index) => (
                                                            <tr key={ index } className="text-gray-700 dark:bg-gray-700 dark:text-gray-100 bg-green-100 dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                                <td contentEditable={ editMode ? 'true' : 'false' } className="px-4 py-3">{ stageName }</td>
                                                                <td contentEditable={ editMode ? 'true' : 'false' } className="px-4 py-3">2.4</td>
                                                                { program.stage
                                                                    .filter(stage => stage.stage_name === stageName)
                                                                    .map((stage, attrIndex) => {
                                                                        return (
                                                                            <td key={ attrIndex } contentEditable={ editMode ? 'true' : 'false' } className="px-4 py-3">{ stage.pivot.attribute_value }</td>
                                                                        );
                                                                    }) }
                                                            </tr>
                                                        )) }
                                                    </tbody>


                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                )) }
                            </TabPanels>
                        </Tabs>

                        <button
                            onClick={ () => setEditMode(!editMode) }
                        >edit</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Program
