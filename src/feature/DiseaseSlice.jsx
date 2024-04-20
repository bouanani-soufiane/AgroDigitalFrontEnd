import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const DiseaseState = {
  updateState: false,
  loading: false,
  DiseaseList: [],
  error: "",
  response: "",
};

export const fetchDisease = createAsyncThunk(
  "Disease/fetchDisease",
  async () => {
    const response = await axios.get("http://localhost/api/v1/diseases");
    // console.log(response.data.data);
    return response.data.data;
  }
);

export const addDisease = createAsyncThunk(
  "Disease/addDisease",
  async (data) => {
    try {
      const response = await axios.post("http://localhost/api/v1/diseases/", {
        name: data.name,
        description: data.description,
        type: data.type,
      });

      console.log("Response from server:", response.data);

      return response.data.data;
    } catch (error) {
      console.error("Error adding disease:", error.message);
      throw error;
    }
  }
);

export const removeDisease = createAsyncThunk(
  "Disease/removeDisease",
  async (data) => {
    const response = await axios.delete(`http://localhost/api/v1/diseases/${data}`);
    console.log("Response from server:", response.data.data);

    return response.data;
  }
);

const DiseaseSlice = createSlice({
  name: "Disease",
  initialState: DiseaseState,
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
      .addCase(addDisease.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDisease.fulfilled, (state, action) => {
        state.loading = false;
        state.DiseaseList = [...state.DiseaseList, action.payload];
        state.response = "add";
        toast.success('New disease added successfully!');
        console.log(action.payload)
        console.log("Newly added action:", action.payload);
      })
      .addCase(addDisease.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });

    builder
      .addCase(fetchDisease.fulfilled, (state, action) => {
        state.DiseaseList = action.payload;
      })
      .addCase(fetchDisease.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(removeDisease.fulfilled, (state, action) => {
        const newDiseaseList = state.DiseaseList.filter(item => item.id !== action.payload)
        state.response = "delete";
        console.log(action.payload)
        console.log(state.DiseaseList)
        state.DiseaseList = newDiseaseList
        toast.success('Disease deleted successfully!');

      })
      .addCase(removeDisease.rejected, (state, action) => {
        state.response = "";
        console.log("error:", action)

      });
  },
});

export default DiseaseSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  DiseaseSlice.actions;