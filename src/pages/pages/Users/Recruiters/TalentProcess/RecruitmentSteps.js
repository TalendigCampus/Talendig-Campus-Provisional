import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  CurrentTalent,
  setProcessStep,
  setProcessCompleted,
  setRecruiterDecision,
  setRecruitmentProcess,
} from "../../../../../redux/slices/talentSlice";
import { setShowEmerge } from "../../../../../redux/slices/recruiterSlice";
import RecuiterTalentDialog from "./RecuiterTalentDecisionDialog";
const steps = [
  "Contacto Inicial",
  "Solicitud de empleo",
  "Entrevista",
  "Decision",
];

export default function HorizontalNonLinearStepper() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const talent = useSelector(CurrentTalent);

  const dispatch = useDispatch();

  const activeStep = talent.recruiterProcess.activeStep;
  const [showDecision, setShowDecision] = React.useState(false);
  const completed = talent.recruiterProcess.completedSteps;

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    const processCompleted = completedSteps() === totalSteps();
    if (processCompleted) {
      dispatch(setProcessStep({ activeStep: 0 }));
    }
    return processCompleted;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    dispatch(setProcessStep({ activeStep: newActiveStep }));
  };

  const handleStep = (step: number) => () => {
    if (step === steps.length - 1) {
      setShowDecision(true);
      dispatch(setShowEmerge({ status: true }));
    }

    dispatch(setProcessStep({ activeStep: step }));
  };

  const handleComplete = () => {
    if (
      activeStep === steps.length - 1 &&
      (!talent.recruiterProcess.decision.comments ||
        !talent.recruiterProcess.decision.selection)
    ) {
      dispatch(setShowEmerge({ status: true }));
      return;
    }
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    dispatch(setProcessCompleted({ completedSteps: newCompleted }));
    dispatch(setRecruitmentProcess({ activeProcess: true }));
    handleNext();
  };

  const handleReset = () => {
    dispatch(setProcessStep({ activeStep: 0 }));
    dispatch(setProcessCompleted({ completedSteps: {} }));
    dispatch(setRecruiterDecision({ selection: "", comments: "" }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Todos los pasos completados - ya terminaste!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Volver a realizar</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Siguiente
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} ya fue completado!
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Terminar"
                      : "Listo"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
        {(steps[activeStep] === steps[steps.length - 1] || showDecision) && (
          <RecuiterTalentDialog setShowDecision={setShowDecision} />
        )}
      </div>
    </Box>
  );
}
