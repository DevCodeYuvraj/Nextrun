import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  loading: false,
  pageTitle: "Dashboard",
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },

    toggleTheme(state) {
      state.theme =
        state.theme === "light" ? "dark" : "light";
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },

    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    openSidebar(state) {
      state.sidebarOpen = true;
    },

    closeSidebar(state) {
      state.sidebarOpen = false;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setLoading,
  setPageTitle,
  toggleSidebar,
  openSidebar,
  closeSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;