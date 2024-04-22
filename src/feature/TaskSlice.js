import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const TaskState = {
  updateState: false,
  loading: false,
  TaskList: [],
  UserTask: [],
  error: "",
  response: "",
};

const token = JSON.parse(localStorage.getItem('user'));

export const employeeTask = createAsyncThunk(
  "Task/employeeTask",
  async () => {
    const response = await axios.get("http://localhost/api/v1/employeeTask",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        }
      }

    );
    return response.data.data;
  }
);

export const fetchTask = createAsyncThunk(
  "Task/fetchTask",
  async () => {
    const response = await axios.get("http://localhost/api/v1/tasks");
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


      return response.data.data;
    } catch (error) {
      console.error("Error updating Task:", error.message);
      throw error;
    }
  }
);


export const markAsDone = createAsyncThunk(
  "Task/markAsDone",
  async (data) => {
    try {
      const response = await axios.patch(`http://localhost/api/v1/markAsDone/${data.id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error updating Task:", error.message);
      throw error;
    }
  }
);

export const markAsCancelled = createAsyncThunk(
  "Task/markAsCancelled",
  async (data) => {
    try {
      const response = await axios.patch(`http://localhost/api/v1/markAsCancelled/${data.id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error cancel Task:", error.message);
      throw error;
    }
  }
);


export const removeTask = createAsyncThunk(
  "Task/removeTask",
  async (data) => {
    const response = await axios.delete(`http://localhost/api/v1/tasks/${data}`);

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

      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });

    builder
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.TaskList = action.payload;
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.error = action.error.message;
      });


    builder
      .addCase(employeeTask.fulfilled, (state, action) => {
        state.UserTask = action.payload;
        console.log(state);

      })
      .addCase(employeeTask.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(removeTask.fulfilled, (state, action) => {
        const newTaskList = state.TaskList.filter(item => item.id !== action.payload)
        state.response = "delete";

        state.TaskList = newTaskList
        toast.success('Task deleted successfully!');

      })
      .addCase(removeTask.rejected, (state, action) => {
        state.response = "";

      });

    builder
      .addCase(UpdateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateTask.fulfilled, (state, action) => {
        state.loading = false;
        const { id, name, Description, DateStart, DateEnd, Status, TypeTask, employee_id } = action.payload;
        state.TaskList = state.TaskList.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              name,
              Description,
              DateStart,
              DateEnd,
              Status,
              TypeTask,
              employee_id
            };
          }
          return task;
        });

        state.response = "updated";
      })
      .addCase(UpdateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });
    builder
      .addCase(markAsDone.pending, (state) => {
        state.loading = true;
      })
      .addCase(markAsDone.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        const existingTask = state.UserTask.find((task) => task.id === id);

        if (existingTask) {
          existingTask.Status = "Done";
        }
        state.response = "updated";
        console.log("Updated task:", existingTask);
      })
      .addCase(markAsDone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });
    builder
      .addCase(markAsCancelled.pending, (state) => {
        state.loading = true;
      })
      .addCase(markAsCancelled.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        const existingTask = state.UserTask.find((task) => task.id === id);

        if (existingTask) {
          existingTask.Status = "Cancelled";
        }
        state.response = "Cancelled";
        console.log("Updated task:", existingTask);
      })
      .addCase(markAsCancelled.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.response = "";
      });
  },
});

export default TaskSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  TaskSlice.actions;