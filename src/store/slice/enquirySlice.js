import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addEnquiryApi } from "../../api/thunk/frontapi/enquirey.jsx";

// 🔹 Async Thunk for sending enquiry form
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

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
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
      });
  },
});

export const { resetEnquiryState } = enquirySlice.actions;
export default enquirySlice.reducer;
