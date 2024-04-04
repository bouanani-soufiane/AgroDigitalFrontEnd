import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredential) => {
        const request = await axios.post(`http://localhost/api/v1/login`, userCredential);
        const response = await request.data.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;

    }

)
const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.loading = true,
                state.user = null,
                state.error = null
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false,
                state.user = action.payload,
                console.log('logged'),

                state.error = null
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false,
                    state.user = null,
                    console.log(action.error.message);
                if (action.error.message == 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message;
                }
            })
    }
});

export default UserSlice.reducer;