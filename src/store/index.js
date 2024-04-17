import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
// import ProductSlice from '../feature/ProductSlice';
import DiseaseSlice from '../feature/DiseaseSlice';
import ProgramSlice from '../feature/ProgramSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        Disease: DiseaseSlice,
        Program: ProgramSlice,
    }
});

export default store;