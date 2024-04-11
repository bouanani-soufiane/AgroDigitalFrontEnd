import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    const response = await axios.get("http://localhost/api/v1/disease");
    console.log(response.data.data);
    return response.data.data;
  }
);

export const addDisease = createAsyncThunk(
  "Disease/addDisease",
  async (data) => {
    const response = await axios.post("http://localhost/api/v1/disease/", {
      name: data.data.name,
      description: data.data.description,
      type: data.data.type,
    });
    
    return response.data.data;
  }
);

export const removeDisease = createAsyncThunk(
  "Disease/removeDisease",
  async (data) => {
    const response = await axios.delete(
      `http://localhost/api/v1/disease/${data}`
    );
    return response.data.response;
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
      })
      .addCase(addDisease.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchDisease.fulfilled, (state, action) => {
        state.DiseaseList = action.payload;
      })
      .addCase(fetchDisease.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder.addCase(removeDisease.fulfilled, (state, action) => {
      state.DiseaseList = state.DiseaseList.filter(
        (item) => item.id != action.payload
      );
      state.response = "delete";
    });


  },
});

export default DiseaseSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  DiseaseSlice.actions;