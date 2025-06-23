"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import React, { useContext, useState } from "react";
import SearchBox from "@/components/SearchBox";
import { MyContext } from "@/context/AppContext";

const columns = [
  { id: "userImg", label: "User Image", minWidth: 80 },
  { id: "userName", label: "User Name", minWidth: 100 },
  {
    id: "userEmail",
    label: "User Email",
    minWidth: 150,
  },
  {
    id: "userPhone",
    label: "User Phone No",
    minWidth: 130,
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const Users = () => {
  const [isOpenProducts, setOpenProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const context = useContext(MyContext);

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
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between mb-2">
          <div className="col w-[40%]">
            <h2 className="text-[22px] font-[800]">Users List</h2>
          </div>

          <div className="col w-[40%]">
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
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                          alt="User Image"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Akshat Verma</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    akshat@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlinePhone />
                    +91-7668137019
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                          alt="User Image"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Akshat Verma</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    akshat@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlinePhone />
                    +91-7668137019
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                          alt="User Image"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Akshat Verma</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    akshat@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlinePhone />
                    +91-7668137019
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link href="/product/2234">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_3IZ2cV1sHEIKmUSApjI9pyGnmX7B-C5eg&s"
                          alt="User Image"
                          className="w-full h-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell>Akshat Verma</TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    akshat@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlinePhone />
                    +91-7668137019
                  </span>
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

export default Users;
