import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "@mui/material";
import { IoCloudUploadSharp } from "react-icons/io5";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddSubCategory = () => {
  const [productSubCat, setProductSubCat] = useState("");

  const handleChangeSubCategory = (event) => {
    setProductSubCat(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCat"
                className="w-full"
                size="small"
                value={productSubCat}
                label="Sub Category"
                onChange={handleChangeSubCategory}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Rings</MenuItem>
                <MenuItem value={20}>Bracelets</MenuItem>
                <MenuItem value={30}>Earrings</MenuItem>
                <MenuItem value={30}>Necklace</MenuItem>
                <MenuItem value={30}>Pendants</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Sub Category Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <br />
        </div>
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
