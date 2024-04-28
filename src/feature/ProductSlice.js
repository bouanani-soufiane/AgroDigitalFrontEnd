import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ProductState = {
  updateState: false,
  loading: false,
  productList: [],
  error: "",
  response: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("http://localhost/api/v1/products");
    return response.data.data;
  }
);
const token = JSON.parse(localStorage.getItem('user'));

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {

    console.log(data);
    const response = await axios.post("http://localhost/api/v1/products", data.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token.access_token}`,

        }
      });

    return response.data.data;
  }
);

export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (data) => {
    const response = await axios.delete(
      `http://localhost/api/v1/products/${data}`
      , {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        }
      });
    return response.data.data;
  }
);



export const modifiedProduct = createAsyncThunk(
  "product/modifiedProduct",
  async ({ formData, id }) => {
    console.log('FormData sent:', id);
    const response = await axios.post(
      `http://localhost/api/v1/products/${id}`, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token.access_token}`,

        }
      });


    console.log();
    return response.data.data;
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState: ProductState,
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
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productList.push(action.payload);
        state.response = "add";
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder.addCase(removeProduct.fulfilled, (state, action) => {

      const newProductList = state.productList.filter(item => item.id !== action.payload)
      state.response = "delete";
      state.productList = newProductList
    });

    builder.addCase(modifiedProduct.fulfilled, (state, action) => {
      state.loading = false;
      const { id, name, quantity, type, image } = action.payload;
      state.productList = state.productList.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            id, name, quantity, type, image
          };
        }
        return task;
      });

      state.response = "updated";
    });
  },
});

export default ProductSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  ProductSlice.actions;