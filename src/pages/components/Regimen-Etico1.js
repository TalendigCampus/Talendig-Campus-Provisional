import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  useMediaQuery,
} from "@mui/material";

const mobile = {
  display: "flex",
  gap: 10,
  marginTop: "2em",
  padding: "2em",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const desktop = { ...mobile, flexDirection: "row" };
const radioInputValues = ["Ausencia", "Inferior", "Termino medio", "Superior"];

const RegimenForm = ({ textTopic, inputName, handleChange }) => {
  const matches = useMediaQuery("(max-width:1080px)");
  const word = textTopic.split(".");
  const mainWords = word.shift();
  const otherWords = word[0];
  //   const otherWords = textTopic.split(".").shift().join();
  //   console.log(otherWords);
  return (
    <>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={matches ? mobile : desktop}>
          <Typography
            variant="h3"
            sx={{ fontSize: "16px", textAlign: "justify", fontWeight: 800 }}
          >
            {mainWords}
            <span
              style={{
                fontSize: "14px",
                textAlign: "justify",
                fontWeight: 400,
              }}
            >
              {otherWords}
            </span>
          </Typography>
          <RadioGroup
            sx={{ flexWrap: "nowrap" }}
            row
            name={inputName}
            onChange={handleChange}
          >
            {radioInputValues.map((item, i) => (
              <FormControlLabel
                key={item}
                value={`${i}`}
                control={<Radio color="primary" />}
                label={item}
              />
            ))}
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};

export default RegimenForm;
