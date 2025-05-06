"use client";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import ListItemText from '@mui/material/ListItemText';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Avatar, Button, InputLabel, List, ListItem, ListItemAvatar } from "@mui/material";
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';


export default function page1() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Form submitted:", formData);
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });   
  }
    const goBack = () => {
        // Logic to go back to the previous page
        window.history.back();
    }
  
  return (
    <div className="align align-middle flex items-center m-4 bg-gray-100 w-5xl mx-50 my-25">
        <div className="w-1/3 bg-image-container p-6 flex flex-col gap-4">
         <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LooksOneRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Step 1" secondary="YOUR INFO" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LooksTwoOutlinedIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Step 2" secondary="SELECT PLAN" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LooksTwoOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Step 3" secondary="ADD-ON" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Step 4" secondary="SUMMARY" />
      </ListItem>
     </List>
        </div>
        <div className="w-2/3 flex flex-col gap-8">
          <div className="mx-25">
            <p>Personal Information</p>
            <p>Please Provide your name and email address</p>
          </div>
          <div className="flex flex-col gap-8">
            <div>Page 2</div>
          </div>
          <button onClick={goBack}>Go back</button>
        </div>
    </div>
  );
}
