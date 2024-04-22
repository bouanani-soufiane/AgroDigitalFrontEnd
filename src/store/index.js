import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
// import ProductSlice from '../feature/ProductSlice';
import DiseaseSlice from '../feature/DiseaseSlice';
import ProgramSlice from '../feature/ProgramSlice';
import TaskSlice from '../feature/TaskSlice';
import ReportSlice from '../feature/ReportSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        Disease: DiseaseSlice,
        Program: ProgramSlice,
        Task: TaskSlice,
        Report : ReportSlice
    }
});

export default store;