"use client";
import React, { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const handleChange = (element, idx) => {
    const value = element.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (value && idx < length - 1) {
      document.getElementById(`otp-input-${idx + 1}`).focus();
    }
  };

  const handleKeyDown = (event, idx) => {
    if (event.key === "Backspace" && !otp[idx] && idx > 0) {
      document.getElementById(`otp-input-${idx - 1}`).focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        justifyContent: "center",
      }}
      className="otpBox"
    >
      {otp.map((data, idx) => (
        <input
          type="text"
          key={idx}
          id={`otp-input-${idx}`}
          maxLength={1}
          value={otp[idx]}
          onChange={(e) => handleChange(e.target, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="!w-[45px] !h-[45px] border border-gray-300 rounded text-center text-[17px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default OtpBox;
