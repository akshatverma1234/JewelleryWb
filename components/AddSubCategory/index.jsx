import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { IoClose, IoCloudUploadSharp } from "react-icons/io5";

const AddSubCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="grid grid-cols-1 mb-3">
          <div className="col w-[25%]">
            <h3 className="text-[14px] font-[600] mb-1">Sub Category Name</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <br />

        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <h3 className="text-[18px] font-[600] mb-1">Category Image</h3>
          <br />
          <div className="grid grid-cols-7 gap-4">
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                <IoClose className="text-white text-[17px]" />
              </span>
              <div
                className="uploadBox p-3 rounded-md overflow-hidden border
                      border-dashed ☐ border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100
                      cursor-pointer hover:bg-gray-200 flex items-center justify-center
                      flex-col relative"
              >
                <LazyLoadImage
                  className="w-full  h-full object-cover"
                  alt={"image"}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.5s" },
                  }}
                  src={
                    "https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
                  }
                />
              </div>
            </div>
            <UploadBox multiple={true} />
          </div>
        </div>
        <br />
        <br />
        <div className="w-[250px]">
          <Button className="!bg-blue-500 !py-2 !text-white w-full flex gap-4">
            <IoCloudUploadSharp className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddSubCategory;
