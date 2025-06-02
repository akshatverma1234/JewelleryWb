import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="!py-6 bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-2 !py-8 !pb-8 ">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#B76E79] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] !mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-[#B76E79] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] !mt-3">7 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <IoWalletOutline className="text-[40px] transition-all duration-300 group-hover:text-[#B76E79] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] !mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <GoGift className="text-[40px] transition-all duration-300 group-hover:text-[#B76E79] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] !mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <MdSupportAgent className="text-[40px] transition-all duration-300 group-hover:text-[#B76E79] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] !mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <hr />

          <div className="footer flex  !py-8 ">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.3)] ">
              <h2 className="text-[20px] font-[600] !mb-4">Contact us</h2>
              <p className="text-[14px] font-[400] !pb-4">
                Verma Jewellers - Jewellery Shop
                <br />
                Ghaziabad, India
              </p>
              <Link
                href="mailto:someone@example.com"
                className="link text-[14px]"
              >
                vermajewellers@gmail.com
              </Link>
              <span className="text-[22px] font-[600] block w-full !mt-3 !mb-5 text-[#B76E79]">
                (+91) 7668137019
              </span>
              <div className="flex items-center gap-2">
                <BsChatLeft className="text-[40px] text-[#B76E79]" />
                <span className="text-[16px] font-[600]">
                  Online chat <br /> Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex !pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] !mb-4">Products</h2>
                <ul>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] !mb-4">Our Company</h2>
                <ul>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      FAQs & Support
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full !mb-3">
                    <Link href="/" className="link ">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[35%] flex !pl-8 flex-col !pr-8">
              <h2 className="text-[18px] font-[600] !mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts
              </p>
              <form className="!mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border !outline-none !pl-4 !pr-4 rounded-sm !mb-4 focus:border-black"
                  placeholder="Your Email Address"
                ></input>
                <Button className="btn-org !mb-4">Subscribe</Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the term and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] !py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                href="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:!bg-[#B76E79] transition-all duration-300"
              >
                <RiFacebookLine className="text-[24px]  group-hover:!text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:!bg-[#B76E79] transition-all duration-300"
              >
                <FaInstagram className="text-[24px]  group-hover:!text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:!bg-[#B76E79] transition-all duration-300"
              >
                <FiTwitter className="text-[24px]  group-hover:!text-white" />
              </Link>
            </li>
          </ul>
          <p className="text-[13px] text-end !mb-0">© Verma Jewellers</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
