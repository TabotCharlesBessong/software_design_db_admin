
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
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete, Search } from "@mui/icons-material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "1rem",
  },
});

const ReusableTable = ({ data, onDelete }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  let filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (sortBy !== "") {
    filteredData = filteredData.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  }

  return (
    <div>
      <div className={classes.searchContainer}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton onClick={() => onDelete()}>
          <Delete />
        </IconButton>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(data[0]).map((field) => (
                <TableCell
                  key={field}
                  onClick={() => handleSort(field)}
                  style={{ cursor: "pointer" }}
                >
                  {field}
                  {sortBy === field &&
                    (sortDirection === "asc" ? " ▲" : " ▼")}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                {Object.values(row).map((value) => (
                  <TableCell key={value}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReusableTable;