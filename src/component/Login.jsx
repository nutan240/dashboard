import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import Image1 from "../assets/loginimg4.jpg";
import CustomButton from "./CustomButton";
import Inputcomp from "./Inputcomp";
import { makeStyles } from "mui-styles-hook";
import { FcGoogle } from "react-icons/fc";
import "react-phone-input-2/lib/style.css";
import { FcPhone } from "react-icons/fc";
import Forgetpassword from "../pages/Forgetpassword";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  zIndex: 61,
};

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    background: "linear-gradient(to bottom left, #006369a3 50%, #cae0ec 50%)",
    overflow: "auto",
    padding: 3,
  },
  container2: {
    width: { lg: "70%", sm: "100%", xs: "100%" },
    margin: { lg: "auto", sm: "0px" },
    // height: { lg: "80vh", sm: "90%" },
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  login_stack_container2: {
    width: "50% ",
    margin: "auto",
    boxShadow: 3,
    padding: 5,
    height: "420px",
    backgroundImage: ` url( ${Image1} )`,
    color: "white",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 8,
    display: { lg: "block", sm: "none" },
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    display: { lg: "block", sm: "none", xs: "none" },
  },
  box_container: {
    width: { lg: "70%", sm: "70%" },
    fontStyle: "italic",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginX: "auto",
    fontSize: "26px",
    display: { lg: "block", sm: "none" },
    marginTop: "70px",
  },
  typography: {
    fontSize: { lg: "48px", sm: "30px", sx: "0px" },
    width: { lg: "80%", sm: "60%" },
  },
  stack_container: {
    width: { lg: "50%", md: "45%", sm: "40%", xs: "100%" },
    margin: { lg: "auto", sm: "0px" },
    boxShadow: 3,
    padding: { lg: 5, sm: 6, xs: 4 },
    background: "rgb(255 255 255)",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    height: "420px",
  },
  typography_para: {
    fontSize: "13px",
    fontStyle: "italic",
    // height:'30px'
  },
  typography_head: {
    fontWeight: "bold",
    paddingBottom: "15px",
    color: "rgb(37, 84, 112)",
  },
}));

function Logiin() {
  const classes = useStyles();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handle_Open = () => setOpen(true);
  const handle_Close = () => setOpen(false);

  // const handelgoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       setValue(user.email);
  //       localStorage.setItem("email", user.email);
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please enter your email"),
      password: Yup.string().min(6).required("Please enter your password"),
    }),

    onSubmit: (values) => {
      if (!values.email || !values.password) {
        setErrorMsg("Fill in all fields");
        return;
      }
      setErrorMsg("");

      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          const user = {
            uid: res.user.uid,
            email: res.user.email,

            firstname: values.firstname,
          };
          localStorage.setItem("user", JSON.stringify(user));

          navigate("/home");
        })
        .catch((err) => {
          setErrorMsg(err.message);
          console.log(err.message);
        });
    },
  });

  const Forgetpassword1 = () => {
    handle_Open(true);
  };

  return (
    <>
      <Box sx={{ zIndex: "0px" }}>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Forgetpassword closeEvent={handle_Close} />
          </Box>
        </Modal>
      </Box>

      <Stack sx={classes.container} direction={"row"}>
        <Stack direction={"row"} sx={classes.container2}>
          <Stack sx={classes.login_stack_container2}>
            <Box sx={classes.box_container}>
              <Typography sx={classes.typography}>JOIN OUR </Typography>
              <Typography sx={{ fontSize: "30px", marginTop: "18px" }}>
                COMMUNITY{" "}
              </Typography>
              <Typography sx={{ marginTop: "15px" }}>
                keep Your Employee Data saperate
              </Typography>
            </Box>
          </Stack>

          <Stack sx={classes.stack_container} className="form_container">
            <Typography sx={classes.typography_head} variant="h5">
              Login ...
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack
                sx={{ width: "100%", fontSize: "19px", marginTop: "10px" }}
                direction={"column"}
                spacing={1}
              >
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
                  type={"password"}
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
                <CustomButton buttontype={"submit"} title={"login"} />

                <Box sx={{ marginTop: "15px" }}>
                  <Box
                    sx={{
                      marginTop: "15px",
                      color: "darkblue",
                      fontSize: "18px",
                      cursor:'pointer'
                    }}
                    onClick={Forgetpassword1}
                  >
                    Forgot password
                  </Box>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <NavLink
                    style={{
                      color: "darkblue",
                      paddingTop: 6,
                      textDecoration: "none",
                      fontSize: "18px",
                    }}
                    to={"/signup"}
                    variant="body2"
                  >
                    Don't have an account? Sign up
                  </NavLink>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
      <ToastContainer />
    </>
  );
}

export default Logiin;
