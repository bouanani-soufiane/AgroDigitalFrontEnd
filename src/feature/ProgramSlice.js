import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const ProgramState = {
  updateState: false,
  loading: false,
  ProgramList: [],
  error: "",
  response: "",
};

export const fetchProgram = createAsyncThunk(
  "program/fetchProgram",
  async () => {
    try {
      const response = await axios.get("http://localhost/api/v1/programs");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const programSlice = createSlice({
  name: "program",
  initialState: ProgramState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgram.fulfilled, (state, action) => {
        state.ProgramList = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchProgram.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeStateTrue, changeStateFalse, clearResponse } = programSlice.actions;

export default programSlice.reducer;
