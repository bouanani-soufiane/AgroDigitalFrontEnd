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
export const addProgram = createAsyncThunk(
  "program/addProgram",
  async (data) => {
    try {
      const response = await axios.post("http://localhost/api/v1/programs/", {
        cultur_name: data.cultur_name,
        program_name: data.program_name,
        stage_name: data.stage_name,
        attribute_name: data.attribute_name,
        attribute_value: data.attribute_value,
      });

      console.log("Response from server:", response.data);

      return response.data.data;
    } catch (error) {
      console.error("Error adding program:", error);
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

    builder
      .addCase(addProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.ProgramList = [...state.ProgramList, action.payload];
        state.response = "add";
        toast.success('New program added successfully!');
        console.log(action.payload)
        console.log("Newly added action:", action.payload);
      })
      .addCase(addProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });

  },
});

export const { changeStateTrue, changeStateFalse, clearResponse } = programSlice.actions;

export default programSlice.reducer;
