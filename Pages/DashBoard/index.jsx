"use client";
import DashBoardBoxes from "@/components/DashBoardBoxes";
import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "@/components/Badge";
import React, { useState } from "react";

const DashBoard = () => {
  const [isOpenProducts, setOpenProducts] = useState(null);
  const isShowOrderProducts = (idx) => {
    if (isOpenProducts === idx) {
      setOpenProducts(null);
    } else {
      setOpenProducts(idx);
    }
  };
  return (
    <>
      <div className="flex items-center gap-8 mb-5 w-full !p-5 !py-2 border border-[rgba(0,0,0,0.1)] justify-between rounded-md bg-white">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br />
            Akshat
          </h1>
          <p className="mb-2">
            Here, What happing on your store today. See the statistics at once
          </p>
          <Button className="!bg-emerald-600 hover:!bg-emerald-700 !text-white !font-semibold  !rounded-md !capitalize">
            <FaPlus /> Add Product
          </Button>
        </div>

        <img src="./AdminHomePage.jpg" className="w-[250px]" />
      </div>
      <DashBoardBoxes />
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>
        <div class="relative overflow-x-auto mt-1 pb-5">
          <table class="!w-full !text-sm !text-left rtl:!text-right text-!gray-500 dark:!text-gray-400">
            <thead class="!text-gray-700 !uppercase !bg-gray-50 dark:!text-gray-700 dark:!bg-gray-200">
              <tr>
                <th scope="col" className="!px-6 !py-3">
                  &nbsp;
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Products
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="!bg-white !border-b  !border-[rgba(0,0,0,0.2)] !text-gray-800">
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                    onClick={() => isShowOrderProducts(0)}
                  >
                    <FaAngleDown
                      className={`text-[16px] text-[rgba(0,0,0,0.7)] transform transition-transform duration-400 ${
                        isOpenProducts === 0 ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    65654554784444485
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    paytm_656545547
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Gold Ring
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Aksaht Verma
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  7668137019
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="block w-[400px]">
                    6789 Fantasy Street District, Uttar Pradesh, India
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">282007</td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">1200</td>

                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  abc@gmail.com
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">151555551515</span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Badge status={"confirm"} />
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  2024-10-2
                </td>
              </tr>
              <tr>
                <td className="!pl-20" colSpan="6">
                  <div
                    className={`transition-all duration-600  overflow-hidden ${
                      isOpenProducts === 0
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="relative overflow-x-auto">
                      <table className="!w-full !text-sm !text-left rtl:!text-right text-!gray-500 dark:!text-gray-400">
                        <thead className="!text-gray-700 !uppercase !bg-gray-50 dark:!text-gray-700 dark:!bg-gray-200">
                          <tr>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th className="!px-6 !py-3 whitespace-nowrap">
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="!bg-white !border-b !border-[rgba(0,0,0,0.2)] !text-gray-800">
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <span className="text-gray-600">
                                65654554784444485
                              </span>
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              The Gold Ring
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIRS0388R33_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-26826.png"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              1200
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2400
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-[#ededed]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="!bg-white !border-b  !border-[rgba(0,0,0,0.2)] !text-gray-800">
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                    onClick={() => isShowOrderProducts(1)}
                  >
                    <FaAngleDown
                      className={`text-[16px] text-[rgba(0,0,0,0.7)] transform transition-transform duration-400 ${
                        isOpenProducts === 1 ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    65654554784444485
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    paytm_656545547
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Gold Ring
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Aksaht Verma
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  7668137019
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="block w-[400px]">
                    6789 Fantasy Street District, Uttar Pradesh, India
                  </span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">282007</td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">1200</td>

                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  abc@gmail.com
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">151555551515</span>
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Badge status={"confirm"} />
                </td>
                <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                  2024-10-2
                </td>
              </tr>

              <tr>
                <td className="!pl-20" colSpan="6">
                  <div
                    className={`transition-all duration-600  overflow-hidden ${
                      isOpenProducts === 1
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div class="relative overflow-x-auto">
                      <table class="!w-full !text-sm !text-left rtl:!text-right text-!gray-500 dark:!text-gray-400">
                        <thead class="!text-gray-700 !uppercase !bg-gray-50 dark:!text-gray-700 dark:!bg-gray-200">
                          <tr>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="!bg-white !border-b  dark:!border-gray-700 !text-gray-800">
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <span className="text-gray-600">
                                65654554784444485
                              </span>
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              The Gold Ring
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIRS0388R33_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-26826.png"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              Gold Ring
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              1200
                            </td>
                          </tr>
                          <tr className="!bg-white !border-b  dark:!border-gray-700 !text-gray-800">
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <span className="text-gray-600">
                                65654554784444485
                              </span>
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              The Gold Ring
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIRS0388R33_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-26826.png"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              Gold Ring
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                              1200
                            </td>
                          </tr>

                          <tr>
                            <td className="bg-[#ededed]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
