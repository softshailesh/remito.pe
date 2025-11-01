import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addEnquiryApi,
  getAllEnquiryApi,
} from "../../api/thunk/frontapi/enquirey.jsx";

// 🔹 Add Enquiry
export const addEnquiry = createAsyncThunk(
  "enquiry/addEnquiry",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await addEnquiryApi(formData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to submit enquiry."
      );
    }
  }
);

// 🔹 Get All Enquiries (pagination)
export const getAllEnquiries = createAsyncThunk(
  "enquiry/getAllEnquiries",
  async ({ page = 1, limit = 5 }, { rejectWithValue }) => {
    try {
      const data = await getAllEnquiryApi(page, limit);
      return data; // expects { data, total, page, limit }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch enquiries."
      );
    }
  }
);

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
    allEnquiries: [],
    total: 0,
    page: 1,
    limit: 5,
  },
  reducers: {
    resetEnquiryState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Add Enquiry
      .addCase(addEnquiry.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(addEnquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(addEnquiry.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ✅ Get All Enquiries
      .addCase(getAllEnquiries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllEnquiries.fulfilled, (state, action) => {
        state.loading = false;
        const { data, total, page, limit } = action.payload;

        // 🔧 Backend returns "data" instead of "enquiries"
        state.allEnquiries = data || [];
        state.total = total || 0;
        state.page = page || 1;
        state.limit = limit || 5;
      })
      .addCase(getAllEnquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetEnquiryState } = enquirySlice.actions;
export default enquirySlice.reducer;
