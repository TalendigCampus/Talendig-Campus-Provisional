import { configureStore } from "@reduxjs/toolkit";
import recruiterReducer from "./slices/recruiterSlice";
import instructorReducer from "./slices/instructorSlice";
import bootcampReducer from "./slices/bootcampSlice";
import talentReducer from "./slices/talentSlice";
import projectsReducer from "./slices/projectsSlice";
import briefcaseReducer from "./slices/brieftcaseSlice";
import institutionSlice from "./slices/institutionSlice";
import tourSlice from "./slices/tourSlice";

export const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    instructor: instructorReducer,
    bootcamp: bootcampReducer,
    talent: talentReducer,
    projects: projectsReducer,
    briefcase: briefcaseReducer,
    institution: institutionSlice,
    tour: tourSlice,
  },
});
