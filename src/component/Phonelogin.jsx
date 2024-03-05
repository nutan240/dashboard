import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { NavLink, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { MdOutlineMailLock } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import { FcGoogle } from "react-icons/fc";
// import "semantic-ui-css/semantic.min.css";

function Phonelogin() {
  const [phone, setPhone] = useState("");
  const [user1, setUser1] = useState(null);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const sendotp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
      });
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser1(confirmation);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyotp = async () => {
    try {
      await user1.confirm(otp);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
          height: "100vh",
          width: "100%",
          paddingTop: "50px",
          overflow: "auto",
        }}
      >
        
          <Stack
            sx={{
              width: "50%",
              margin: "auto",
                height: "auto",
              border: "1px solid gray",
              padding: 3,
              boxShadow: 3,
              background: "white",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingBottom: "25px",
                color: "rgb(37, 84, 112)",
                fontSize: "30px",
                fontStyle: "italic",
              }}
            >
              login with phone{" "}
            </Typography>
            <PhoneInput
              value={phone}
              onChange={(phoneNumber) => setPhone("+" + phoneNumber)}
              country="us"
            />

            <Button
              sx={{
                marginTop: "20px",
                background:
                  "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3 22 65 / 70%) 75.3%)",
              }}
              onClick={sendotp}
              variant="contained"
            >
              Send otp
            </Button>
            <TextField

              sx={{ marginTop: "20px" }}
              onChange={(e) => setOtp(e.target.value)}
             variant="filled"
              size="full"
              label="Enter Otp"
            />

            <Button
              sx={{
                marginTop: "30px",
                background:
                  "radial-gradient(circle at 74.2% 50.9%,  rgb(3 22 65 / 70%)  5.2%, rgb(14, 72, 222) 75.3%)",
              }}
              onClick={verifyotp}
              variant="contained"
            >
              Verify otp{" "}
            </Button>
            <Typography id="recaptcha"></Typography>
            <Box sx={{ marginTop: "15px" }}>
              <NavLink
                style={{
                  color: "darkblue",
                  paddingTop: 3,
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to={"/signup"}
                variant="body2"
              >
                have a account Sign in with gmail{" "}
                <MdOutlineMailLock
                  style={{
                    color: "orange",
                  }}
                />{" "}
                or google{" "}
                <FcGoogle style={{ fontSize: "19px", paddingRight: "10px" }} />
                ....
              </NavLink>
            </Box>
          </Stack>
        </Box>
      
    </>
  );
}

export default Phonelogin;
