import React from "react";

const LeftStepComponent = ({ step }) => {
  return (
    <div className=" bg-image-container flex flex-col gap-8 rounded-2xl p-10">
      <div className="flex items-center gap-4">
        <div>
          <p
            className={
              step === 1
                ? "border-2 border-transparent text-blue-900 text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2 bg-green-200"
                : "border-2 border-white text-white text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2"
            }
          >
            1
          </p>
        </div>
        <div className="flex flex-col leading-tight mt-2">
          <p className="text-xs text-white tracking-widest uppercase">STEP 1</p>
          <p className="text-sm text-white font-bold">YOUR INFO</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p
            className={
              step === 2
                ? "border-2 border-transparent text-blue-900 text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2 bg-green-200"
                : "border-2 border-white text-white text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2"
            }
          >
            2
          </p>
        </div>
        <div className="flex flex-col leading-tight mt-2">
          <p className="text-xs text-white tracking-widest uppercase">STEP 2</p>
          <p className="text-sm text-white font-bold">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p
            className={
              step === 3
                ? "border-2 border-transparent text-blue-900 text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2 bg-green-200"
                : "border-2 border-white text-white text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2"
            }
          >
            3
          </p>
        </div>
        <div className="flex flex-col leading-tight mt-2">
          <p className="text-xs text-white tracking-widest uppercase">STEP 3</p>
          <p className="text-sm text-white font-bold">ADD-ON</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p
            className={
              step === 4
                ? "border-2 border-transparent text-blue-900 text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2 bg-green-200"
                : "border-2 border-white text-white text-[18px] rounded-[12vw] h-8 w-8 text-center mt-2 mr-2"
            }
          >
            4
          </p>
        </div>
        <div className="flex flex-col leading-tight mt-2">
          <p className="text-xs text-white tracking-widest uppercase">STEP 4</p>
          <p className="text-sm text-white font-bold">SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default LeftStepComponent;
