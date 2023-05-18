import { createSlice } from "@reduxjs/toolkit";
import TalentsInfo from "../../pages/pages/adminPages/AdminTalent/info.json";

const talentSlice = createSlice({
  name: "talent",
  initialState: {
    TalentsInfo,
    currentTalent: null,
    talentPreview: null,
    showUndo: false,
    allowDelete: false,
  },
  reducers: {
    setStatusProcess: (state, action) => {
      state.currentTalent.recruiterProcess.activeProcess = action.payload;
    },
    updateTalentInfo: (state, action) => {
      const updatedTalent = action.payload.updatedTalent;
      const talentIndex = state.TalentsInfo.findIndex(
        (talent) => talent.talentId === updatedTalent.talentId
      );

      if (talentIndex >= 0) {
        state.TalentsInfo[talentIndex] = updatedTalent;
      }
    },
    deleteTalent: (state, action) => {
      state.TalentsInfo = state.TalentsInfo.filter(
        (talent) => talent.talentId !== action.payload.talentId
      );
    },
    addTalent: (state, action) => {
      state.TalentsInfo.unshift(action.payload.newTalent);
    },
    setCurrentTalent: (state, action) => {
      state.currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === action.payload.talentId
      );
    },
    updateTalent: (state, action) => {
      state.currentTalent = action.payload.currentTalent;

      const index = state.TalentsInfo.findIndex(
        (Talent) => Talent.talentId === action.payload.currentTalent.talentId
      );

      if (index !== -1) state.TalentsInfo[index] = action.payload.currentTalent;
    },
    deleteTecnologies: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          action.payload.tecnologies.forEach((value) => {
            talent.technology = talent.technology.filter((t) => t !== value);
          });
        }

        return talent;
      });
    },
    addTecnology: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          talent.technology.push(action.payload.tecnologyId);
        }

        return talent;
      });
    },
    setShowUndo: (state, action) => {
      state.showUndo = action.payload.status;
    },
    setAllowDelete: (state, action) => {
      state.allowDelete = action.payload.status;
    },
    setTalentPreview: (state, action) => {
      state.talentPreview = state.TalentsInfo.find(
        (talent) => talent.talentId === action.payload.talentId
      );
    },
    setProcessStep: (state, action) => {
      const currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === state.currentTalent.talentId
      );
      currentTalent.recruiterProcess.activeStep = action.payload.activeStep;
      state.currentTalent = currentTalent;
    },
    setProcessCompleted: (state, action) => {
      const currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === state.currentTalent.talentId
      );
      currentTalent.recruiterProcess.completedSteps =
        action.payload.completedSteps;
      state.currentTalent = currentTalent;
    },
    setTalentFavorite: (state, action) => {
      const currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === state.currentTalent.talentId
      );

      currentTalent.recruiterProcess.category.favorite =
        !state.currentTalent.recruiterProcess.category.favorite;

      state.currentTalent = currentTalent;
    },
    setRecruitmentProcess: (state, action) => {
      const currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === state.currentTalent.talentId
      );
      currentTalent.recruiterProcess.activeProcess =
        action.payload.activeProcess;
      state.currentTalent = currentTalent;
    },
    setRecruiterDecision: (state, action) => {
      const currentTalent = state.TalentsInfo.find(
        (talent) => talent.talentId === state.currentTalent.talentId
      );
      currentTalent.recruiterProcess.decision.selection =
        action.payload.selection;

      currentTalent.recruiterProcess.decision.comments =
        action.payload.comments;

      state.currentTalent = currentTalent;
    },
  },
});

export const {
  updateTalentInfo,
  setStatusProcess,
  deleteTalent,
  addTalent,
  setCurrentTalent,
  setShowUndo,
  setAllowDelete,
  updateTalent,
  deleteTecnologies,
  addTecnology,
  setTalentPreview,
  setProcessStep,
  setProcessCompleted,
  setRecruiterDecision,
  setTalentFavorite,
  setRecruitmentProcess,
} = talentSlice.actions;
export const selectTalents = (state) => state.talent.TalentsInfo;
export const talentPreview = (state) => state.talent.talentPreview;
export const CurrentTalent = (state) => state.talent.currentTalent;
export const showUndo = (state) => state.talent.showUndo;
export const allowDelete = (state) => state.talent.allowDelete;

export default talentSlice.reducer;
