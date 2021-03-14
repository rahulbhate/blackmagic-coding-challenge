import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Fragment } from "react";

// Destructure props
const Confirm = ({ handleNext, handleBack, values, ...props }) => {
  const {
    id,
    firstName,
    lastName,
    email,
    gender,
    date,
    phone,
    city,
    address,
    userRoles,
    abOriginal,
    uploadFile,
    hobby
  } = values;

  const handleSubmit = () => {
    // Do whatever with the values
    const id = parseInt(10);
    console.log(values);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", values.uploadFile);
    console.log(values.uploadFile + values.uploadFile.name);
    // Show last compinent or success message
    fetch("http://localhost:3001/profile/", {
      method: "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(res => {
        console.log(res);
        handleNext();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='First Name' secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Last Name' secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Email Address' secondary={email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Gender' secondary={gender} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Date of birth' secondary={date} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='City' secondary={city} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='phone'
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary='address'
            secondary={address.length > 0 ? address : "Not Provided"}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary='userRoles'
            secondary={userRoles.length > 0 ? userRoles.length : "Not Provided"}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary='abOriginal'
            secondary={abOriginal ? "true" : "false"}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary='uploadFile' secondary={uploadFile} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary='hobby'
            secondary={hobby.length > 0 ? hobby.length : "Not Provided"}
          />
        </ListItem>
        <Divider />
      </List>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant='contained' color='default' onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 10 }}
          variant='contained'
          color='secondary'
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default Confirm;
