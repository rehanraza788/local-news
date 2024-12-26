import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TestData from "../News api/TestData.json";

export const TestPage = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { xs: "95%", sm: "85%", md: "75%" },
        margin: "20px auto",
        boxShadow: 3,
        overflowX: "auto"
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="ODI Rankings Table">
        <TableHead sx={{ backgroundColor: "#f50057" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Ranks
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "white" }}>
              Teams
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "white" }}
              align="right"
            >
              Matches
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "white" }}
              align="right"
            >
              Points
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "white" }}
              align="right"
            >
              Rating
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TestData.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.Rank}
              </TableCell>
              <TableCell>{row.Team}</TableCell>
              <TableCell align="right">{row.Matches}</TableCell>
              <TableCell align="right">{row.Points}</TableCell>
              <TableCell align="right">{row.Rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
