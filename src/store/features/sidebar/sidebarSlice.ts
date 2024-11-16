import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ISidebarState {
  isOpen: boolean;
}

const initialState: ISidebarState = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;

export const sidebarState = (state: RootState) => state.sidebar;

export const sidebarIsOpen = createSelector(
  [sidebarState],
  (state) => state.isOpen
);

export default sidebarSlice.reducer;
