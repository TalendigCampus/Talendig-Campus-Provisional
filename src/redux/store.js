import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import recruiterReducer from "./slices/recruiterSlice";
import bootcampReducer from "./slices/bootcampSlice";
import talentReducer from "./slices/talentSlice";
import briefcaseReducer from "./slices/brieftcaseSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recruiter: recruiterReducer,
    bootcamp: bootcampReducer,
    talent: talentReducer,
    briefcase: briefcaseReducer,
  },
});
