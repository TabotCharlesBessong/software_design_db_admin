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
    <Container>
      <Formik
        initialValues={{ email, password }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextField label="Username" value={email} onChange={handleChange} />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>

        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
