import React from "react";
import Tour from "reactour";

import { Typography as MuiTypography } from "@mui/material";
import { spacing } from "@mui/system";
import styled from "styled-components/macro";

const Typography = styled(MuiTypography)(spacing);

const makeStepsForTour = (userSteps) => {
  return userSteps.map((steps) => ({
    ...steps,
    content: (
      <Typography color="#e5e5e5" pr={4}>
        {steps.content}
      </Typography>
    ),
    style: {
      backgroundColor: "#2d2d2d",
      color: "white",
    },
  }));
};

const PagesTour = ({ userSteps, showTour, setShowTour }) => {
  const steps = makeStepsForTour(userSteps);

  return (
    <Tour
      steps={steps}
      isOpen={showTour}
      onRequestClose={() => setShowTour(false)}
      rounded={5}
      accentColor="#5cb7b7"
    />
  );
};

export default PagesTour;
