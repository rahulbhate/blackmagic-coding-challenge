import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import React from "react";

// Destructuring props
const ThirdStep = ({
  handleNext,
  handleBack,
  handleChange,
  handleCheckBox,
  handleRadioBox,
  handleFile,
  values: { address, userRoles, uploadFile, abOriginal, hobby },
  formErrors
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    address.length > 0 &&
    !formErrors.address &&
    hobby.length > 0 &&
    userRoles.length > 0 &&
    uploadFile.length > 0 &&
    !formErrors.uploadFile;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl component='fieldset' fullWidth>
            <TextareaAutosize
              aria-label='minimum height'
              rowsMin={5}
              margin='normal'
              autoComplete='off'
              onChange={handleChange}
              label='Address'
              required
              name='address'
              placeholder='Enter your address'
              value={address || ""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component='fieldset' fullWidth>
            <TextField
              select
              name='userRoles'
              margin='normal'
              id='userRoles'
              variant='outlined'
              label='Select Role'
              required
              SelectProps={{
                multiple: true,
                value: userRoles,
                onChange: handleChange
              }}
            >
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='user1'>User1</MenuItem>
              <MenuItem value='user2'>User2</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              aria-label='gender'
              name='abOriginal'
              value={abOriginal}
              onChange={handleChange}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl component='fieldset' fullWidth margin='normal'>
            <FormLabel component='legend'>
              Please Upload your file.(*jpg,*jpeg,*png,*pdf)
            </FormLabel>
            <TextField
              fullWidth
              margin='normal'
              type='file'
              name='uploadFile'
              value={uploadFile}
              onChange={handleFile}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormLabel component='legend'>
            What are your programming skills?
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox onChange={handleCheckBox} name='hobby' value='HTML5' />
            }
            label='HTML5'
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name='hobby'
                color='primary'
                value='React'
              />
            }
            label='React'
          />
          <FormControlLabel
            control={
              <Checkbox name='hobby' onChange={handleCheckBox} value='CSS3' />
            }
            label='CSS3'
          />
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant='contained'
          color='default'
          onClick={handleBack}
          style={{ marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          variant='contained'
          disabled={!isValid}
          color='primary'
          onClick={isValid ? handleNext : null}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default ThirdStep;
