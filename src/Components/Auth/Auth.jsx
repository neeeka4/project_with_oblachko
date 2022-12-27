import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContextProvider";
import "./Auth.css";
import pic1 from "./image/Frame 64.svg";
import pic2 from "./image/Frame 87.svg";
import pic3 from "./image/socials fb.svg";
import pic4 from "./image/socials google.svg";
import pic6 from "./image/Vector inp.svg";

const theme = createTheme();

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleLogin,
    handleLogOut,
    handleSignUp,
    handleSignUpWithGoogle,
  } = useContext(authContext);
  console.log(user.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <div id="sign" class="container">
        <div class="block_left">
          <h3 class="block_left__title">Welcome</h3>
          <ul class="block__left_ul">
            <li class="block__left_li1">
              <img src={pic6} alt="" class="inp__email_img" />
              <input
                placeholder="Email"
                class="inp__email"
                type="text"
                name=""
                id=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </li>
            <li class="block__left_li2">
              <img src={pic1} alt="" class="inp__password_img" />
              <input
                placeholder="Password"
                class="inp__password"
                type="text"
                name=""
                id=""
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <h1 class="forgot__pass_title">Forgot password?</h1>
            </li>

            {hasAccount ? (
              <button onClick={handleLogin} class="btn__signup">
                Sign In
              </button>
            ) : (
              <button onClick={handleSignUp} class="btn__signup">
                Sign Up
              </button>
            )}

            <img src={pic2} alt="" class="signup__or" />
            <li class="continue__google">
              <button
                // onClick={handleSignUpWithGoogle}
                class="continue__goole_btn"
              >
                <img src={pic4} alt="" class="continue__google_img" />
                Continue with Google
              </button>
            </li>
            <li class="continue__fb"></li>
            <button class="continue__fb_btn">
              <img src={pic3} alt="" class="continue__fb_img" />
              Continue with Facebook
            </button>
            <div class="hasAccountTitle">
              {hasAccount ? (
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              ) : (
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  {"Have an account? Sign In"}
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Auth;
