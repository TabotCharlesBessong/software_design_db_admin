import React, { useState, useEffect } from "react";
import { TextField, Button, Container } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  });

  const handleChange = (event) => {
    setEmail(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (values) => {
    // handleSubmit(values);
    console.log(values)
  };

  return (
    <Container
      sx={{
        marginTop: "4rem",
      }}
    >
      <Formik
        initialValues={{ email, password }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "90%",
            width: 450,
            padding: "auto",
          }}
        >
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: "0.5rem 5rem",
              margin: "2rem auto",
              alignSelf: "center",
            }}
          >
            Login
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
