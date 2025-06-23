import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import UploadBox from "@/components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";

const ProductAdd = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");

  const handleChangeCategory = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeSubCategory = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">
                Product Description
              </h3>
              <textarea
                type="text"
                className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCat"
                className="w-full"
                size="small"
                value={productCat}
                label="Category"
                onChange={handleChangeCategory}
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
              <h3 className="text-[14px] font-[600] mb-1">
                Product Sub Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCat"
                className="w-full"
                size="small"
                value={productSubCat}
                label="Category"
                onChange={handleChangeSubCategory}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Price</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Old Price</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Is Featured</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productFeatured"
                className="w-full"
                size="small"
                value={productFeatured}
                label="Category"
                onChange={handleChangeFeatured}
              >
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Stock</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Brand</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Product Discount</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h3 className="text-[14px] font-[600] mb-1">Ratings</h3>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>

          <div className="w-full col p-5 px-0">
            <h3 className="font-[700] text-[18px]">Media & Images</h3>
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
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
                    }
                  />
                </div>
              </div>
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
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
                    }
                  />
                </div>
              </div>
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
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
                    }
                  />
                </div>
              </div>
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
                      style: { transitionDelay: "1s" },
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
        </div>

        <hr />
        <br />
        <Button className="!bg-blue-500 !py-2 !text-white w-full flex gap-4">
          <IoCloudUploadSharp className="text-[25px] text-white" />
          Publish and View
        </Button>
      </form>
    </section>
  );
};

export default ProductAdd;
