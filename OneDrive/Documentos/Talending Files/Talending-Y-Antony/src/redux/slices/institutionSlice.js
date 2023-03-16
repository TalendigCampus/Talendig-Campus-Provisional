import { createSlice } from "@reduxjs/toolkit";
import InstitutionInfo from "../../pages/pages/adminPages/AdminInstitutions/Info.json";
import StudentInfo from "../../pages/pages/adminPages/AdminInstitutions/institutionStudents.json";

const institutionSlice = createSlice({
  name: "institution",
  initialState: {
    InstitutionInfo,
    StudentInfo,
    currentInstitution: null,
    currentTalent: null,
    institutionPreview: null,
    showUndo: false,
    allowDelete: false,
  },
  reducers: {
    deleteInstitution: (state, action) => {
      state.InstitutionInfo = state.InstitutionInfo.filter(
        (institution) => institution.id !== action.payload.id
      );
    },
    addInstitution: (state, action) => {
      state.InstitutionInfo.unshift(action.payload.newinstitution);
    },
    setcurrentInstitution: (state, action) => {
      state.currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === action.payload.id
      );
    },
    setCurrentTalent: (state, action) => {
      state.currentTalent = state.StudentInfo.find(
        (student) => student.talentId === action.payload.talentId
      );
    },
    updateInstitution: (state, action) => {
      state.currentInstitution = action.payload.currentInstitution;

      const index = state.InstitutionInfo.findIndex(
        (institution) => institution.id === action.payload.currentInstitution.id
      );

      if (index !== -1)
        state.InstitutionInfo[index] = action.payload.currentInstitution;
    },
    deleteTecnologies: (state, action) => {
      state.currentInstitution = state.InstitutionInfo.map((institution) => {
        if (institution.id === action.payload.id) {
          action.payload.tecnologies.forEach((value) => {
            institution.technology = institution.technology.filter(
              (t) => t !== value
            );
          });
        }

        return institution;
      });
    },
    addTecnology: (state, action) => {
      state.currentInstitution = state.InstitutionInfo.map((institution) => {
        if (institution.id === action.payload.id) {
          institution.technology.push(action.payload.tecnologyId);
        }

        return institution;
      });
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
    setAllowDelete: (state, action) => {
      state.allowDelete = action.payload.status;
    },
    setinstitutionPreview: (state, action) => {
      state.institutionPreview = state.InstitutionInfo.find(
        (institution) => institution.id === action.payload.id
      );
    },
    setProcessStep: (state, action) => {
      const currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === state.currentInstitution.id
      );
      currentInstitution.recruiterProcess.activeStep =
        action.payload.activeStep;
      state.currentInstitution = currentInstitution;
    },
    setProcessCompleted: (state, action) => {
      const currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === state.currentInstitution.id
      );
      currentInstitution.recruiterProcess.completedSteps =
        action.payload.completedSteps;
      state.currentInstitution = currentInstitution;
    },
    setinstitutionFavorite: (state, action) => {
      const currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === state.currentInstitution.id
      );

      currentInstitution.recruiterProcess.category.favorite =
        !state.currentInstitution.recruiterProcess.category.favorite;

      state.currentInstitution = currentInstitution;
    },
    setRecruitmentProcess: (state, action) => {
      const currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === state.currentInstitution.id
      );
      currentInstitution.recruiterProcess.activeProcess =
        action.payload.activeProcess;
      state.currentInstitution = currentInstitution;
    },
    setRecruiterDecision: (state, action) => {
      const currentInstitution = state.InstitutionInfo.find(
        (institution) => institution.id === state.currentInstitution.id
      );
      currentInstitution.recruiterProcess.decision.selection =
        action.payload.selection;

      currentInstitution.recruiterProcess.decision.comments =
        action.payload.comments;

      state.currentInstitution = currentInstitution;
    },
  },
});

export const {
  deleteInstitution,
  addInstitution,
  setcurrentInstitution,
  setCurrentTalent,
  setShowUndo,
  setAllowDelete,
  updateInstitution,
  deleteTecnologies,
  addTecnology,
  setinstitutionPreview,
  setProcessStep,
  setProcessCompleted,
  setRecruiterDecision,
  setTalentFavorite,
  setRecruitmentProcess,
} = institutionSlice.actions;
export const selectinstitutions = (state) => state.institution.InstitutionInfo;
export const institutionPreview = (state) =>
  state.institution.institutionPreview;
export const currentInstitution = (state) =>
  state.institution.currentInstitution;
export const CurrentTalent = (state) => state.institution.currentTalent;
export const showUndo = (state) => state.institution.showUndo;
export const allowDelete = (state) => state.institution.allowDelete;

export default institutionSlice.reducer;
