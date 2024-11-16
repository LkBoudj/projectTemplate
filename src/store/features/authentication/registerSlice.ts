import { Status } from "@/types";
import { IRegister, IRegisterState } from "./interfaces";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "@/store/store";

const initialState: IRegisterState = {
  isAuthenticated: false,
  user: null,
  status: Status.Idle,
  errors: null,
};

export const register = createAsyncThunk(
  "auth/login",
  async (credential: IRegister, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json", // إضافة Content-Type في الهيدر
        },
        body: JSON.stringify(credential),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e.message);
      return rejectWithValue("The login failed");
    }
  }
);

const registerSlice = createSlice({
  name: "registerState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.status = Status.Loading;
      state.errors = null;
    });
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        console.log(action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = Status.Failed;
        state.errors = action.payload as string;
      });
  },
});

const registerState = (state: RootState) => state.register;

export const auth = createSelector([registerState], (state) => state.user);

export const authState = createSelector(
  [registerState],
  (state) => state.status
);

export const isAuthenticated = createSelector(
  [registerState],
  (state) => state.isAuthenticated
);

export default registerSlice.reducer;
