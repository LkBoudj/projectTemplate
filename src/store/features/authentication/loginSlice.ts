import { Status } from "@/types";
import { ICredentials, ILoginState } from "./interfaces";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "@/store/store";

const initialState: ILoginState = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  status: Status.Idle,
  errors: null,
  token: localStorage.getItem("token"),
};

export const login = createAsyncThunk(
  "auth/login",
  async (credential: ICredentials, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
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
    } catch (e: any) {
      return rejectWithValue(e?.message as string);
    }
  }
);

const loginsSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.errors = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = Status.Loading;
      state.errors = null;
    });
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = Status.Failed;
        state.errors = action.payload as string;
      });
  },
});

const loginState = (state: RootState) => state.logins;

export const auth = createSelector([loginState], (state) => state.user);

export const authState = createSelector([loginState], (state) => state.status);

export const isAuthenticated = createSelector(
  [loginState],
  (state) => state.isAuthenticated
);
export const { logout } = loginsSlice.actions;
export default loginsSlice.reducer;
