import {
  createSlice,
  createAsyncThunk,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { postLoginApi, postRegisterApi } from "../../services/api/methods/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const postLogin = createAsyncThunk("post/login", async (payload) => {
  try {
    const response = await postLoginApi(payload);
    const data = response.data;
    await AsyncStorage.setItem("userToken", JSON.stringify(data?.user?.token));
    return data;
  } catch (err) {
    throw err.message == "Network Error" ? err?.message : err;
  }
});

export const postRegister = createAsyncThunk(
  "post/register",
  async (payload) => {
    try {
      const response = await postRegisterApi(payload);
      const data = response.data;
      return data;
    } catch (err) {
      const error = err.message == "Network Error" ? err?.message : err?.response?.data ? err.response?.data?.error?.toString() : "Error";
      alert(error)
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: [],
    loading: false,
    error: "",
  },
  reducers: {
    logoutUser: (state, action) => {
      state.userData = [];
      AsyncStorage.removeItem("userToken").then((response) => {
        // console.log("Removed");
      });
    },
  },

  extraReducers: (builder) => {
    //login
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.loading = false;
    })
    builder.addCase(postLogin.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      alert(action?.error?.message);
      console.log("🚀 ~ file: authSlice.js ~ line 70 ~ builder.addCase ~ action", action)
    })
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
