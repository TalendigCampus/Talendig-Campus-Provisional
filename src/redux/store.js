import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import recruiterReducer from "./slices/recruiterSlice";
import bootcampReducer from "./slices/bootcampSlice";
import talentReducer from "./slices/talentSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recruiter: recruiterReducer,
    bootcamp: bootcampReducer,
    talent: talentReducer,
    projects: projectsReducer,
  },
});
