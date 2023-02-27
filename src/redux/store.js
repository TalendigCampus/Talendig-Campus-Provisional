import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import recruiterReducer from "./slices/recruiterSlice";
import instructorReducer from "./slices/instructorSlice";
import bootcampReducer from "./slices/bootcampSlice";
import talentReducer from "./slices/talentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recruiter: recruiterReducer,
    instructor: instructorReducer,
    bootcamp: bootcampReducer,
    talent: talentReducer,
  },
});
