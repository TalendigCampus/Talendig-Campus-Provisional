import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import recruiterReducer from "./slices/recruiterSlice";
import talentReducer from "./slices/talentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recruiter: recruiterReducer,
    talent: talentReducer,
  },
});
