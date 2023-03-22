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
    currentSelection: [],
    titleInternship: [],
    talentsIntership: [],
    titleDataIntership: [],
    currentTalentIntership: null,
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
    setCurrentSelection: (state, action) => {
      state.currentSelection = state.StudentInfo.filter((institution) => {
        return action.payload.includes(institution.talentId);
      });
    },
    setTitleInternship: (state, action) => {
      state.titleInternship.push(action.payload);
    },
    setCurrentTalentIntership: (state, action) => {
      state.currentTalentIntership = state.titleInternship.find(
        (student) => student.nameGroup === action.payload.nameGroup
      );
    },
    setTalentsIntership: (state, action) => {
      state.talentsIntership.push(action.payload);
    },
    setTitleDataIntership: (state, action) => {
      state.titleDataIntership.push(action.payload);
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
    deleteStudent: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          action.payload.tecnologies.forEach((value) => {
            talent.technology = talent.technology.filter((t) => t !== value);
          });
        }

        return talent;
      });
    },
    addStudent: (state, action) => {
      state.currentTalent = state.TalentsInfo.map((talent) => {
        if (talent.talentId === action.payload.talentId) {
          talent.technology.push(action.payload.tecnologyId);
        }

        return talent;
      });
    },
    setShowStudentsFree: (state, action) => {
      state.StudentInfo = state.StudentInfo.map((student) => {
        if (
          student.recruiterProcess.status.intern === false &&
          student.recruiterProcess.activeProcess === false
        ) {
          return student;
        }
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
  setShowStudentsFree,
  addInstitution,
  setcurrentInstitution,
  setCurrentTalent,
  setCurrentSelection,
  setTitleInternship,
  setCurrentTalentIntership,
  setTalentsIntership,
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
export const selectStudents = (state) => state.institution.StudentInfo;
export const institutionPreview = (state) =>
  state.institution.institutionPreview;
export const currentInstitution = (state) =>
  state.institution.currentInstitution;
export const CurrentTalent = (state) => state.institution.currentTalent;
export const currentSelection = (state) => state.institution.currentSelection;
export const titleInternship = (state) => state.institution.titleInternship;
export const currentTalentIntership = (state) =>
  state.institution.currentTalentIntership;
export const titleDataIntership = (state) =>
  state.institution.titleDataIntership;
export const talentsIntership = (state) => state.institution.talentsIntership;

export const showUndo = (state) => state.institution.showUndo;
export const allowDelete = (state) => state.institution.allowDelete;

export default institutionSlice.reducer;
