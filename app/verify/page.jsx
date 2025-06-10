import React from "react";

const Verify = () => {
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] !m-auto rounded-md bg-white !p-5 !px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" width="80" />
          </div>
          <h3 className="text-center text-[18px] text-black !mt-4">
            Verify OTP
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Verify;
