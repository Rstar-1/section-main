import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showdashboard = createAsyncThunk(
  "dashboard/showdashboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/dashboardgetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationdashboard = createAsyncThunk(
  "dashboard/paginationdashboard",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/dashboardpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const adddashboard = createAsyncThunk(
  "dashboard/adddashboard",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/dashboardadddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singledashboard = createAsyncThunk(
  "dashboard/singledashboard",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/dashboardsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatedashboard = createAsyncThunk(
  "cms/updatedashboard",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/dashboardupdatedata/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error(
        "Update CMS Image Data Error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const statusdashboard = createAsyncThunk(
  "seo/dashboardstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/dashboardstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletedashboard = createAsyncThunk(
  "dashboard/deletedashboard",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/dashboarddeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboarddata",
  initialState: {
    loading: false,
    dashboarddata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Dashboard Data ------------------ //
    builder.addCase(showdashboard.pending, (state) => {
      state.loading = true;
      state.dashboarddata = [];
      state.error = "";
    });
    builder.addCase(showdashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = action.payload;
      state.error = "";
    });
    builder.addCase(showdashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Dashboard Data ------------------ //

    // ------------------ Pagination Get Dashboard Data ------------------ //
    builder.addCase(paginationdashboard.pending, (state) => {
      state.loading = true;
      state.dashboarddata = [];
      state.error = "";
    });
    builder.addCase(paginationdashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationdashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Dashboard Data ------------------ //

    // ------------------ Add Dashboard Data ------------------ //
    builder.addCase(adddashboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(adddashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(adddashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Dashboard Data ------------------ //

    // ------------------ Single Dashboard Data ------------------ //
    builder.addCase(singledashboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singledashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singledashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Dashboard Data ------------------ //

    // ------------------ Edit Dashboard Data ------------------ //
    builder.addCase(updatedashboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatedashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatedashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Dashboard Data ------------------ //

    // ------------------ Edit Status Dashboard Data ------------------ //
    builder.addCase(statusdashboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statusdashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statusdashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Dashboard Data ------------------ //

    // ------------------ Delete Dashboard Data ------------------ //
    builder.addCase(deletedashboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletedashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletedashboard.rejected, (state, action) => {
      state.loading = false;
      state.dashboarddata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Dashboard Data ------------------ //
  },
});

export default dashboardSlice.reducer;
