import React from "react";
import thankyou from "../assets/images/icon-thank-you.svg";
import Image from "next/image";
const RightStepComponent5 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-8 py-16 gap-4 ml-16">
      <div>
        <Image src={thankyou} height={80} width={80} alt="Thank you" />
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-bold text-blue-900">
          Thank you!
        </p>
      </div>
      <div>
        <p className="text-gray-500 max-w-md text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you need support, please feel free to email us at
          rjgaming@gmail.com
        </p>
      </div>
    </div>
  );
};

export default RightStepComponent5;
