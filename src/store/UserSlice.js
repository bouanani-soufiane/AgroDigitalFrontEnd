import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {},
    UserList : [],
    isLoggedIn: false,
    didLogout: false,
    isLoading: true,
    token: "",
    error: null,
    role: null,
};
// const resetState = (state) => {
//   Object.assign(state, initialState);
// };
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await axios.get(`http://localhost/api/v1/users`);
        // console.log(response.data.data);
        return response.data.data;
    }
);

export const LoginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredential) => {
        const request = await axios.post(`http://localhost/api/v1/login`, userCredential);
        // console.log(request);
        const response = await request.data;
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
);

export const RegisterUser = createAsyncThunk(
    'user/RegisterUser',
    async (userCredential) => {
        const request = await axios.post(`http://localhost/api/v1/register`, userCredential);
        console.log(request);
        const response = await request.data.data;
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
);

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            state.token = "";
            state.role = null;
            state.isLoggedIn = false;
            state.didLogout = true;

            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user.access_token);

            axios.post('http://localhost/api/v1/logout', {}, {
                headers: { 'Authorization': `Bearer ${user.access_token}` }
            })
                .then(() => console.log('Logged out from server'))
                .catch((error) => console.error(error));

            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.isLoading = true,
                    state.user = null,
                    state.error = null
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true,
                    state.didLogout = false,
                    state.isLoading = false,
                    state.user = action.payload,
                    console.log(state.token),

                    state.error = null
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.user = null,
                    console.log(action.error.message);
                if (action.error.message == 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message;
                }
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                if (action.payload.status === 400) {
                    // toast.error("Registration failed");
                    state.isLoading = false;
                    console.log('failed');
                } else {
                    state.isLoading = false;
                    state.user = action.payload.name;
                    state.role = action.payload.role;
                    console.log(action.payload);
                    console.log("Registered successfully");
                }
            })
            .addCase(RegisterUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                // console.log(action.error.message);
                state.isLoading = false;
                state.error = action.error.message;
            })
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.UserList = action.payload
                // console.log(state.UserList);
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message;
            });

    }
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
