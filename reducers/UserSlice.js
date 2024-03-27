import axios from "@/helper/axios";
import config from "@/helper/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProfileDetails = createAsyncThunk(
  "user/getProfileDetails",
  async () => {
    const response = await axios.get("/auth/profil-details", config());
    return response.data;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    profileDetails: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfileDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileDetails = action.payload;
      })
      .addCase(getProfileDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default UserSlice.reducer;
