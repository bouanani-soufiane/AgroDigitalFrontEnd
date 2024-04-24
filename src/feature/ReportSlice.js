import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const ReportState = {
  updateState: false,
  loading: false,
  ReportList: [],
  error: "",
  response: "",
};

export const fetchReport = createAsyncThunk(
  "Report/fetchReport",
  async () => {
    const response = await axios.get("http://localhost/api/v1/reports");
    return response.data;
  }
);

export const addReport = createAsyncThunk(
  "Report/addReport",
  async (data) => {

    console.log("data is", data.formData);
    try {
      const response = await axios.post("http://localhost/api/v1/reports/",
        data.formData

        ,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

      );
      console.log("Response from server:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error adding Report:", error.message);
      throw error;
    }
  }
);

export const removeReport = createAsyncThunk(
  "Report/removeReport",
  async (data) => {
    const response = await axios.delete(`http://localhost/api/v1/reports/${data}`);
    console.log("Response from server:", response.data.data);

    return response.data;
  }
);

const ReportSlice = createSlice({
  name: "Report",
  initialState: ReportState,
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
      .addCase(addReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReport.fulfilled, (state, action) => {
        state.loading = false;
        state.ReportList = [...state.ReportList, action.payload];
        state.response = "add";
        toast.success('New Report added successfully!');
        console.log(action.payload)
        console.log("Newly added action:", action.payload);
      })
      .addCase(addReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });

    builder
      .addCase(fetchReport.fulfilled, (state, action) => {
        state.ReportList = action.payload;
      })
      .addCase(fetchReport.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(removeReport.fulfilled, (state, action) => {
        const newReportList = state.ReportList.filter(item => item.id !== action.payload)
        state.response = "delete";
        console.log(action.payload)
        console.log(state.ReportList)
        state.ReportList = newReportList
        toast.success('Report deleted successfully!');

      })
      .addCase(removeReport.rejected, (state, action) => {
        state.response = "";
        console.log("error:", action)

      });
  },
});

export default ReportSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  ReportSlice.actions;