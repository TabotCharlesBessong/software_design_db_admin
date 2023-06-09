
// import React from "react";
// import data from "../constants/data";
// import { makeStyles } from "@mui/styles";
// import { useState } from "react";
// import useTable from "../component/Table";
// import { Button, Input, InputAdornment, Paper, TableBody, TableRow, TextField, Toolbar } from "@mui/material";
// import { Search } from "@mui/icons-material";
// import { EditOutlined } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   pageContent: {
//     // margin: theme.spacing(5),
//     // padding: theme.spacing(3),
//     margin:'3rem',
//     padding:'2rem'
//   },
//   searchInput: {
//     width: "75%",
//   },
//   newButton: {
//     position: "absolute",
//     right: "10px",
//   },
// }));


// const Treatment = () => {
//   const {treatment,treatment_cell} = data
//   const classes = useStyles()
//   const [filterFn, setFilterFn] = useState(treatment);
//   const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
//     useTable(treatment, treatment_cell, filterFn);
//   const handleSearch = (e) => {
//     let target = e.target;
//     setFilterFn({
//       fn: (items) => {
//         if (target.value == "") return items;
//         else
//           return items.filter((x) =>
//             x.fullName.toLowerCase().includes(target.value)
//           );
//       },
//     });
//   };
//   return (
//     <Paper className={classes.pageContent}>
//       <Toolbar>
//         <TextField
//           id="outlined-basic"
//           label="Outlined"
//           variant="outlined"
//           onChange={handleSearch}
//           className={classes.searchInput}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Search />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Toolbar>

//       <TblContainer>
//         <TblHead />
//         <TableBody>
//           {recordsAfterPagingAndSorting().map((item) => (
//             <TableRow key={item.id}>
//               <TableCell>{item.fullName}</TableCell>
//               <TableCell>{item.email}</TableCell>
//               <TableCell>{item.mobile}</TableCell>
//               <TableCell>{item.department}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </TblContainer>
//       <TblPagination />
//     </Paper>
//   );
// };

// export default Treatment;

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  TablePagination,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import data from "../constants/data";

const Treatment = () => {
  const treatment = data.treatment
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortClick = (event, property) => {
    const isAsc = sortBy === property && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortBy(property);
  };

  const filteredData = treatment.filter((data) =>
    data.disease_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const isAsc = sortOrder === "asc";
    switch (sortBy) {
      case "id":
        return isAsc ? a.id - b.id : b.id - a.id;
      case "disease_name":
        return isAsc
          ? a.disease_name.localeCompare(b.disease_name)
          : b.disease_name.localeCompare(a.disease_name);
      case "crop_affected":
        return isAsc
          ? a.crop_affected.localeCompare(b.crop_affected)
          : b.crop_affected.localeCompare(a.crop_affected);
      default:
        return 0;
    }
  });

  return (
    <div>
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={sortBy === "id" ? sortOrder : false}
                onClick={(event) => handleSortClick(event, "id")}
              >
                ID
              </TableCell>
              <TableCell
                sortDirection={sortBy === "disease_name" ? sortOrder : false}
                onClick={(event) => handleSortClick(event, "disease_name")}
              >
                Disease Name
              </TableCell>
              <TableCell
                sortDirection={sortBy === "crop_affected" ? sortOrder : false}
                onClick={(event) => handleSortClick(event, "crop_affected")}
              >
                Crop Affected
              </TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.disease_name}</TableCell>
                  <TableCell>{data.crop_affected}</TableCell>
                  <TableCell>{data.treatment}</TableCell>
                  <TableCell>{data.duration}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Treatment;
