import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./features/sidebar/sidebarSlice";
import themeModeReducer from "./features/themeMode/themeModeSlice";
import { LoginReducer, registerReducer } from "./features/authentication";

const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    themeMode: themeModeReducer,
    logins: LoginReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
