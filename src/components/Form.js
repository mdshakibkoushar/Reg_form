import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../store/FormData-slice";
import { useNavigate } from "react-router-dom";
import Alertbox from "./Alertbox";
import { isName, isPhone, isAdd, isCode, isEdu } from "../utility/Validation";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    address: "",
    postalCode: "",
    phone: "",
    education: "",
    pass_year: "",
  });

  const [isEdit, setEdit] = useState({
    name: false,
    address: false,
    postalCode: false,
    phone: false,
    education: false,
  });

  const handleInputBlur = (identifier) => {
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const handleInputChange = (identifier, value) => {
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));

    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, postalCode, phone, education } = enteredValues;
    const arr = [name, address, postalCode, phone, education];
    const notEmpty = arr.every((element) => element.length > 0);

    if (
      notEmpty &&
      isName(name) &&
      isPhone(phone) &&
      isAdd(address) &&
      isCode(postalCode) &&
      isEdu(education)
    ) {
      dispatch(addData(enteredValues));
      navigate("/data");
    } else {
      setOpen(true);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          background: "#F0F2F5",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container columnSpacing={3} rowSpacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="name"
                variant="outlined"
                error={isEdit.name && !isName(enteredValues.name)}
                helperText={
                  isEdit.name && !isName(enteredValues.name)
                    ? "Invalid name"
                    : ""
                }
                value={enteredValues.name}
                onChange={(event) =>
                  handleInputChange("name", event.target.value)
                }
                onBlur={() => handleInputBlur("name")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone No."
                name="phone"
                variant="outlined"
                error={isEdit.phone && !isPhone(enteredValues.phone)}
                helperText={
                  isEdit.phone && !isPhone(enteredValues.phone)
                    ? "Invalid phone number"
                    : ""
                }
                value={enteredValues.phone}
                onChange={(event) =>
                  handleInputChange("phone", event.target.value)
                }
                onBlur={() => handleInputBlur("phone")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="education"
                label="Highest Education"
                name="education"
                variant="outlined"
                error={isEdit.education && !isEdu(enteredValues.education)}
                helperText={
                  isEdit.education && !isEdu(enteredValues.education)
                    ? "Invalid education"
                    : ""
                }
                value={enteredValues.education}
                onChange={(event) =>
                  handleInputChange("education", event.target.value)
                }
                onBlur={() => handleInputBlur("education")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="year">Passing Year</InputLabel>
                <Select
                  labelId="year"
                  id="year"
                  value={enteredValues.pass_year}
                  label="Passing Year"
                  onChange={(event) =>
                    handleInputChange("pass_year", event.target.value)
                  }
                >
                  <MenuItem value="">None</MenuItem>
                  {[2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                variant="outlined"
                error={isEdit.address && !isAdd(enteredValues.address)}
                helperText={
                  isEdit.address && !isAdd(enteredValues.address)
                    ? "Invalid address"
                    : ""
                }
                value={enteredValues.address}
                onChange={(event) =>
                  handleInputChange("address", event.target.value)
                }
                onBlur={() => handleInputBlur("address")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="postalCode"
                label="Postal Code"
                name="postalCode"
                variant="outlined"
                error={isEdit.postalCode && !isCode(enteredValues.postalCode)}
                helperText={
                  isEdit.postalCode && !isCode(enteredValues.postalCode)
                    ? "Invalid postal code"
                    : ""
                }
                value={enteredValues.postalCode}
                onChange={(event) =>
                  handleInputChange("postalCode", event.target.value)
                }
                onBlur={() => handleInputBlur("postalCode")}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 3, borderRadius: "10px" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Alertbox setOpen={setOpen} open={open} />
    </Container>
  );
}

export default Form;
