"use client";
import DashBoardBoxes from "@/components/DashBoardBoxes";
import { Button, Tooltip } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "@/components/Badge";
import React, { useState, PureComponent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Progress from "@/components/ProgressBar";
import { LuTrash2 } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CiExport } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const columns = [
  { id: "products", label: "Product", minWidth: 150 },
  { id: "category", label: "Category", minWidth: 100 },
  {
    id: "subcategory",
    label: "Sub Category",
    minWidth: 150,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 130,
  },
  {
    id: "sales",
    label: "Sales",
    minWidth: 130,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 120,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const DashBoard = () => {
  const [isOpenProducts, setOpenProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [categoryFilterValue, setCategoryFilterValue] = useState("");

  const handleChangeCategory = (event) => {
    setCategoryFilterValue(event.target.value);
  };

  const isShowOrderProducts = (idx) => {
    if (isOpenProducts === idx) {
      setOpenProducts(null);
    } else {
      setOpenProducts(idx);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="flex items-center gap-8 mb-5 w-full !p-5 !py-2 border border-[rgba(0,0,0,0.1)] justify-between rounded-md bg-[#f1faff]">
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
        <div className="relative overflow-x-auto mt-1 pb-5">
          <table className="!w-full !text-sm !text-left rtl:!text-right text-!gray-500 dark:!text-gray-400">
            <thead className="!text-gray-700 !uppercase !bg-gray-50 dark:!text-gray-700 dark:!bg-gray-200">
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
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
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
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    65654554784444485
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    paytm_656545547
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Gold Ring
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Aksaht Verma
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  7668137019
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="block w-[400px]">
                    6789 Fantasy Street District, Uttar Pradesh, India
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  282007
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  1200
                </td>

                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  abc@gmail.com
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">151555551515</span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Badge status={"confirm"} />
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
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
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
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
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    65654554784444485
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">
                    paytm_656545547
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Gold Ring
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  Aksaht Verma
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  7668137019
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="block w-[400px]">
                    6789 Fantasy Street District, Uttar Pradesh, India
                  </span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  282007
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  1200
                </td>

                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  abc@gmail.com
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <span className="btn-primary font-[600]">151555551515</span>
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                  <Badge status={"confirm"} />
                </td>
                <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
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
                    <div className="relative overflow-x-auto">
                      <table className="!w-full !text-sm !text-left rtl:!text-right text-!gray-500 dark:!text-gray-400">
                        <thead className="!text-gray-700 !uppercase !bg-gray-50 dark:!text-gray-700 dark:!bg-gray-200">
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
                              Gold Ring
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              1200
                            </td>
                          </tr>
                          <tr className="!bg-white !border-b  dark:!border-gray-700 !text-gray-800">
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
                              Gold Ring
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                              2
                            </td>
                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
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

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Products</h2>
        </div>
        <div className="flex items-center w-full pl-5 mb-2 justify-between pr-5">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[14px] mb-2 uppercase">
              Category By
            </h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilterValue}
              onChange={handleChangeCategory}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>
          <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
            <Button className="!btn !bg-green-500 !text-white flex items-center gap-1">
              <CiExport className="text-[18px]" />
              Export
            </Button>
            <Button className="!bg-blue-500  !btn-sm !btn !text-white flex items-center gap-1">
              <MdOutlineAdd className="text-[18px]" />
              Add Product
            </Button>
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                          alt="Woman Beauty with Jewelry"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-500">
                        <Link href="/product/2234">
                          Woman Beauty with Smooth Skin Make up and Golden
                          Jewelry.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Jewellery</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Rings</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-col">
                    <span className="price  text-blue-500 text-[14px] font-[600]">
                      ₹200
                    </span>
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹200
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234 </span>sale
                  </p>
                  <Progress value={40} type={"warning"} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Tooltip title="Edit Product" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <MdOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                    <Tooltip title="View Product Details" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                    <Tooltip title="Remove Product" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <LuTrash2 className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://media.istockphoto.com/id/1427466087/photo/woman-beauty-with-smooth-skin-make-up-and-golden-jewelry-beautiful-girl-with-perfect-lips-and.jpg?s=612x612&w=0&k=20&c=B3ngEKRxzyKWlHX3dFZT8IiwuVPo3YPsWUDzz2TCUzY="
                          alt="Woman Beauty with Jewelry"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-500">
                        <Link href="/product/2234">
                          Woman Beauty with Smooth Skin Make up and Golden
                          Jewelry.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Jewellery</span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Rings</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-col">
                    <span className="price  text-blue-500 text-[14px] font-[600]">
                      ₹200
                    </span>
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹200
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">234 </span>sale
                  </p>
                  <Progress value={40} type={"warning"} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Tooltip title="Edit Product" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <MdOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                    <Tooltip title="View Product Details" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1] !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                    <Tooltip title="Remove Product" placement="top" />
                    <Button className="!w-[35px] !h-[35px] !border-b !bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-white !min-w-[35px]">
                      <LuTrash2 className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={5}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default DashBoard;
