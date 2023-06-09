import React, { useState, useEffect } from "react";
import { TextField, Button, Container } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().required().oneOf([password]).min(8),
  });

  const handleChange = (event) => {
    setUsername(event.target.value);
    setEmail(event.target.value);
    setPassword(event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (values) => {
    handleSubmit(values);
  };

  return (
    <Container>
      <Formik
        initialValues={{ username, email, password, confirmPassword }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextField
            label="Username"
            type="password"
            value={username}
            onChange={handleChange}
            fullWidth
            sx={{
              margin: "2rem auto",
              alignSelf: "center",
            }}
          />
          <TextField
            label="Email Address"
            value={email}
            onChange={handleChange}
            fullWidth
            sx={{
              margin: "2rem auto",
              alignSelf: "center",
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
            fullWidth
            sx={{
              margin: "2rem auto",
              alignSelf: "center",
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            fullWidth
            sx={{
              margin: "2rem auto",
              alignSelf: "center",
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Signup;
