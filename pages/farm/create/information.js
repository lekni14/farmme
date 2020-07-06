import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import { TextField, FormControl, InputLabel, Select } from "@material-ui/core";
import { Container, Row, Col } from 'react-bootstrap'
import ThaiAddress from 'react-thai-address';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
    // marginTop: "auto"
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
const informationSchema = yup.object().shape({
  FarmName: yup.string().required("This field is required."),
  phone_contact: yup.string().required("This field is required."),
  email: yup.string().required("This field is required."),
  AddressName: yup.string().required("This field is required."),
  zip_code: yup.string().required("This field is required.")
});

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Information(props) {
  const classes = useStyles();
  //   const { FarmName, lastName, phone_contact, email, AddressName, zip_code } = data[0];
  const inputLabel = React.useRef(null);
  const [value, setSelectedValue] = React.useState('');

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
    is_owner: true,
  });
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // const handleChange = name => event => {
  //   console.log('fffffffffffffffffffffffffffffffff')
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
      city: state.district,
      province: state.province
    });
    //console.log(results);
    results.map(item => {
      if (!tumbons.includes(item.tumbon)) {
        //console.log(item.city)
        tumbons.push(item.tumbon);
      }
    });

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
    //console.log(results);
    results.map(item => {
      if (
        item.tumbon === e.target.value &&
        item.city === state.district &&
        item.province === state.province
      ) {
        setState({
          ...state,
          city: item.tumbon,
          address: item,
          postcode: '' + item.zipcode
        })
      }
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

  ThaiAddress.search({ province: "" });
  const provinces = ThaiAddress.provinces;
  return (
    // <Container>
    <Row>
      <Col xs={12} md={4}>
        <h2>ข้อมูลของฟาร์ม</h2>
        <p>ระบุข้อมูลพื้นฐานเกี่ยวกับกิจการของคุณเพื่อช่วยในการตั้งค่าการใช้งานให้ง่ายขึ้น</p>
      </Col>
      <Col xs={12} md={8}>
        <Fragment>
          <h4>ข้อมูลฟาร์ม</h4>
          <div>
          <form noValidate role="form" onSubmit={formik.handleSubmit}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
              <Grid item md={12} xs={12}>
                <TextField
                  id="firstName"
                  label="ชื่อฟาร์ม"
                  name="FarmName"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  onChange={onSelectedprovince}
                // onBlur={props.handleBlur}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                {/* <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                      ที่อยู่เดียวกับเจ้าของฟาร์ม
                    </InputLabel> */}
                <FormControlLabel
                  control={<GreenCheckbox checked={state.is_owner} onChange={handleChange} name="is_owner" />}
                  label="ที่อยู่เดียวกับเจ้าของฟาร์ม"
                />
                {/* <RadioGroup row aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                      <FormControlLabel value="best" control={<GreenRadio />} label="ไม่ใช่" />
                      <FormControlLabel value="worst" control={<GreenRadio />} label="ใช่" />
                    </RadioGroup> */}
              </Grid>
              <Grid item md={4} xs={4}>
                <FormControl variant="outlined" className={classes.textField} >
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    จังหวัด
                    </InputLabel>
                  <Select native labelWidth={labelWidth} inputProps={{
                    name: "province",
                    id: "outlined-provinces"
                  }}
                    value={state.province}
                    onChange={onSelectedprovince}
                  >
                    <option key="99" value="" />
                    <RenderProvinces option={provinces} />
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={4}>
                <FormControl variant="outlined" className={classes.textField}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    อำเภอ
                    </InputLabel>
                  <Select native labelWidth={labelWidth} inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                    value={state.district}
                    onChange={onSelectedDistrict}
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
                <FormControl variant="outlined" className={classes.textField} >
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    ตำบล
                    </InputLabel>
                  <Select
                    native
                    labelWidth={labelWidth}
                    inputProps={{
                      name: "age",
                      id: "outlined-tumbon"
                    }}
                    value={state.tumbon}
                    onChange={onSelectedTumbon}
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
                  // inputRef={register}
                  // error={!!errors.AddressName}
                  // defaultValue={AddressName}
                  />
                </FormControl>
              </Grid>
              <Grid item md={4} xs={4}>
                <TextField
                  id="zip_code"
                  label="รหัสไปรษณี"
                  name="zip_code"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  // inputRef={register}
                  // error={!!errors.zip_code}
                  defaultValue={state.postcode}
                />
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  id="phone_contact"
                  label="เบอร์โทร"
                  name="phone_contact"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                // inputRef={register}
                // error={!!errors.phone_contact}
                // defaultValue={phone_contact}
                />
                {/* {errors.phone_contact && (
                <p className={classes.errorMessage}>
                  {errors.phone_contact.message}
                </p>
              )} */}
              </Grid>
              <Grid item md={6} xs={6}>
                <TextField
                  id="email"
                  label="อีเมล์"
                  name="email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                // inputRef={register}
                // error={!!errors.email}
                // defaultValue={email}
                />
                {/* {errors.email && (
                <p className={classes.errorMessage}>
                  {errors.email.message}
                </p>
              )} */}
              </Grid>
              
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
