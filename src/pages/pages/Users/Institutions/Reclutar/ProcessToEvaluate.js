import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent } from "@mui/material";
import { SwitchesGroup } from "../Componets/SelectionControl";
import {
  CurrentTalent,
  setStatusProcess,
  updateTalentInfo,
  setProcessStep,
  setProcessCompleted,
} from "../../../../../redux/slices/talentSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ActiveStep,
  Completed,
} from "../../../../../redux/slices/institutionSlice";
import { useEffect } from "react";

const steps = [
  "Revision inicial",
  "Solicitud de empleo",
  "Entrevista",
  "Descicion final",
];

export default function ProcessToEvaluate(props) {
  const dispatch = useDispatch();
  let newDataTalent = useSelector(CurrentTalent);
  const activeStep = newDataTalent.recruiterProcess.activeStep;
  const completed = newDataTalent.recruiterProcess.completedSteps;

  const { onClose, open, setOpen, setProcess, data } = props;

  const handleListItemClick = (value) => {
    setOpen(false);
  };

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
    return completedSteps() === totalSteps();
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

  const handleBack = () => {
    let prevActiveStep = activeStep;
    dispatch(setProcessStep({ activeStep: prevActiveStep - 1 }));
  };

  const handleStep = (step) => () => {
    dispatch(setProcessStep({ activeStep: step }));
  };

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    dispatch(setProcessCompleted({ completedSteps: newCompleted }));
    setProcess(true);
    handleNext();
    if (completedSteps() === totalSteps()) {
      setOpen(false);
      setProcess(false);
    }
  };

  const handleReset = () => {
    dispatch(setProcessStep({ activeStep: 1 })); // Reinicia el índice del paso activo a 0
    dispatch(setProcessCompleted({ completedSteps: { 0: true } })); // Reinicia el objeto de pasos completados a un objeto vacío
    console.log(completed);
  };

  if (activeStep >= 2) {
    dispatch(setStatusProcess(true));
    dispatch(updateTalentInfo({ updatedTalent: newDataTalent }));
  } else {
    dispatch(setStatusProcess(false));
    dispatch(updateTalentInfo({ updatedTalent: newDataTalent }));
  }

  return (
    <Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={open}
    >
      <DialogContent>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
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
                  Todos los pasos han sido completados
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reiniciar proceso</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep !== 3 ? (
                  <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    Paso {activeStep + 1}
                  </Typography>
                ) : null}
                {activeStep == 3 ? <SwitchesGroup /> : null}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="error"
                    onClick={handleListItemClick}
                    sx={{ mr: 1 }}
                  >
                    Salir
                  </Button>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Volver
                  </Button>
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
                        Paso {activeStep + 1}, revision completada
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finalizar"
                          : "Completar paso"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
