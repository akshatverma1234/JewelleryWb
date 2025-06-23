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
  { id: "image", label: "Image", minWidth: 150 },
  { id: "catName", label: "Category Name", minWidth: 150 },
  { id: "action", label: "Action", minWidth: 100 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const CategoryList = () => {
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
        <h2 className="text-[22px] font-[600]">Category List</h2>
        <div className="col w-[30%] ml-auto flex items-center justify-end gap-3">
          <Button className="!btn !bg-green-500 !text-white flex items-center gap-1 btn-sm">
            <CiExport className="text-[18px]" />
            Export
          </Button>
          <Button
            className="!bg-blue-500 btn-sm !text-white flex items-center gap-1"
            onClick={() =>
              context.setOpenPanel({
                open: true,
                model: "Add New Category",
              })
            }
          >
            <MdOutlineAdd className="text-[18px]" />
            Add New Category
          </Button>
        </div>
      </div>
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="w-full rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3s947b4cD_X0oAZIPBs5W_cYavcsTCLxjYYEpB2XF0AKveMETWxJYsx2D1sSdWQbY2Z1xzKwXUb5ux8FE0foCuQyqCIV2wn6q6b38LkAwRGjNoZz7eiCLV40"
                          alt="Woman Beauty with Jewelry"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>Rings</TableCell>
                <TableCell width={100}>
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

export default CategoryList;
