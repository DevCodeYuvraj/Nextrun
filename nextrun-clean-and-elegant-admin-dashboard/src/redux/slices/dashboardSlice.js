import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarCollapsed: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState,

  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },

    openSidebar(state) {
      state.sidebarCollapsed = false;
    },

    closeSidebar(state) {
      state.sidebarCollapsed = true;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;