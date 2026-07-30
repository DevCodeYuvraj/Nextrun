import { configureStore } from "@reduxjs/toolkit";

import emailReducer from "./slices/emailSlice";
import dashboardReducer from "./slices/dashboardSlice";
import contactReducer from "./slices/contactSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
    dashboard: dashboardReducer,
    contacts: contactReducer,
    ui: uiReducer,
  },
});