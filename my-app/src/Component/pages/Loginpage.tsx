import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../service/AuthService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@mui/material";

function Loginpage() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="font">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const accessToken = await login(
                    values.email,
                    values.password
                  );
                  console.log(accessToken);

                  if (accessToken) {
                    navigate("../");
                  } else {
                    setLoginError(true);
                  }
                } catch (error) {
                  console.error(error);
                  setLoginError(true);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      type="email"
                      className="form-control"
                      variant="outlined"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      id="password"
                      type="password"
                      className="form-control"
                      variant="outlined"
                      name="password"
                    />
                  </div>
                  <Button
                    className="btn-login"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
