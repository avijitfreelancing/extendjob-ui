import axios from "@/helper/axios";
import config from "@/helper/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWalletBalance = createAsyncThunk(
  "wallet/getWalletBalance",
  async () => {
    const response = await axios.get("/wallet/wallet-balance", config());
    return response.data;
  }
);

const WalletSlice = createSlice({
  name: "wallet",
  initialState: {
    walletDetails: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWalletBalance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWalletBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.walletDetails = action.payload;
      })
      .addCase(getWalletBalance.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default WalletSlice.reducer;
