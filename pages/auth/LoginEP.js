import React, { Fragment } from "react";
import { Formik, Form } from 'formik';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, FormControl, InputLabel, Select } from "@material-ui/core";
import * as yup from "yup";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "-1rem 0 2rem 0",
    padding: "0 7rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0"
    },
    [theme.breakpoints.down("md")]: {
      padding: "0"
    },
    marginTop: "auto"
  },
  textField: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    margin: "0.25rem 0 0.2rem 0",
    backgroundColor: theme.palette.common.white,
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    margin: "0 0 0.2rem 0"
  }
}));
const loginSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required("กรุณาระบุนามอีเมล์."),
  password: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("กรุณาระบุรหัสผ่าน.")
});

export default function LoginEP(props) {
  const { onSubmit } = props
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <>
          <Form noValidate role="form">
            <Grid container direction="row" justify="center" alignItems="center" >
              <Grid item md={12} xs={12}>
                <TextField
                  id="Email"
                  label="อีเมล์"
                  name="email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p className={classes.errorMessage}>{errors.email}</p>
                ) : null}
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  id="Password"
                  label="รหัสผ่าน"
                  type="password"
                  name="password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  error={!!errors.firstname}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <p className={classes.errorMessage}>{errors.password}</p>
                ) : null}
              </Grid>

            </Grid>
            <button type="submit" className="btn btn-block btn-danger mt-2">เข้าสู่ระบบ</button>
          </Form>
          <small className="my-2 d-block text-center">or</small>
        </>
      )
      }
    </Formik >

  );
}
