import Box from "@material-ui/core/Box";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useState } from "react";
import Confirm from "./Confirm";
import FirstStep from "./FirstStep";
import formValidation from "./Helper/formValidation";
import SecondStep from "./SecondStep";
import Success from "./Success";
import ThirdStep from "./ThirdStep";

// Step titles
const labels = ["First Step", "Second Step", "Third Step", "Confirmation"];

const initialValues = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  date: "",
  city: "",
  phone: "",
  address: "",
  userRoles: [],
  abOriginal: false,
  uploadFile: "",
  hobby: []
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20
  },
  email: {
    error: "",
    validate: "email"
  },
  gender: {
    error: ""
  },
  date: {
    error: ""
  },
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15
  },
  userRolls: {
    error: ""
  },
  abOriginal: {
    error: ""
  },
  address: {
    error: ""
  },
  uploadFile: {
    error: ""
  },
  hobby: {
    error: ""
  }
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep(prev => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep(prev => prev - 1);
  // Handle form checkbox
  const handleCheckBox = e => {
    const { name } = e.target;
    const newSelection = e.target.value;
    let newSelectionArray;
    console.log(newSelection);
    if (formValues.hobby.indexOf(newSelection) > -1) {
      newSelectionArray = formValues.hobby.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...formValues.hobby, newSelection];
    }
    console.log(newSelectionArray);
    setFormValues(prev => ({
      ...prev,
      [name]: newSelectionArray
    }));
    console.log(formValues);
  };
  // Handle form Radiobox
  const handleRadioBox = e => {
    const { name } = e.target;
    const selectedOption = e.target.title;
    e.persist();
    setFormValues(prev => ({
      ...prev,
      [name]: selectedOption
    }));
    console.log(formValues);
    // set errors
    const error = formValidation(name, fieldsValidation) || "";

    setFormErrors({
      [name]: error
    });
  };
  const handleFile = e => {
    let files = e.target.files;
    const data = new FormData();
    data.append("myFile", e.target.files[0]);
    axios
      .post("http://localhost:3001/upload/", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res);
      });
  };
  // Handle form change
  const handleChange = e => {
    const { name, value } = e.target;

    // Set values
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));

    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error
    });
  };

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            handleRadioBox={handleRadioBox}
            handleFile={handleFile}
            handleCheckBox={handleCheckBox}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <>
          <Box style={{ margin: "30px 0 50px" }}>
            <Typography variant='h4' align='center'>
              Personal Profile
            </Typography>
            <Typography
              variant='subtitle2'
              align='center'
              style={{ margin: "10px 0" }}
            >
              Please fill your profile information below.
            </Typography>
          </Box>
          <Stepper
            activeStep={activeStep}
            style={{ margin: "30px 0 15px" }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
};

export default StepForm;
