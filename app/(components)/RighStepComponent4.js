import { Box } from "@mui/material";
import React from "react";
import { setStep } from "../redux/slice/formDataSlice";
import { useDispatch } from "react-redux";

const RightStepComponent4 = ({ formData }) => {
  const dispatch = useDispatch();
  const Summary = ({ addon }) => {
    return (
      <div className="flex flex-row justify-between p-3">
        <div className="flex flex-col">
          <div className="text-[16px] text-gray-500 mx-2">{addon.title}</div>
        </div>
        <div className="mx-2 text-green-800">
          {formData.billing === "Yearly" ? (
            <p>${addon.title === "Online Service" ? 1 * 10 : 2 * 10}/yr </p>
          ) : (
            <p>${addon.title === "Online Service" ? 1 : 2}/mo </p>
          )}
        </div>
      </div>
    );
  };

  const addonTotal = formData?.addons?.reduce((sum, addon) => {
    const price =
      formData.billing === "Yearly" ? addon.pricing * 10 : addon.pricing;
    return sum + price;
  }, 0);

  const planTotal =
    formData.billing === "Yearly" ? formData.pricing * 10 : formData.pricing;
  const total = planTotal + addonTotal;

  return (
    <div className="flex flex-col gap-8">
      <div className="ml-20 mb-2">
        <p className="text-4xl font-bold text-gray-800">Finishing up</p>
        <p className="text-gray-500 text-base">
          Double-check everything looks OK befor confirming
        </p>
      </div>
      <div className="bg-gray-200 rounded-2xl flex flex-col gap-4 w-130 ml-16">
        <div className="flex flex-row justify-between p-4">
          <div className="flex flex-col">
            <div className="text-[18px] font-bold text-blue-900">
              {formData.plan}({formData.billing})
            </div>
            <button
              onClick={() => dispatch(setStep(2))}
              className="text-blue-600 underline text-sm hover:text-blue-800"
            >
              Change
            </button>
          </div>
          <div className="my-3 font-bold">
            {formData.billing === "Yearly" ? (
              <p>${formData.pricing * 10}/yr </p>
            ) : (
              <p>${formData.pricing}/mo </p>
            )}
          </div>
        </div>
        <hr className="w-100 mx-10 h-2px" />

        <div>
          <Box display="flex" flexDirection="column">
            {formData?.addons?.map((addons, index) => (
              <Summary key={index} addon={addons} />
            ))}
          </Box>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-2 w-130 ml-16">
        <span className="text-gray-500 text-sm">
          Total ({formData.billing === "Yearly" ? "per year" : "per month"})
        </span>
        <span className="text-lg font-bold text-blue-700">
          ${total}/{formData.billing === "Yearly" ? "yr" : "mo"}
        </span>
      </div>
    </div>
  );
};

export default RightStepComponent4;
