import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Score.css";
import MuiAlert from "../MuiAlert";
const Score = (props) => {
  useEffect(() => {}, []);
  return (
    <div className='game-score'>
      <Typography>Total Intentos: {props.totalTries} </Typography>
      <Typography>Disparos Exitosos: {props.successfulShoots} </Typography>
      <Typography>Disparos Fallados: {props.failedShoots} </Typography>
      <Typography>Intentos Restantes: {props.shootsLeft} </Typography>
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
