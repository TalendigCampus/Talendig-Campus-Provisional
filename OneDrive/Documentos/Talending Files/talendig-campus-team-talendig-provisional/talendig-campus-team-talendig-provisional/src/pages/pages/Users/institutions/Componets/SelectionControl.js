import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Radio Buttons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Radio buttons allow the user to select one option from a set.
        </Typography>
        <Paper mt={3}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </CardContent>
    </Card>
  );
}

function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Checkboxes
        </Typography>
        <Typography variant="body2" gutterBottom>
          Checkboxes allow the user to select one or more items from a set.
        </Typography>
        <Paper mt={3}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
          </FormControl>
        </Paper>
      </CardContent>
    </Card>
  );
}

export function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Confirmar
        </Typography>
        <Paper mt={3}>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Aceptar"
              />
            </FormGroup>
          </FormControl>
        </Paper>
      </CardContent>
    </Card>
  );
}

function FormControlLabelPosition() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Label placement
        </Typography>
        <Typography variant="body2" gutterBottom>
          You can change the placement of the label.
        </Typography>
        <Paper mt={3}>
          <FormControl component="fieldset" variant="standard">
            <RadioGroup aria-label="position" name="position" row>
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Top"
                labelPlacement="top"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Start"
                labelPlacement="start"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Bottom"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="End"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </CardContent>
    </Card>
  );
}
