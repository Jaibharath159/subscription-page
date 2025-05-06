// slices/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "Monthly",
    addons: [],
    pricing: 0,
  },
};

const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { setStep, setFormData } = formSlice.actions;
export default formSlice.reducer;
