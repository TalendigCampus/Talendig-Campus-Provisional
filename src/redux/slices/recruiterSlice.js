import { createSlice } from "@reduxjs/toolkit";
import RecruitersInfo from "../../pages/pages/AdminRecruiters/RecruiterInfo.json";

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    RecruitersInfo,
    setRecruiterToDelete: null,
    showUndo: false,
  },
  reducers: {
    deleteRecruiter: (state, action) => {
      state.RecruitersInfo = state.RecruitersInfo.filter(
        (recruiter) => recruiter.id !== action.payload.recruiterId
      );
    },
    addRecruiter: (state, action) => {
      state.RecruitersInfo = [
        action.payload.recruiter,
        ...state.RecruitersInfo,
      ];
    },
    recruiterToDelete: (state, action) => {
      state.setRecruiterToDelete = state.RecruitersInfo.find(
        (recruiter) => recruiter.id === action.payload.recruiterId
      );
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
  },
});

export const { deleteRecruiter, recruiterToDelete, addRecruiter, setShowUndo } =
  recruiterSlice.actions;
export const selectRecruiters = (state) => state.recruiter.RecruitersInfo;
export const recruiterToBeRemoved = (state) =>
  state.recruiter.setRecruiterToDelete;
export const showUndo = (state) => state.recruiter.showUndo;

export default recruiterSlice.reducer;
