import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import Switch from "@mui/joy/Switch";
import { setFormData } from "../redux/slice/formDataSlice";
import { useDispatch } from "react-redux";

const RightStepComponent2 = ({ formData }) => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = React.useState(null);
  const PlanItem = [
    {
      title: "Arcade",
      pricing: 9,
      icon: ArcadeIcon,
    },
    {
      title: "Advanced",
      pricing: 12,
      icon: AdvancedIcon,
    },
    {
      title: "Pro",
      pricing: 15,
      icon: ProIcon,
    },
  ];

  const setPlanDetails = (data) => {
    dispatch(
      setFormData({
        ...formData,
        pricing: data.pricing,
        plan: data.title,
      })
    );
  };

  const PlaneCard = ({ title, pricing, icon, onClick, isActive }) => {
    return (
      <div
        onClick={() => {
          onClick();
          setPlanDetails({
            title,
            pricing,
          });
        }}
        className={`cursor-pointer bg-transparent border-[1px] w-38 h-42 rounded-xl transition-all
          ${isActive ? "border-blue-600 bg-blue-400" : "border-neutral-400"}
          hover:border-blue-600 hover:bg-blue-50
        `}
      >
        <div className="flex flex-col">
          <Image
            className="ml-2 mt-2 p-2"
            src={icon}
            alt={title}
            width={60}
            height={60}
          />
          <div className="mt-8 ml-4">
            <p>{title}</p>
            {formData.billing === "Yearly" ? (
              <p>${pricing * 10}/yr </p>
            ) : (
              <p>${pricing}/mo </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 ml-20">
      <div>
        <p className="text-4xl font-bold text-gray-800">Select Your Plan</p>
        <p className="text-gray-500 text-base">
          You have option of monthly and yearly billing
        </p>
      </div>
      <div>
        <Box display="flex" flexDirection="row" gap={2}>
          {PlanItem.map((PlanItem, index) => (
            <PlaneCard
              key={index}
              {...PlanItem}
              isActive={PlanItem.title === formData.plan}
              onClick={() => setActiveIndex(index)}
              // onChange={()=>handleChange(PlanItem)}
            />
          ))}
        </Box>
      </div>
      <div className="bg-gray-200 w-[500px]">
        <Box className="mx-42 my-4">
          <Switch
            slotProps={{ input: { "aria-label": "dark mode" } }}
            startDecorator={<p>Monthly</p>}
            endDecorator={<p>Yearly</p>}
            checked={formData.billing === "Yearly"}
            onChange={(event) => {
              dispatch(
                setFormData({
                  ...formData,
                  billing: event.target.checked ? "Yearly" : "Monthly",
                })
              );
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default RightStepComponent2;
