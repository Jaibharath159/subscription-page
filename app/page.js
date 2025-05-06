"use client";
import React, { useState } from "react";
import LeftStepComponent from "./(components)/LeftStepComponent";
import RightStepComponent1 from "./(components)/RightStepComponent1";
import RightStepComponent2 from "./(components)/RightStepComponent2";
import { Button } from "@mui/material";
import RightStepComponent3 from "./(components)/RightStepComponent3";
import RightStepComponent4 from "./(components)/RighStepComponent4";
import RightStepComponent5 from "./(components)/RighStepComponent5";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setStep } from "./redux/slice/formDataSlice";

export default function page() {
  const dispatch = useDispatch();
  const stepRedux = useSelector((state) => state.formData.step);
  const formDataRedux = useSelector((state) => state.formData.formData);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   billing: "Monthly",
  //   addons: [],
  // });
  // const [step, setStep] = useState(stepRedux);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setFormData({
        ...formDataRedux,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setStep(step + 1);
    dispatch(setStep(stepRedux + 1));
  };

  return (
    <div className="align align-middle flex items-center m-4 bg-white w-5xl mx-50 my-20 p-4 rounded-2xl">
      <div className="w-1/3 flex flex-col gap-8">
        <LeftStepComponent step={stepRedux} />
      </div>
      <div className=" flex flex-col gap-8 ">
        {stepRedux === 1 ? (
          <RightStepComponent1
            handleChange={handleChange}
            formData={formDataRedux}
          />
        ) : null}
        {stepRedux === 2 ? (
          <RightStepComponent2 formData={formDataRedux} />
        ) : null}
        {stepRedux === 3 ? (
          <RightStepComponent3 formData={formDataRedux} />
        ) : null}
        {stepRedux === 4 ? (
          <RightStepComponent4 formData={formDataRedux} />
        ) : null}
        {stepRedux === 5 ? <RightStepComponent5 /> : null}

        {stepRedux !== 5 ? (
          <div className="flex flex-row gap-72 mx-14">
            {stepRedux !== 1 ? (
              <Button
                onClick={() => dispatch(setStep(stepRedux - 1))}
                className="w-30 h-14"
              >
                Go Back
              </Button>
            ) : null}
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              className="w-30 h-10"
            >
              Next Step
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
