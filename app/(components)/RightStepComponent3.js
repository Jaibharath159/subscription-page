import React, { useEffect } from "react";
import { Box, Checkbox } from "@mui/material";
import { setFormData } from "../redux/slice/formDataSlice";
import { useDispatch } from "react-redux";

const RightStepComponent3 = ({ formData }) => {
  const dispatch = useDispatch();
  const AddonItem = [
    {
      title: "Online Service",
      discription: "Access to multiplayer games",
      pricing: 1,
    },
    {
      title: "Large Storage",
      discription: "Extra 1TB of cloud save",
      pricing: 2,
    },
    {
      title: "Customizable Profile",
      discription: "Customise theme on your profile",
      pricing: 2,
    },
  ];

  const [selectedAddons, setSelectedAddons] = React.useState(
    formData?.addons || []
  );
  const toggleAddon = (title, item) => {
    setSelectedAddons(() =>
      selectedAddons.filter((item) => item?.title === title)?.length
        ? selectedAddons.filter((item) => item?.title !== title)
        : [...selectedAddons, item]
    );
  };

  useEffect(() => {
    dispatch(
      setFormData({
        ...formData,
        addons: selectedAddons,
      })
    );
  }, [selectedAddons]);

  const Addon = ({ title, discription, pricing, checked, onChange }) => {
    return (
      <div
        className={`cursor-pointer bg-transparent border-[1px] h-20 w-[500px] mx-20 rounded-xl transition-all
            ${checked ? "border-blue-600 bg-blue-400" : "border-neutral-400"}
            hover:border-blue-600
          `}
      >
        <div className="flex flex-row items-center justify-between gap-4 p-4">
          <div>
            <Checkbox
              checked={checked}
              onChange={onChange}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-semibold leading-none">{title}</p>
            <p className="text-gray-500 text-sm leading-none mt-1">
              {discription}
            </p>
          </div>
          <div>
            {formData.billing === "Yearly" ? (
              <p>+{pricing * 10}$/yr </p>
            ) : (
              <p>+{pricing}$/mo </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="ml-20 mb-2">
        <p className="text-4xl font-bold text-gray-800">Pick add-ons</p>
        <p className="text-gray-500 text-base">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <Box display="flex" flexDirection="column" gap={2}>
          {AddonItem.map((AddonItem, index) => (
            <Addon
              key={index}
              {...AddonItem}
              checked={
                selectedAddons?.filter((item) => item.title === AddonItem.title)
                  ?.length
              }
              onChange={() => {
                toggleAddon(AddonItem.title, AddonItem);
              }}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

export default RightStepComponent3;
