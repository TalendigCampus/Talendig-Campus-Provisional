import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import recruiterReducer from "./slices/recruiterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recruiter: recruiterReducer,
  },
});
