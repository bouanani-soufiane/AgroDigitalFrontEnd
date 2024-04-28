import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchProgram, addProgram, finishProgram, deleteProgram } from '../../feature/ProgramSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NoData } from '../../components/NoData';

import { useDispatch, useSelector } from "react-redux";

import Add from '@mui/icons-material/Add';
import { Statistics } from "../../components/statistics";
import TextField from '@mui/material/TextField';

const Program = () => {
    const dispatch = useDispatch();
    const { loading, ProgramList, error, response } = useSelector(
        (state) => state.Program
    );

    const [attValues, setAttValues] = useState([]);


    const handleChange = (programId, stageId, attribute, e) => {

        const updatedValues = [...attValues];
        updatedValues.push({ programId, stageId, attribute, value: e });

        setAttValues(updatedValues);
    };

    useEffect(() => {
        dispatch(fetchProgram());
    }, []);
    const [dataAttribute, setDataAttribute] = useState([]);

    useEffect(() => {
        const newDataAttribute = [];
        ProgramList.forEach(program => {
            if (program.stage && program.stage.length > 0) {
                program.stage.forEach(stage => {
                    newDataAttribute.push({
                        programId: stage.pivot.program_id,
                        stageId: stage.pivot.stage_id,
                        attributeId: stage.pivot.id,
                    });
                    // console.log(stage.pivot.program_id);
                });
            }
        });
        setDataAttribute(newDataAttribute);
    }, [ProgramList]);

    if (ProgramList.length > 0) {
        ProgramList.forEach(program => {
            if (program.stage && program.stage.length > 0) {
                program.stage.forEach(stage => {
                    // console.log(stage.pivot);
                });
            }
        });
    }
    const [open, setOpen] = useState(false);

    const [cultur_name, setCultur_name] = useState("");
    const [program_name, setProgram_name] = useState("");

    const [attribute_name, setAttribute_name] = useState([]);
    const [attribute_value, setAttribute_value] = useState([]);

    const handleClick = (e) => {

        const stageNames = stages.map(stage => stage.name);
        const stageDurations = stages.map(stage => stage.duration);
        console.log(stageDurations);
        e.preventDefault();
        dispatch(
            addProgram({
                cultur_name: cultur_name,
                program_name: program_name,
                stage_name: stageNames,
                stage_duration: stageDurations,
                attribute_name: attribute_name,
                attribute_value: attribute_value,
            })
        );
        setCultur_name("");
        setProgram_name("");
        setAttribute_name([])
        setAttribute_value([]);
        setOpen(false);
    };


    const handleFinishProgram = (e) => {
        e.preventDefault();
        dispatch(
            finishProgram(
                attValues
            )
        );
        console.log('dtdtd', attValues);

    };
    const [stages, setStages] = useState([{ name: "", duration: "" }]);

    const [attributeFrom, setFormAttribute] = useState([{ name: "" }]);

    const handleAddStage = () => {
        setStages([...stages, { name: "", duration: "" }]);
    }
    const handleRemoveStage = index => {
        setStages(stages.filter((_, i) => i !== index));
    }
    const handleStageChange = (index, field, value) => {
        const updatedStages = stages.map((stage, i) => {
            if (i === index) {
                return { ...stage, [field]: value };
            }
            return stage;
        });
        setStages(updatedStages);
    }
    const handleAddAttribute = () => {
        setFormAttribute([...attributeFrom, { name: "" }]);
    }
    const handleRemoveAttribute = (i) => {
        const newAttributeFrom = [...attributeFrom];
        newAttributeFrom.splice(i, 1);
        setFormAttribute(newAttributeFrom);
    }

    const handleDeleteProgram = (id) => {
        dispatch(deleteProgram(id));
        dispatch(fetchProgram());
    };

    return (
        <div className="">
            <Statistics />
            <ToastContainer />

            <div className='pt-12 grid gap-4 md:gap-8 grid-cols-1'>
                <div className="lg:w-full  rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
                    <div className="container  mx-auto">
                        <div className="sm:flex flex justify-between sm:items-center sm:justify-between">
                            <div className='flex'>
                                <div className="flex items-center justify-between gap-x-3">
                                    <h2 className="text-lg mb-10 font-medium text-gray-800 dark:text-white">Program</h2>
                                </div>
                            </div>

                            <div className="flex items-center mt-4 gap-x-3">

                                <React.Fragment>
                                    <button className="flex mb-12 items-center justify-center w-100 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-900"
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
                                                        { stages.map((stage, i) => (
                                                            <div key={ i } className='flex gap-10'>
                                                                <TextField
                                                                    variant="standard"
                                                                    label="Stage Name"
                                                                    className="w-full rounded-md border border-gray-300 dark:border-gray-700"
                                                                    value={ stage.name }
                                                                    onChange={ (e) => handleStageChange(i, 'name', e.target.value) }
                                                                />
                                                                <TextField
                                                                    variant="standard"
                                                                    label="Duration (days)"
                                                                    className="w-full rounded-md border border-gray-300 dark:border-gray-700"
                                                                    type="number"
                                                                    value={ stage.duration }
                                                                    onChange={ (e) => handleStageChange(i, 'duration', e.target.value) }
                                                                />
                                                                <IoIosRemoveCircleOutline
                                                                    className="my-3 text-4xl text-red-600 cursor-pointer"
                                                                    onClick={ () => handleRemoveStage(i) }
                                                                />
                                                            </div>
                                                        )) }
                                                        <div className="mt-3">
                                                            <IoIosAddCircleOutline className="cursor-pointer" onClick={ handleAddStage } />
                                                        </div>
                                                    </div>

                                                    <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                        <h1 className='font-bold'>Attributes</h1>
                                                        <div className="lg:w-100 md:w-1/2 sm:w-1/2 my-3">
                                                            { attributeFrom.map((attribute, i) => (
                                                                <div key={ i } className='flex justify'>
                                                                    <TextField
                                                                        variant="standard"
                                                                        label="Attribute"
                                                                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 "
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
                                                                    <IoIosRemoveCircleOutline className=" my-3 text-lg text-red-600 w" onClick={ () => handleRemoveAttribute(i) } />
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
                                                        onClick={ (e) => { handleClick(e); } }>Submit</button>
                                                </div>
                                            </form>
                                        </ModalDialog>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </div>
                        <div className='flex'>
                            {
                                ProgramList?.length <= 0 && (<NoData name="Program" />)
                            }
                        </div>
                        <Tabs variant='soft-rounded' colorScheme='green'>
                            <TabList>
                                { ProgramList.map((program, index) => (
                                    <Tab
                                        className={ `font-semibold py-2 px-4 rounded-full mr-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-400'
                                            }` }
                                    >
                                        { program.program_name }
                                    </Tab>
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
                                                        { [...new Set(program.stage.map(stage => stage.stage_name))].map((stageName, index) => (
                                                            <tr key={ index } className="text-gray-700 dark:bg-gray-700 dark:text-gray-100 bg-green-100 dark:hover:text-gray-200 dark:hover:bg-gray-600">
                                                                <td className="px-4 py-3">{ stageName }</td>
                                                                <td className="px-4 py-3">
                                                                    { program.stage.filter(stage => stage.stage_name === stageName).map((stage, attrIndex) => (
                                                                            <input
                                                                                type="number"
                                                                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-green-100 dark:bg-gray-700"
                                                                                Value={ stage.stage_duration }
                                                                                key={ attrIndex }
                                                                                disabled
                                                                            />

                                                                    )) }
                                                                </td>
                                                                { program.stage.filter(stage => stage.stage_name === stageName).map((stage, attrIndex) => {
                                                                    const programId = ProgramList.findIndex(p => p.id === stage.pivot.program_id);
                                                                    const stageId = stage.pivot.stage_id;
                                                                    const attribute = stage.pivot.attribute_name;

                                                                    return (
                                                                        <td key={ attrIndex } className="px-4 py-3">
                                                                            <input
                                                                                type="number"
                                                                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-green-100 dark:bg-gray-700"
                                                                                defaultValue={ stage.pivot.attribute_value }
                                                                                onChange={ (e) => handleChange(programId + 1, stageId, attribute, e.target.value) }
                                                                            />
                                                                        </td>
                                                                    );
                                                                }) }
                                                            </tr>
                                                        )) }
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                        <button
                                            class="mt-4 middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            data-ripple-light="true"
                                            onClick={ (e) => { handleFinishProgram(e); } }
                                        >
                                            save
                                        </button>

                                        <button
                                            class="mt-4 middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            data-ripple-light="true"
                                            onClick={ () => handleDeleteProgram(program.id) }
                                        >
                                            delete program
                                        </button>


                                    </TabPanel>
                                )) }
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program
