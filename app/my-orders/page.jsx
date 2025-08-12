"use client";
import AccountSidebar from "@/components/AccountSidebar";
import { Button } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";
import Badge from "@/components/Badge";

const MyOrders = () => {
  const [isOpenProducts, setOpenProducts] = useState(null);
  const isShowOrderProducts = (idx) => {
    if (isOpenProducts === idx) {
      setOpenProducts(null);
    } else {
      setOpenProducts(idx);
    }
  };
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="rounded-md shadow-md bg-white !p-5">
            <div className="!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px]">My Orders</h2>
              <p className="!mt-0">
                There are <span className="font-bold text-amber-600">2</span>{" "}
                orders
              </p>

              <div class="relative overflow-x-auto !mt-5">
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
                    <tr className="!bg-white !border-b  dark:!border-gray-700 !text-gray-800">
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-[#f1f1f1]"
                          onClick={() => isShowOrderProducts(0)}
                        >
                          {isOpenProducts === 0 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <span className="text-amber-700">
                          65654554784444485
                        </span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <span className="text-amber-700">paytm_656545547</span>
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
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        282007
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        1200
                      </td>

                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        abc@gmail.com
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <span className="text-amber-700">151555551515</span>
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        <Badge status={"confirm"} />
                      </td>
                      <td class="!px-6 !py-4 font-[500] whitespace-nowrap">
                        2024-10-2
                      </td>
                    </tr>
                    {isOpenProducts === 0 && (
                      <tr>
                        <td className="!pl-20" colSpan="6">
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
                                  <td
                                    className="bg-[#ededed]"
                                    colSpan="12"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
