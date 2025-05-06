import React from "react";
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";

const RightStepComponent1 = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="ml-20 mb-2">
        <p className="text-4xl font-bold text-gray-800">Personal Information</p>
        <p className="text-gray-500 text-base">
          Please Provide your name and email address
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 w-120 mx-20"
        >
          <FormControl defaultValue="" className="font-sans" required>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              placeholder="Write your name here"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl defaultValue="" className="font-sans" required>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              placeholder="Enter your E-mail here"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl defaultValue="" className="font-sans" required>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter your phone number here"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default RightStepComponent1;
