import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteForm } from "../store/FormData-slice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "1.2rem",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  fontWeight: 600,
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

const DeleteButton = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  cursor: "pointer",
  marginLeft: "auto",
}));

const EmptyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "30vh",
}));

function ShowData() {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteForm(id));
  }

  const data = useSelector((state) => state.formkey);

  return (
    <Container maxWidth="md">
      <Box>
        {data.length === 0 ? (
          <EmptyBox>
            <Typography variant="h5" color="textSecondary">
              No records found
            </Typography>
          </EmptyBox>
        ) : (
          <Grid container spacing={2}>
            {data.map((element) => (
              <Grid item xs={4} sm={4} key={element.id}>
                <Item>
                  <Heading>Data Details</Heading>
                  <Box marginBottom={1}>
                    <SubHeading>Name:</SubHeading>
                    <InfoText>{element.name}</InfoText>
                  </Box>
                  <Box marginBottom={1}>
                    <SubHeading>Phone:</SubHeading>
                    <InfoText>{element.phone}</InfoText>
                  </Box>
                  <Box marginBottom={1}>
                    <SubHeading>Address:</SubHeading>
                    <InfoText>{element.address}</InfoText>
                  </Box>
                  <Box marginBottom={1}>
                    <SubHeading>Postal Code:</SubHeading>
                    <InfoText>{element.postalCode}</InfoText>
                  </Box>
                  <Box marginBottom={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box>
                        <SubHeading>Highest Education:</SubHeading>
                        <InfoText>{element.education}</InfoText>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box>
                        <SubHeading>Passing Year:</SubHeading>
                        <InfoText>{element.pass_year}</InfoText>
                      </Box>
                    </Stack>
                  </Box>
                  <DeleteButton onClick={() => handleDelete(element.id)} />
                </Item>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default ShowData;
