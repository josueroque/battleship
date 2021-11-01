import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Score.css";
import MuiAlert from "../MuiAlert";
const Score = (props) => {
  useEffect(() => {
    console.log(props.ships);
  }, []);
  return (
    <div className='game-score'>
      <Typography>Total Intentos: {props.totalTries} </Typography>
      <Typography>Intentos Fallados: {props.failedShoots} </Typography>
      <Typography>Intentos Restantes: {props.leftShoots} </Typography>
      <Typography>Barcos Hundidos: {props.sunkenShips} </Typography>
      {props.showAlert ? (
        <div className='score-alert'>
          <MuiAlert />
        </div>
      ) : null}
    </div>
  );
};

export default Score;
