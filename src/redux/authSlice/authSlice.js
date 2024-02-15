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
      await AsyncStorage.setItem(
        "userToken",
        JSON.stringify(data?.user?.token)
      );
      return data;
    } catch (err) {
      throw err.message == "Network Error" ? err?.message : err?.response?.data;
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
  // extraReducers: {
  //   //login
  //   [postLogin.fulfilled]: (state, action) => {
  //     state.userData = action.payload.data;
  //     state.loading = false;
  //   },
  //   [postLogin.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [postLogin.rejected]: (state, action) => {
  //     state.loading = false;
  //     alert("Invalid credentials");
  //   },

  //   //register
  //   [postRegister.fulfilled]: (state, action) => {
  //     state.userData = action.payload.data;
  //     state.loading = false;
  //   },
  //   [postRegister.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [postRegister.rejected]: (state, action) => {
  //     state.loading = false;
  //     alert("Invalid data");
  //   },
  // },
  extraReducers: (builder) => {
    //login
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.userData = action.payload.data;
      state.loading = false;
    })
    builder.addCase(postLogin.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      alert(action?.error?.message);
      console.log("🚀 ~ file: authSlice.js ~ line 96 ~ builder.addCase ~ action", action)
    })
    //register
    builder.addCase(postRegister.fulfilled, (state, action) => {
      state.userData = action.payload.data;
      state.loading = false;
    })
    builder.addCase(postRegister.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(postRegister.rejected, (state, action) => {
      state.loading = false;
      alert("Invalid credentials");
    })

  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
