import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showsidebar = createAsyncThunk(
  "sidebar/showsidebar",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/sidebargetdata"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const paginationsidebar = createAsyncThunk(
  "sidebar/paginationsidebar",
  async ({ offset, search }) => {
    const response = await axios.post(
      "http://localhost:8000/api/sidebarpaginationdata",
      { offset, search }
    );
    return response.data;
  }
);

export const addsidebar = createAsyncThunk(
  "sidebar/addsidebar",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/sidebaradddata",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const singlesidebar = createAsyncThunk(
  "sidebar/singlesidebar",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/sidebarsingledata/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatesidebar = createAsyncThunk(
  "cms/updatesidebar",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/sidebarupdatedata/${id}`,
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

export const statussidebar = createAsyncThunk(
  "seo/sidebarstatusdata",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/sidebarstatusdata/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deletesidebar = createAsyncThunk(
  "sidebar/deletesidebar",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/sidebardeletedata/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const sidebarSlice = createSlice({
  name: "sidebardata",
  initialState: {
    loading: false,
    sidebardata: [],
    error: "",
    isSuccess: "",
    totalCount: 0,
  },

  // reducer call
  extraReducers: (builder) => {
    // ------------------ Get Sidebar Data ------------------ //
    builder.addCase(showsidebar.pending, (state) => {
      state.loading = true;
      state.sidebardata = [];
      state.error = "";
    });
    builder.addCase(showsidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = action.payload;
      state.error = "";
    });
    builder.addCase(showsidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Get Sidebar Data ------------------ //

    // ------------------ Pagination Get Sidebar Data ------------------ //
    builder.addCase(paginationsidebar.pending, (state) => {
      state.loading = true;
      state.sidebardata = [];
      state.error = "";
    });
    builder.addCase(paginationsidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = action.payload;
      state.error = "";
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(paginationsidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Pagination Get Sidebar Data ------------------ //

    // ------------------ Add Sidebar Data ------------------ //
    builder.addCase(addsidebar.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addsidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addsidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Add Sidebar Data ------------------ //

    // ------------------ Single Sidebar Data ------------------ //
    builder.addCase(singlesidebar.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(singlesidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(singlesidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Single Sidebar Data ------------------ //

    // ------------------ Edit Sidebar Data ------------------ //
    builder.addCase(updatesidebar.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updatesidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(updatesidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Sidebar Data ------------------ //

    // ------------------ Edit Status Sidebar Data ------------------ //
    builder.addCase(statussidebar.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(statussidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(statussidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Edit Status Sidebar Data ------------------ //

    // ------------------ Delete Sidebar Data ------------------ //
    builder.addCase(deletesidebar.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deletesidebar.fulfilled, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(deletesidebar.rejected, (state, action) => {
      state.loading = false;
      state.sidebardata = [];
      state.error = action.error.message;
    });
    // ------------------ Delete Sidebar Data ------------------ //
  },
});

export default sidebarSlice.reducer;
