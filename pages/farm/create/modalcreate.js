
import React, { Component, useState } from "react";
import { Container, Button, Modal } from 'react-bootstrap'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import StepprtForm from "./StepprtForm";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Information from "./information";
import Owner from "./Owner";
import Location from "./location";
import User from "./User";

// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({}));
function getSteps() {
  return ["Information", "Location", "Owner"];
}

const modalCreate = props => {

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = React.useState({
    user:null
  });

  // form
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

    setActiveStep(0);
  };

  const onSubmit = data => {
    console.log(data);

    if (activeStep === 0) {
      var address = {
        address: data.AddressName,
        province: data.province,
        district: data.district,
        city: data.city,
        zipcode: data.postcode
      }
      var owner = state.user
      // owner.address = [address]
    }else if (activeStep === 1) {

    }
    //   console.log(information);
    //   information[1](data);
    // } else if (activeStep === 1) {
    //   account[1](data);
    // }
    handleNext();
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Owner FormonSubmit={onSubmit} />;
      case 1:
        return <Information FormonSubmit={onSubmit} />;
      case 2:
        return <Location FormonSubmit={onSubmit} />;
      case 3:
        return <User FormonSubmit={onSubmit} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <>
      <Fab onClick={handleShow} variant="extended"
        color="primary"
        aria-label="add" className="mt--6">
        <AddIcon />
                            สร้างฟาร์ม
           </Fab>

      <Modal dialogClassName="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
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
                    <StepLabel className="text-center">
                      {/* {label} */}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="md-create-farm">
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
              <Container className={classes.instructions}>
                {getStepContent(activeStep)}
              </Container>
            )}
          {/* <StepprtForm/> */}
        </Modal.Body>
        {/* <Modal.Footer>
        <button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backButton}
          className="btn btn-secondary"
        >
          Back
          </button>
        <button onClick={onSubmit} className="btn btn-primary">
          {activeStep === steps.length - 1 ? "สร้างฟาร์ม" : "ถัดไป"}
        </button>
      </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default modalCreate;