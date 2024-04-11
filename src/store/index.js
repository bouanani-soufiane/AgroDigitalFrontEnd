import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
// import ProductSlice from '../feature/ProductSlice';
import DiseaseSlice from '../feature/DiseaseSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        Disease: DiseaseSlice,
    }
});

export default store;