import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Information from "./Information";
import Location from "./Location";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

const useStyles = makeStyles(theme => ({}));

//สำหรับใส่ชื่อ Step
function getSteps() {
  return ["Information", "Location"];
}
//สร้าง Schema สำหรับ validate information
const informationSchema = yup.object().shape({
  FarmName: yup.string().required("This field is required."),
  phone_contact: yup.string().required("This field is required."),
  email: yup.string().required("This field is required."),
  AddressName: yup.string().required("This field is required."),
  zip_code: yup.string().required("This field is required.")
});

//สร้าง Schema สำหรับ validate account
const locationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email.")
    .required("This field is required."),
  password: yup
    .string()
    .required("This field is required.")
    .min(3, "Please Enter less then 3 letters"),
  confirmPassword: yup
    .string()
    .required("This field is required.")
    .min(3, "This field at least 3 characters.")
    .oneOf([yup.ref("password"), null], "Password not match.")
});

export default function StepprtForm() {
  const classes = useStyles();
 

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    information[1]({});
    account[1]({});
    setActiveStep(0);
  };

  const onSubmit = data => {
    console.log(data);
    if (activeStep === 0) {
      console.log(information);
      information[1](data);
    } else if (activeStep === 1) {
      account[1](data);
    }
    handleNext();
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Information formProps={informationForm} data={information} />;
      case 1:
        return <Location formProps={locationForm} data={account} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <>
      <form
        onSubmit={
          activeStep === 0
            ? informationForm.handleSubmit(onSubmit)
            : locationForm.handleSubmit(onSubmit)
        }
      >
        {" "}
        <div className="modal-header">
          <h1 className="modal-title pl-1">{steps[activeStep]}</h1>
          <Stepper className="p-0" activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const labelProps = {};
                // if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
                // }
                return (
                  <Step key={label}>
                    <StepLabel  className="text-center">
                      {/* {label} */}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
        </div>
        <div className="modal-body">
          {/* <div className={classes.root}> */}
            
            {/* <div> */}
            {activeStep === steps.length ? (
              <div className={classes.buttonLayout}>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
              </div>
            )}
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="modal-footer">
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
            className="btn btn-secondary"
          >
            Back
          </button>
          <button onClick={onSubmit} className="btn btn-primary">
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
          {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button> */}
        </div>
      </form>
    </>
  );
}
