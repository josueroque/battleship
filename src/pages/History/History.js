import { Typography } from "@mui/material";
import React from "react";
import Navigation from "../../components/Header/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./History.css";

const rows = JSON.parse(localStorage.getItem("results"));

const History = (props) => {
  return (
    <>
      <div>
        <Navigation history={props.history} itemValue={2} />
        <div className='history-title'>
          <Typography variant='h5' align='center'>
            Historial de Juego
          </Typography>
        </div>
        <div className='history-table'>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: 500 }}
            className='history-table'
          >
            <Table sx={{ maxWidth: 500 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell component='th' scope='row'>
                    Resultado
                  </TableCell>
                  <TableCell align='right'>Tiros Fallados </TableCell>
                  <TableCell align='right'>Barcos Hundidos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.result}
                    </TableCell>
                    <TableCell align='right'>{row.failedShoots}</TableCell>
                    <TableCell align='right'>{row.sunkenShips}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default History;
