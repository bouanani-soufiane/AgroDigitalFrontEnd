import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const TaskState = {
  updateState: false,
  loading: false,
  TaskList: [],
  error: "",
  response: "",
};

export const fetchTask = createAsyncThunk(
  "Task/fetchTask",
  async () => {
    const response = await axios.get("http://localhost/api/v1/tasks");
    console.log("dd", response.data.data);
    return response.data.data;
  }
);

export const addTask = createAsyncThunk(
  "Task/addTask",
  async (data) => {
    try {
      const response = await axios.post("http://localhost/api/v1/tasks/", {
        name: data.name,
        Description: data.Description,
        DateStart: data.DateStart,
        DateEnd: data.DateEnd,
        Status: data.Status,
        TypeTask: data.TypeTask,
        employee_id: data.employee_id,
      });

      console.log("Response from server:", response.data);

      return response.data.data;
    } catch (error) {
      console.error("Error adding Task:", error.message);
      throw error;
    }
  }
);


export const UpdateTask = createAsyncThunk(
  "Task/UpdateTask",
  async (data) => {
    try {
      const response = await axios.put(`http://localhost/api/v1/tasks/${data.id}`, {
        name: data.name,
        Description: data.Description,
        DateStart: data.DateStart,
        DateEnd: data.DateEnd,
        Status: data.Status,
        TypeTask: data.TypeTask,
        employee_id: data.employee_id,
      });

      console.log("Response from server:", response.data);

      return response.data.data;
    } catch (error) {
      console.error("Error updating Task:", error.message);
      throw error;
    }
  }
);



export const removeTask = createAsyncThunk(
  "Task/removeTask",
  async (data) => {
    const response = await axios.delete(`http://localhost/api/v1/tasks/${data}`);
    console.log("Response from server:", response.data.data);

    return response.data;
  }
);

const TaskSlice = createSlice({
  name: "Task",
  initialState: TaskState,

  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.TaskList = [...state.TaskList, action.payload];
        state.response = "add";
        console.log(action.payload)
        console.log("Newly added action:", action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });

    builder
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.TaskList = action.payload;
        console.log('kikiki', state.TaskList);
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(removeTask.fulfilled, (state, action) => {
        const newTaskList = state.TaskList.filter(item => item.id !== action.payload)
        state.response = "delete";
        console.log(action.payload)
        console.log(state.TaskList)
        state.TaskList = newTaskList
        toast.success('Task deleted successfully!');

      })
      .addCase(removeTask.rejected, (state, action) => {
        state.response = "";
        console.log("error:", action)

      });

    builder
      .addCase(UpdateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateTask.fulfilled, (state, action) => {
        state.loading = false;
        const { id ,name, Description, DateStart, DateEnd, Status, TypeTask, employee_id } = action.payload;
        const existingTask = state.TaskList.find((task) => task.id === id);
        if (existingTask) {
          existingTask.name = name;
          existingTask.Description = Description;
          existingTask.DateStart = DateStart;
          existingTask.DateEnd = DateEnd;
          existingTask.Status = Status;
          existingTask.TypeTask = TypeTask;
          existingTask.employee_id = employee_id;
        }
        state.response = "updated";
        console.log("action here",action.payload)
      })
      .addCase(UpdateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });
  },
});

export default TaskSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  TaskSlice.actions;