import { createSlice } from "@reduxjs/toolkit";
import JsonInfo from "../../pages/pages/Portafolio/info.json";

console.log(JsonInfo);
const briefcaseSlice = createSlice({
  name: "briefcase",
  initialState: {
    JsonInfo,
    currentBriefcase: null,
    setBriefcaseToDelete: null,
    showUndo: false,
    allowDelete: false,
  },
  reducers: {
    deletebriefcase: (state, action) => {
      state.JsonInfo = state.JsonInfo.filter(
        (briefcase) => briefcase.briefcaseId !== action.payload.briefcaseId
      );
    },
    addbriefcase: (state, action) => {
      state.JsonInfo.unshift(action.payload.briefcaseName);
    },
    briefcaseToDelete: (state, action) => {
      state.setBriefcaseToDelete = state.JsonInfo.find(
        (briefcase) => briefcase.briefcaseId === action.payload.briefcaseId
      );
    },
    setcurrentBriefcase: (state, action) => {
      state.currentBriefcase = state.JsonInfo.find(
        (briefcase) => briefcase.briefcaseId === action.payload.briefcaseId
      );
    },
    updatebriefcase: (state, action) => {
      state.currentBriefcase = action.payload.currentBriefcase;

      const index = state.JsonInfo.findIndex(
        (briefcase) =>
          briefcase.briefcaseId === action.payload.currentBriefcase.briefcaseId
      );

      if (index !== -1) state.JsonInfo[index] = action.payload.currentBriefcase;
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const {
  deletebriefcase,
  setcurrentBriefcase,
  briefcaseToDelete,
  addbriefcase,
  setShowUndo,
  updatebriefcase,
} = briefcaseSlice.actions;
export const selectbriefcases = (state) => state.briefcase.JsonInfo;
export const currentBriefcase = (state) => state.briefcase.currentBriefcase;
export const showUndo = (state) => state.briefcase.showUndo;
export const allowDelete = (state) => state.briefcase.allowDelete;
export const briefcaseToBeRemoved = (state) =>
  state.briefcase.setBriefcaseToDelete;

export default briefcaseSlice.reducer;
