import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
// import ProductSlice from '../feature/ProductSlice';
import DiseaseSlice from '../feature/DiseaseSlice';
import ProgramSlice from '../feature/ProgramSlice';
import TaskSlice from '../feature/TaskSlice';
import ReportSlice from '../feature/ReportSlice';
import ProductSlice from "../feature/ProductSlice";
import StatisicSlice from "../feature/statistics";

const store = configureStore({
    reducer: {
        user: userReducer,
        Disease: DiseaseSlice,
        Program: ProgramSlice,
        Task: TaskSlice,
        Report: ReportSlice,
        Product: ProductSlice,
        Statisics: StatisicSlice
    }
});

export default store;