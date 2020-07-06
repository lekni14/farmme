import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, FormControl, InputLabel, Select } from "@material-ui/core";
import { Container, Row, Col } from 'react-bootstrap'
import ThaiAddress from 'react-thai-address';
import { useFormik } from 'formik';

import * as Yup from "yup";
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
    }
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem"
  }
}));
ThaiAddress.search({ province: "" });
const provinces = ThaiAddress.provinces;
export default function Owner(props) {
  const { FormonSubmit } = props
  const classes = useStyles();
  //   const { FarmName, lastName, phone_contact, email, AddressName, zip_code } = data[0];
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [state, setState] = React.useState({
    distant: 'Select distant',
    cities: [],
    tumbons: [],
    address: undefined,
    address_no_tmp: '',
    address_no: '',
    province: '',
    district: '',
    city: '',
    postcode: '',
    firstName: '',
    lastName: '',
    validated: false,
  });
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone_contact: '',
      postcode: state.postcode,
      AddressName: '',
      city: state.city,
      district: state.district,
      province: state.province
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        // .max(2, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      phone_contact: Yup.string().required("This field is required."),
      AddressName: Yup.string().required("This field is required."),
      postcode: Yup.string().required("This field is required."),
      province: Yup.string().required("This field is required."),
      district: Yup.string().required("This field is required."),
      city: Yup.string().required("This field is required."),
    }),
    onSubmit: FormonSubmit,
  });

  const onSelectedprovince = e => {
    var cities = [];
    const results = ThaiAddress.search({ province: e.target.value });
    //console.log(results);
    results.map(item => {
      if (!cities.includes(item.city)) {
        //console.log(item.city)
        cities.push(item.city)
      }
    })
    formik.handleChange(e)
    setState({
      ...state,
      province: e.target.value,
      cities: cities,
      tumbons: [],
      postcode: ""
    })
  };

  const onSelectedDistrict = e => {
    var tumbons = [];
    const results = ThaiAddress.search({
      city: e.target.value,
      province: state.province
    });
    //console.log(results);
    results.map(item => {
      if (!tumbons.includes(item.tumbon)) {
        //console.log(item.city)
        tumbons.push(item.tumbon);
      }
    });
    formik.handleChange(e)
    setState({
      ...state,
      district: e.target.value,
      address: undefined,
      tumbons: tumbons,
      postcode: ""
    })
  };

  const onSelectedTumbon = e => {
    const results = ThaiAddress.search({
      tumbon: e.target.value,
      city: state.district,
      province: state.province
    });
    formik.handleChange(e)
    
    results.map(item => {
      if (
        item.tumbon === e.target.value &&
        item.city === state.district &&
        item.province === state.province
      ) {
        console.log(item.zipcode)
        setState({
          ...state,
          city: item.tumbon,
          address: item,
          postcode: '' + item.zipcode
        })
      }
      setState({
        ...state,
        city: item.tumbon,
        address: item,
        postcode: '' + item.zipcode
      })
      formik.setFieldValue('postcode', item.zipcode)
      // formik.setValues(postcode, '' + item.zipcode)
    });
  };

  function RenderProvinces(props) {
    const options = props.option;
    const listItems = options.map((item) =>
      <option key={item} value={item}>{item}</option>
    );
    return (
      <>{listItems}</>
    );
  } 
  return (
    // <Container>
    <Row>
      <Col xs={12} md={4}>
        <h2>ข้อมูลของฟาร์ม</h2>
        <p>ระบุข้อมูลการติดต่อเบื้องต้นสำหรับเจ้าของฟาร์ม</p>
      </Col>
      <Col xs={12} md={8}>
        <Fragment>
          <h4>ข้อมูลฟาร์ม</h4>
          <div>
            <form noValidate role="form" onSubmit={formik.handleSubmit}>
              <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item md={6} xs={6}>
                  <TextField
                    id="firstName"
                    label="ชื่อ"
                    name="firstName"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={!!formik.errors.firstName}
                    // ref={register({ required: true, maxLength: 20 })}
                    // onChange={formik.handleChange}
                    defaultValue={state.firstName}
                    required
                  />
                  {/* {formik.errors.firstName && formik.touched.firstName ? (
                    <p className={classes.errorMessage}>{formik.errors.firstName}</p>
                  ) : null} */}
                </Grid>
                <Grid item md={6} xs={6}>
                  <TextField
                    id="lastName"
                    label="นามสกุล"
                    name="lastName"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={!!formik.errors.lastName}
                    value={formik.values.lastName}
                  />
                  {/* {errors.FarmName && (
              <p className={classes.errorMessage}>{errors.FarmName.message}</p>
            )} */}
                </Grid>
                <Grid item md={4} xs={4}>
                  <FormControl variant="outlined" className={classes.textField} error={!!formik.errors.province}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      จังหวัด
                    </InputLabel>
                    <Select native labelWidth={labelWidth} inputProps={{
                      name: "province",
                      id: "outlined-provinces"
                    }}
                      value={state.province}
                      onChange={onSelectedprovince}
                      onBlur={formik.handleBlur}
                      error={!!formik.errors.province}
                    >
                      <option key="99" value="" />
                      <RenderProvinces option={provinces} />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} xs={4}>
                  <FormControl variant="outlined" className={classes.textField} error={!!formik.errors.district}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      อำเภอ
                    </InputLabel>
                    <Select native labelWidth={labelWidth} inputProps={{
                      name: "district",
                      id: "outlined-age-native-simple"
                    }}
                      value={state.district}
                      onChange={onSelectedDistrict}
                      error={!!formik.errors.district}
                    >
                      <option value="" />
                      {state.cities.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={4} xs={4}>
                  <FormControl variant="outlined" className={classes.textField} error={!!formik.errors.city}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      ตำบล
                    </InputLabel>
                    <Select
                      native
                      labelWidth={labelWidth}
                      inputProps={{
                        name: "city",
                        id: "outlined-city"
                      }}
                      value={state.city}
                      onChange={onSelectedTumbon}
                      error={!!formik.errors.city}
                    >
                      <option value=""></option>
                      {state.tumbons.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={8} xs={8}>
                  <FormControl variant="outlined" className={classes.textField}>
                    <TextField
                      id="AddressName"
                      label="ที่อยู่"
                      name="AddressName"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!formik.errors.AddressName}
                      onChange={formik.handleChange}
                    // error={!!errors.AddressName}
                    // defaultValue={AddressName}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={4} xs={4}>
                  <FormControl variant="outlined" className={classes.textField}>
                    <TextField
                      id="postcode"
                      label="รหัสไปรษณี"
                      name="postcode"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!formik.errors.postcode}
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      // defaultValue={state.postcode}
                      value={state.postcode}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={6}>
                  <FormControl variant="outlined" className={classes.textField}>
                    <TextField
                      id="phone_contact"
                      label="เบอร์โทร"
                      name="phone_contact"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!formik.errors.phone_contact}
                      onChange={formik.handleChange}
                    // error={!!errors.phone_contact}
                    // defaultValue={phone_contact}
                    />
                  </FormControl>
                  {/* {errors.phone_contact && (
                <p className={classes.errorMessage}>
                  {errors.phone_contact.message}
                </p>
              )} */}
                </Grid>
                <Grid item md={6} xs={6}>
                  <FormControl variant="outlined" className={classes.textField}>
                    <TextField
                      id="email"
                      label="อีเมล์"
                      name="email"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!formik.errors.email}
                      onChange={formik.handleChange}
                    // error={!!errors.email}
                    // defaultValue={email}
                    />
                  </FormControl>
                  {/* {errors.email && (
                <p className={classes.errorMessage}>
                  {errors.email.message}
                </p>
              )} */}
                </Grid>
              </Grid>
              <Grid className="pt-3 mt-4 d-flex justify-content-end">
                <button
                  // disabled={activeStep === 0}
                  // onClick={handleBack}
                  // className={classes.backButton}
                  className="btn btn-secondary"
                >
                  Back
                  </button>
                <button
                  type="submit"
                  // onClick={onSubmit} 
                  className="btn btn-primary">
                  {/* {activeStep === steps.length - 1 ? "สร้างฟาร์ม" : "ถัดไป"} */}
                    ถัดไป
                  </button>
              </Grid>
            </form>
            {/* </Form> */}
            {/* )}
              </Formik> */}

          </div>

        </Fragment>
      </Col>
    </Row>
    // </Container>

  );
}
