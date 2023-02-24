import { createSlice } from "@reduxjs/toolkit";
import RecruitersInfo from "../../pages/pages/AdminRecruiters/RecruiterInfo.json";

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    RecruitersInfo,
    currentRecruiter: null,
    showUndo: false,
  },
  reducers: {
    deleteRecruiter: (state, action) => {
      state.RecruitersInfo = state.RecruitersInfo.filter(
        (recruiter) => recruiter.id !== action.payload.recruiterId
      );
    },
    addRecruiter: (state, action) => {
      state.RecruitersInfo.unshift(action.payload.recruiter);
    },
    setCurrentRecruiter: (state, action) => {
      state.currentRecruiter = state.RecruitersInfo.find(
        (recruiter) => recruiter.id === action.payload.recruiterId
      );
    },
    updateRecruiter: (state, action) => {
      state.currentRecruiter = action.payload.currentRecruiter;

      const index = state.RecruitersInfo.findIndex(
        (recruiter) => recruiter.id === action.payload.currentRecruiter.id
      );

      if (index !== -1)
        state.RecruitersInfo[index] = action.payload.currentRecruiter;
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const {
  deleteRecruiter,
  setCurrentRecruiter,
  addRecruiter,
  setShowUndo,
  updateRecruiter,
} = recruiterSlice.actions;
export const selectRecruiters = (state) => state.recruiter.RecruitersInfo;
export const currentRecruiter = (state) => state.recruiter.currentRecruiter;
export const showUndo = (state) => state.recruiter.showUndo;

export default recruiterSlice.reducer;
