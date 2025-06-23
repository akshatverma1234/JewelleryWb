"use client";
import { Button } from "@mui/material";
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
import React, { useContext, useState } from "react";
import { Tooltip } from "@mui/material";
import SearchBox from "@/components/SearchBox";
import { MyContext } from "@/context/AppContext";

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

const Products = () => {
  const [isOpenProducts, setOpenProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [categoryFilterValue, setCategoryFilterValue] = useState("");
  const context = useContext(MyContext);
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
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[22px] font-[800]">Products</h2>
        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
          <Button className="!btn !bg-green-500 !text-white flex items-center gap-1 btn-sm">
            <CiExport className="text-[18px]" />
            Export
          </Button>
          <Button
            className="!bg-blue-500  !btn-sm !btn !text-white flex items-center gap-1 btn-sm"
            onClick={() =>
              context.setOpenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            <MdOutlineAdd className="text-[18px]" />
            Add Product
          </Button>
        </div>
      </div>
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between mb-2">
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
          <div className="col w-[20%]">
            <SearchBox />
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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
                          src="https://img.freepik.com/free-photo/young-woman-model-with-red-lips_158538-10276.jpg?ga=GA1.1.457199218.1719842889&semt=ais_hybrid&w=740"
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

export default Products;
