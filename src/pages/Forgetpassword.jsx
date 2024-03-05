import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2"; // Import SweetAlert2

function ForgotPassword({ closeEvent }) {
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const emalVal = e.target.email.value;
    
    sendPasswordResetEmail(auth, emalVal)
      .then((data) => {
        closeEvent();
       
        Swal.fire({
          icon: "success",
          title: "Reset Email Sent",
          text: "Check your email for password reset instructions.",
          zIndex: 9999,
        });
        setTimeout(() => {
            history("/");
          }, 2000);
       
      })
      .catch((err) => {
        closeEvent();
        
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
         
          zIndex: 9999,
        });
      });
  };

  return (
    <>
      <Box>
        <Typography sx={{ marginBottom: "6px" , color:'rgb(3 22 65 / 70%)'  , fontStyle:'italic' , fontWeight:'bold'}} variant="h5" align="left">
          Forgot Password
        </Typography>
        <IconButton
          sx={{ position: "absolute", top: 0, right: "0" }}
          onClick={closeEvent}
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack direction={"column"}>
            <TextField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <Button
              sx={{ marginTop: "14px", background:"radial-gradient(circle at 74.2% 50.9%,  rgb(3 22 65 / 70%)  5.2%, rgb(14, 72, 222) 75.3%)" }}
              type="submit"
              variant="contained"
            >
              Send Reset Email
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
export default ForgotPassword;
