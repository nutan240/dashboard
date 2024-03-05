import React, { useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import Image1 from "../assets/loginimg.jpg";
import Inputcomp from "./Inputcomp";

import { makeStyles } from "mui-styles-hook";
import CustomButton from "./CustomButton";
import { FcGoogle, FcPhone } from "react-icons/fc";


const useStyles = makeStyles(() => ({
  grid_container: {
    display: "flex",
    width: "100%",
    overflow: "auto",
    height: "100vh",
  },
  grid_container1: {
    background: "radial-gradient(263px at 100.2% 3%, rgb(12, 85, 141) 31.1%, rgb(205, 181, 93) 36.4%, rgb(244, 102, 90) 50.9%, rgb(199, 206, 187) 60.7%, rgb(249, 140, 69) 72.5%, rgb(12, 73, 116) 72.6%)",
    overflow: "auto",
    width: "100%",
    height: "100vh"
},

  form_container11: {
    display: "flex",
    
    width:'30%' ,
   
    background: "white",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    padding: "48px",
    height: "auto",
    overflow:'auto',
    marginX :'auto',
    marginTop:'20px'

  },
  typography_para: {
    fontSize: "13px",
    fontStyle: "italic",
  },
  box_container1: {
    background: "#303f5ea3",
    width: "50%",
    display: { lg: "block", sm: "none", xs: "none" },
  },
  stack_side_container: {
    backgroundImage: ` url( ${Image1} )`,
    objectFit: "cover",
    position: "center",
    overflow: "auto",
    height: "500px",
    width: '100%',
    marginTop: "100px",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
  },
}));

function Signup() {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const usersCollection = collection(db, "posts");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      showPassword: false,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please enter your firstname"),
      lastname: Yup.string().required("Please enter your lastname"),
      email: Yup.string().email().required("Please enter your email"),
      password: Yup.string().min(6).required("Please enter your password"),
    }),

    onSubmit: async (values) => {
      setErrorMsg("");

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        await addDoc(usersCollection, {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
        });

        toast.success("Registration successful!");
        navigate("/");

        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        setErrorMsg(error.message);
        console.error("Error during registration:", error);
        toast.error("Registration failed. Please try again.");
      }
    },
  });

  const handelgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setValue(user.email);
        localStorage.setItem("email", user.email);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Stack>
        <Grid sx={classes.grid_container}>
          <Grid sx={classes.grid_container1}>
            <Stack direction={"column"} sx={classes.form_container11}>
              <Typography sx={{ fontWeight: "bold",
    paddingBottom: "15px",
    color: "rgb(37, 84, 112)", fontStyle:'italic'}} className="heading" variant="h5">
                Sign Up
              </Typography>

              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  password: "",
                  phoneno: "",
                }}
                onSubmit={formik.handleSubmit}
              >
                <Form>
                  <Stack
                    sx={{ width: "100%", fontSize: "19px" }}
                    direction={"column"}
                    spacing={1}
                  >
                    <Inputcomp
                      label={"Firstname"}
                      type={"text"}
                      inputname={"firstname"}
                      inputvalue={formik.values.firstname}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                    />
                    <Typography
                      variant="p"
                      sx={classes.typography_para}
                      color={"red"}
                    >
                      {formik.errors.firstname &&
                        formik.touched.firstname &&
                        formik.errors.firstname}
                    </Typography>

                    <Inputcomp
                      label={"Lastname"}
                      type={"text"}
                      inputname={"lastname"}
                      inputvalue={formik.values.lastname}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                    />
                    <Typography
                      variant="p"
                      sx={classes.typography_para}
                      color={"red"}
                    >
                      {formik.errors.lastname &&
                        formik.touched.lastname &&
                        formik.errors.lastname}
                    </Typography>

                    <Inputcomp
                      label={"Email"}
                      type={"email"}
                      inputname={"email"}
                      inputvalue={formik.values.email}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                    />
                    <Typography
                      variant="p"
                      sx={classes.typography_para}
                      color={"red"}
                    >
                      {formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email}
                    </Typography>

                    <Inputcomp
                      label={"Password"}
                      type={formik.values.showPassword ? "text" : "password"}
                      inputname={"password"}
                      inputvalue={formik.values.password}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                    />

                    <Typography
                      variant="p"
                      sx={classes.typography_para}
                      color={"red"}
                    >
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </Typography>

                    
                    <CustomButton buttontype={"submit"} title={"sign up "}/>
                  </Stack>
                </Form>
              </Formik>

              <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    onClick={() => {
                      navigate("/phone");
                    }}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {" "}
                    <FcPhone
                      style={{ fontSize: "23px", paddingRight: "10px" }}
                    />{" "}
                    signin with Phone
                  </Typography>
                  <Typography
                    onClick={handelgoogle}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {" "}
                    <FcGoogle
                      style={{ fontSize: "19px", paddingRight: "10px" }}
                    />{" "}
                    signin with google
                  </Typography>
                </Box>
              <Box sx={{ paddingTop: 3 }}>
                <NavLink
                  style={{ color: "darkblue",
                  paddingTop: 3,
                  textDecoration: "none",
                  fontSize: "18px", }}
                  to={"/"}
                  variant="body2"
                >
                  Already have an account? Sign in
                </NavLink>
              </Box>
            </Stack>
          </Grid>
         
        </Grid>
      </Stack>
      <ToastContainer />
    </>
  );
}

export default Signup;
