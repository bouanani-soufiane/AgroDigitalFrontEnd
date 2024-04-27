import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  diseaseStats: [],
  Stats: [],
  error: "",
  response: "",
};

export const fetchDiseaseStatistics = createAsyncThunk(
  "fetchDiseaseStatistics",
  async () => {
    const response = await axios.get("http://localhost/api/v1/Diseasestatistics");
    return response.data;
  }
);


export const AllStatistics = createAsyncThunk(
  "stats/AllStatistics",
  async () => {
    console.log();
    const response = await axios.get("http://localhost/api/v1/statistics");
    return response.data;
  }
);




const statisticSlice = createSlice({
  name: "Report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiseaseStatistics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiseaseStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.diseaseStats = action.payload;
      })
      .addCase(fetchDiseaseStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log('errrrrrrrrrrrrrrrrrrrrrorrr', state.error);
      });
    builder
      .addCase(AllStatistics.pending, (state) => {
        state.loading = true;
      })
      .addCase(AllStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.Stats = action.payload;
      })
      .addCase(AllStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log('errrrrrrrrrrrrrrrrrrrrrorrr', state.error);
      });
  },
});

export default statisticSlice.reducer;
