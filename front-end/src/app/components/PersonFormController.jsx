import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Results from './Results.jsx'


function getSteps() {
  return ['Welcome','Basic Info', 'Lifestyle', 'Diet', 'Results'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ``
    case 1:
      return `Nice to meet you`;
    case 2:
      return `Don't lie, you binge watched the office all week`;
    case 3:
      return `Have you been eating your brocolli?`;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return false;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const determineFormItems = (activeStep) => {
  //   switch (activeStep) {
  //     case 0: 
  //       return <BasicInfo></BasicInfo>;
  //     case 1:
  //       return <LifestyleInfo></LifestyleInfo>;
  //     case 2:
  //       return <DietInfo></DietInfo>;
  //     default:
  //       return 'Unknown step';
  //   }
  // }

  return (
    <Grid item xs={12}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {props.determineCurrentForm(activeStep)}
      <div>
        {activeStep === steps.length -1 ? (
          <div>
            <Button onClick={handleReset} >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography >{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{marginBottom:'2vh'}} >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  style={{marginBottom:'2vh'}}
                >
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{marginBottom:'2vh'}}
              >
                {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
}
